
import BaseModel from '../baseModel'

export default class GameObjectProto extends BaseModel {

    static find(name){
        //return game.getCurrScene()._allGameObjects.find({name:name});
    }
    static findAll(name) {
        //return game.getCurrScene()._allGameObjects.findAll({name: name});
    }

    constructor(){
        super();

        this.spriteSheet = {type:'spriteSheet'};
        this._behaviour = null;
        this.commonBehaviour = [{type:'commonBehaviour'}];
        this.currFrameIndex = 0;
        this._sprPosX = 0;
        this._sprPosY = 0;
        this.frameAnimations =  [{type:'frameAnimation'}];
        this._currFrameAnimation = null;
        this._timeCreated = null;
        this.tileOffset =  {x:0,y:0};
        this.tileRepeat = false;
    }

    getFrAnimation(animationName){
        return this.frameAnimations.find({name: animationName});
    }
    setFrameIndex(index){
        this.currFrameIndex = index;
        this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
        this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
    }
    setSpriteSheet(spriteSheet){
        this.spriteSheet = spriteSheet;
        this.width = spriteSheet._frameWidth;
        this.height = spriteSheet._frameHeight;
    }
    update(time,delta) {
        let self = this;
        self._super(time,delta);
        self._currFrameAnimation && this._currFrameAnimation.update(time);
        self.__updateIndividualBehaviour__(delta);
        self.__updateCommonBehaviour__();
        self._render();
    }
    stopFrAnimations(){
        this._currFrameAnimation && this._currFrameAnimation.stop();
    }
    _render(){
        // let self = this;
        // let ctx = renderer.getContext();
        // ctx.save();
        // self._super();
        //
        // self.tileRepeat ?
        //     _drawPattern(ctx,self):
        //     _draw(ctx,self);
        //
        // ctx.restore();
    }
}