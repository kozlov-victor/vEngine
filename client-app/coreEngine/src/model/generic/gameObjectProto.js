
import BaseModel from '../baseModel'
import * as commonBehaviours from '../../commonBehaviour/all';

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
        this.commonBehaviour.forEach(cb=>{
            let CbClazz = commonBehaviours[cb.name];
            let instance = new CbClazz(this._game);
            instance.manage(this,cb.parameters);
        });
    }

    getRect(){
        return {
            x:      this.pos.x,
            y:      this.pos.y,
            width:  this.width,
            height: this.height
        };
    }

    playFrameAnimation(animationName){
        let fr = this.frameAnimations.find(it=>it.name===animationName);
        fr._gameObject = this;
        this._currFrameAnimation = fr;
        fr.play();
    }

    setFrameIndex(index){
        this.currFrameIndex = index;
        this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
        this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
    }

    update(time,delta) {
        super.update(time);
        this._currFrameAnimation && this._currFrameAnimation.update(time);
        this._game._renderer.draw(this);
        if (this._individualBehaviour) this._individualBehaviour.onUpdate();
    }

    onShow(){
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
    }

    stopFrAnimations(){
        this._currFrameAnimation && this._currFrameAnimation.stop();
    }
}