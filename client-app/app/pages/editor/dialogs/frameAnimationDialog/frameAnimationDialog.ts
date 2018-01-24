import BaseComponent from "../../../../baseComponent";
import GameObject from "../../../../../engine/model/impl/gameObject";
import SpriteSheet from "../../../../../engine/model/impl/spriteSheet";

declare const RF;

@RF.decorateComponent({
    name: 'app-frame-animation-dialog',
    template: require('./frameAnimationDialog.html')
})
export default class FrameAnimationDialog extends BaseComponent {

    isStopped = true;
    from = 0;
    to = 1;
    step = 1;
    frames = '';

    constructor(){
        super();
    }


    open(){
        this.isStopped = true;
        this.frames = this.editData.currFrameAnimationInEdit.frames.join(',');
        this.editData.currFrameAnimationInEdit._gameObject = this.editData.currGameObjectInEdit.clone();
        RF.getComponentById('frameAnimationModal').open();
    }
    allIndexes(){
        let res = this.utils.getArray(this.editData.currGameObjectInEdit.spriteSheet._numOfFrames);
        return res.join(',')
    }
    setAllIndexes(){
        this.frames=this.allIndexes();
    }
    setRangeIndexes(){
        this.frames=this.utils.range(+this.from,+this.to,+this.step).join(',');
    }
    playAnimation(){
        this.isStopped = false;
        try {
            this.editData.currFrameAnimationInEdit.frames = JSON.parse('['+this.frames+']');
        } catch(e){
            console.error(e);
            return;
        }
        this.editData.currFrameAnimationInEdit.play();

        let _anim = ()=>{
            this.editData.currFrameAnimationInEdit.update(new Date().getTime());

            let i = this.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
            this.editData.currFrameAnimationInEdit._gameObject.setFrameIndex(i);

            if (this.isStopped) {
                this.isStopped = false;
                return;
            }
            if (RF.getComponentById('frameAnimationModal').opened) setTimeout(_anim,50);
        };
        setTimeout(_anim,0);
    }
    stopAnimation(){
        this.isStopped = true;
    }
    nextFrame(){
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.nextFrame();
    }
    previousFrame(){
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.previousFrame();
    }
    getLoopArr(){
        let editData = this.editData;
        if (!editData.currFrameAnimationInEdit._gameObject)
            editData.currFrameAnimationInEdit._gameObject = new GameObject(editData.game);
        if (!editData.currFrameAnimationInEdit._gameObject.spriteSheet) {
            editData.currFrameAnimationInEdit._gameObject.spriteSheet = new SpriteSheet(editData.game);
        }
        let lastIndex = editData.currFrameAnimationInEdit.
                _gameObject.spriteSheet.numOfFramesH
                    *
                editData.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesV;
        return this.utils.getArray(lastIndex);
    }
    async createOrEditFrameAnimation(){
        let fa = this.editData.currFrameAnimationInEdit;
        fa.frames = JSON.parse('['+this.frames+']');

        let resp = await this.restResource.save(fa);
        if (resp.created) {
            fa.id = resp.id;
            this.editData.game.repository.addObject(fa);
            this.editData.currGameObjectInEdit.frameAnimations.push(fa);
        } else {
            let editedFa = this.editData.currGameObjectInEdit.frameAnimations.find(it=>it.id==fa.id);
            editedFa.fromJSON(fa.toJSON());
            fa.updateCloner();
            this.editData.game.repository.updateObject(fa);
        }
        await this.restResource.save(this.editData.currGameObjectInEdit);
        this.editData.currGameObjectInEdit.updateCloner();

        RF.getComponentById('frameAnimationModal').close();

    }
}