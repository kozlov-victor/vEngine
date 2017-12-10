/*global IN_EDITOR:true*/
/*global DEBUG:true*/
/*global window:true*/
import BaseModel from '../baseModel'


export default class GameObjectProto extends BaseModel {

    type = 'GameObjectProto';
    spriteSheet = null;
    _behaviour = null;
    commonBehaviour = [];
    currFrameIndex = 0;
    _sprPosX = 0;
    _sprPosY = 0;
    frameAnimations =  [];
    _currFrameAnimation = 0;
    startFrameAnimationName = null;
    _timeCreated = null;
    tileOffset =  {x:0,y:0};
    tileRepeat = false;
    groupName = '';
    _individualBehaviour = null;

    static find(name){
        //return game.getCurrScene()._allGameObjects.find({name:name});
    }
    static findAll(name) {
        //return game.getCurrScene()._allGameObjects.findAll({name: name});
    }

    constructor(game){
        super(game);
    }

    revalidate(){
        this.setFrameIndex(this.currFrameIndex);
        if (this.spriteSheet) {
            this.width = this.spriteSheet._frameWidth;
            this.height = this.spriteSheet._frameHeight;
        }
        this.frameAnimations.forEach((f,i)=>{
            this.frameAnimations[i] = this.frameAnimations[i].clone(); // todo need clone?
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
        //if (_gameObject.angleVel) _gameObject.angle += _gameObject.angleVel * delta / 1000;

        if (this._individualBehaviour) this._individualBehaviour.onUpdate(time,delta);
        for (let i=0,max = this.commonBehaviour.length;i<max;i++){
            this.commonBehaviour[i].onUpdate(time,delta); // todo "update"?
        }
        this.rigidBody.update(time,delta);
        this.game._renderer.draw(this);
    }

    onShow(){
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
        if (this.startFrameAnimationName!==null) this.playFrameAnimation(this.startFrameAnimationName);
    }

    stopFrAnimations(){
        this._currFrameAnimation && this._currFrameAnimation.stop();
    }

    kill(){
        this._layer.kill(this);
    }
}