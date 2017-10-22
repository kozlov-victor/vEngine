/*global IN_EDITOR:true*/
import BaseModel from '../baseModel'

export default class GameObjectProto extends BaseModel {

    static find(name){
        //return game.getCurrScene()._allGameObjects.find({name:name});
    }
    static findAll(name) {
        //return game.getCurrScene()._allGameObjects.findAll({name: name});
    }

    constructor(game){
        super(game);
        this.type = 'GameObjectProto';
        this.spriteSheet = null;
        this._behaviour = null;
        this.commonBehaviour = [];
        this.currFrameIndex = 0;
        this._sprPosX = 0;
        this._sprPosY = 0;
        this.frameAnimations =  [];
        this._currFrameAnimation = null;
        this.startFrameAnimationName = null;
        this._timeCreated = null;
        this.tileOffset =  {x:0,y:0};
        this.tileRepeat = false;
        this.groupName = '';
        this._individualBehaviour = null;
    }

    revalidate(){
        this.setFrameIndex(this.currFrameIndex);
        if (this.spriteSheet) {
            this.width = this.spriteSheet._frameWidth;
            this.height = this.spriteSheet._frameHeight;
        }
        this.frameAnimations.forEach((f,i)=>{
            this.frameAnimations[i] = this.frameAnimations[i].clone();
            this.frameAnimations[i]._gameObject = this;
        });
    }

    playFrameAnimation(animationName,opts){
        let fr = this.frameAnimations.find(it=>it.name===animationName);
        fr._gameObject = this;
        this._currFrameAnimation = fr;
        fr.play(opts);
    }

    setFrameIndex(index){
        this.currFrameIndex = index;
        this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
        this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
    }

    update(time,delta) {
        super.update(time);
        this._currFrameAnimation && this._currFrameAnimation.update(time);

        let deltaX = this.vel.x * delta / 1000;
        let deltaY = this.vel.y * delta / 1000;
        let posX = this.pos.x+deltaX;
        let posY = this.pos.y+deltaY;
        //if (_gameObject.angleVel) _gameObject.angle += _gameObject.angleVel * delta / 1000;
        //collider.manage(_gameObject,posX,posY);
        this.pos.x = posX;
        this.pos.y = posY;

        this.game._renderer.draw(this);
        if (this._individualBehaviour) this._individualBehaviour.onUpdate();
    }

    onShow(){
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
        if (this.startFrameAnimationName!=null) this.playFrameAnimation(this.startFrameAnimationName);
    }

    stopFrAnimations(){
        this._currFrameAnimation && this._currFrameAnimation.stop();
    }

    kill(){
        this._layer.kill(this);
    }
}