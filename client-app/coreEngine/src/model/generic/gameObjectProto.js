
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

        this.width = 0;
        this.height = 0;
        this.spriteSheet = null;
        this.scale = {x:1,y:1};
        this.vel = {x:0,y:0};
        this.pos = {x:0,y:0};
        this.angle = 0;
        this.alpha = 1;
        this.rigid = false;
        this._behaviour = null;
        this.commonBehaviour = [];
        this.currFrameIndex = 0;
        this._sprPosX = 0;
        this._sprPosY = 0;
        this.frameAnimations =  [];
        this._currFrameAnimation = null;
        this._timeCreated = null;
        this.tileOffset =  {x:0,y:0};
        this.tileRepeat = false;
        this.groupName = '';
    }

    getFrAnimation(animationName){
        //return this.frameAnimations.find({name: animationName});
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
        this._super(time,delta);
        this._currFrameAnimation && this._currFrameAnimation.update(time);
        this.__updateIndividualBehaviour__(delta);
        this.__updateCommonBehaviour__();
        this._render();
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