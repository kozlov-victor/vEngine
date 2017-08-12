
import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';
import utils from 'app/providers/utils';

import repository from 'coreEngine/src/engine/repository';

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
    from:0,to:1,
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
        this.frames=utils.range(+this.from,+this.to).join(',');
        console.log(this.from,this.to);
        console.log(utils.range(+this.from,+this.to));
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
        let self = this;
        self.stopAnimation();
        self.editData.currFrameAnimationInEdit.nextFrame();
    },
    previousFrame:function(){
        let self = this;
        self.stopAnimation();
        self.editData.currFrameAnimationInEdit.previousFrame();
    },
    getLoopArr(){
        if (!editData.currFrameAnimationInEdit._gameObject)
            editData.currFrameAnimationInEdit._gameObject = {spriteSheet:{}}; // todo dirty
        let lastIndex = editData.currFrameAnimationInEdit.
                _gameObject.spriteSheet.numOfFramesH
                    *
                editData.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesV;
        return utils.getArray(lastIndex);
    },
    createOrEditFrameAnimation: function(){
        let self = this;
        let fa = editData.currFrameAnimationInEdit;
        self.editData.currFrameAnimationInEdit.frames = JSON.parse('['+self.frames+']');

        restResource.
        save(fa).
        then((resp)=>{
            if (resp.created) {
                fa.id = resp.id;
                editData.frameAnimationList.add(fa);
                editData.currGameObjectInEdit.frameAnimations.add(fa);
                return restResource.save(editData.currGameObjectInEdit)
            } else {
                fa.updateCloner();
            }
        }).
        then(function(){
            editData.currGameObjectInEdit.updateCloner();
            RF.getComponentById('frameAnimationModal').close();
            RF.digest();
        }).
        catch(window.catchPromise)

    }
});