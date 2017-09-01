
import editData from 'app/providers/editData'
import restResource from 'app/providers/rest/resource'
import i18n from 'app/providers/i18n'
import restFileSystem from 'app/providers/rest/fileSystem'
import utils from 'app/providers/utils'

import GameObject from 'coreEngine/src/model/generic/gameObject'
import SpriteSheet from 'coreEngine/src/model/generic/spriteSheet'

export default RF.registerComponent('app-frame-animation-dialog', {
    template: {
        type: 'string',
        value: require('./frameAnimationDialog.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    utils,
    i18n: i18n.getAll(),

    isStopped: true,
    from:0,to:1,step:1,
    frames:'',

    open: function(){
        this.isStopped = true;
        this.frames = this.editData.currFrameAnimationInEdit.frames.join(',');
        this.editData.currFrameAnimationInEdit._gameObject = this.editData.currGameObjectInEdit.clone();
        RF.getComponentById('frameAnimationModal').open();
    },
    allIndexes: function(){
        let res = this.utils.getArray(this.editData.currGameObjectInEdit.spriteSheet._numOfFrames);
        return res.join(',')
    },
    setAllIndexes: function(){
        this.frames=this.allIndexes();
    },
    setRangeIndexes: function(){
        this.frames=utils.range(+this.from,+this.to,+this.step).join(',');
    },
    playAnimation: function(){
        let self = this;
        self.isStopped = false;
        try {
            self.editData.currFrameAnimationInEdit.frames = JSON.parse('['+self.frames+']');
        } catch(e){
            console.error(e);
            return;
        }
        self.editData.currFrameAnimationInEdit.play();
        setTimeout(function _anim(){
            self.editData.currFrameAnimationInEdit.update(new Date().getTime());

            let i = self.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
            self.editData.currFrameAnimationInEdit._gameObject.setFrameIndex(i);

            if (self.isStopped) {
                self.isStopped = false;
                return;
            }
            RF.digest();
            if (RF.getComponentById('frameAnimationModal').opened) setTimeout(_anim,50);
        },0);
    },
    stopAnimation: function(){
        this.isStopped = true;
    },
    nextFrame:function(){
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.nextFrame();
    },
    previousFrame:function(){
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.previousFrame();
    },
    getLoopArr(){
        if (!editData.currFrameAnimationInEdit._gameObject)
            editData.currFrameAnimationInEdit._gameObject = new GameObject(editData.game);
        if (!editData.currFrameAnimationInEdit._gameObject.spriteSheet) {
            editData.currFrameAnimationInEdit._gameObject.spriteSheet = new SpriteSheet(editData.game);
        }
        let lastIndex = editData.currFrameAnimationInEdit.
                _gameObject.spriteSheet.numOfFramesH
                    *
                editData.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesV;
        return utils.getArray(lastIndex);
    },
    async createOrEditFrameAnimation(){
        let fa = editData.currFrameAnimationInEdit;
        fa.frames = JSON.parse('['+this.frames+']');

        let resp = await restResource.save(fa);
        if (resp.created) {
            fa.id = resp.id;
            editData.game._repository.addObject(fa);
            editData.currGameObjectInEdit.frameAnimations.push(fa);
        } else {
            let editedFa = editData.currGameObjectInEdit.frameAnimations.find(it=>it.id==fa.id);
            editedFa.fromJSON(fa.toJSON());
            fa.updateCloner();
            editData.game._repository.updateObject(fa);
        }
        await restResource.save(editData.currGameObjectInEdit);
        editData.currGameObjectInEdit.updateCloner();

        RF.getComponentById('frameAnimationModal').close();

    }
});