
import BaseModel from '../baseModel'
import FrameAnimation from "./frameAnimation";
import SpriteSheet from "./spriteSheet";
import AbstractFilter from "../../core/renderer/webGl/filters/abstract/abstractFilter";
import Game from "../../core/game";
import Rect from "../../core/geometry/rect";
import {ArrayEx} from "../../declarations";
import ArcadeRigidBody from "../../core/physics/arcadeRigidBody";
import GameObject from "./gameObject";


export default class GameObjectProto extends BaseModel {

    type:string = 'GameObjectProto';
    spriteSheet:SpriteSheet = null;
    _behaviour = null;
    commonBehaviour = [];
    currFrameIndex:number = 0;
    _sprPosX:number = 0;
    _sprPosY:number = 0;
    frameAnimations:ArrayEx<any> = [] as ArrayEx<any>;
    _currFrameAnimation:FrameAnimation;
    startFrameAnimationName:string = null;
    _timeCreated:number = null;
    tileOffset =  {x:0,y:0};
    tileRepeat:boolean = false;
    groupName:string = '';
    _individualBehaviour = null;
    filters: Array<AbstractFilter> = [];
    _layer;
    blendMode:string;
    rigidBody:ArcadeRigidBody;

    private _frameRect = new Rect();

    static find(name:string){
        //return game.getCurrScene()._allGameObjects.find({name:name});
    }
    static findAll(name:string) {
        //return game.getCurrScene()._allGameObjects.findAll({name: name});
    }

    constructor(game:Game){
        super(game);
    }

    revalidate(){
        super.revalidate();
        this.setFrameIndex(this.currFrameIndex);
        if (this.spriteSheet) {
            this.width = this.spriteSheet._frameWidth;
            this.height = this.spriteSheet._frameHeight;
        }
        this.frameAnimations.forEach((f,i)=>{
            this.frameAnimations[i] = this.frameAnimations[i].clone(); // todo need clone?
            this.frameAnimations[i]._gameObject = this;
        });
        this.rigidBody = this.rigid?new ArcadeRigidBody(this.game,this):null;
    }

    playFrameAnimation(animationName:string,opts?){
        let fr = this.frameAnimations.find(it=>it.name===animationName);
        fr._gameObject = this;
        this._currFrameAnimation = fr;
        fr.play(opts);
    }

    setFrameIndex(index:number){
        this.currFrameIndex = index;
        this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
        this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
    }

    getFrameRect(){
        this._frameRect.set(
            this._sprPosX,
            this._sprPosY,
            this.width,
            this.height
        );
        return this._frameRect;
    }

    update(time,delta) {
        super.update(time,delta);
        this._currFrameAnimation && this._currFrameAnimation.update(time);
        //if (_gameObject.angleVel) _gameObject.angle += _gameObject.angleVel * delta / 1000;

        if (this._individualBehaviour) this._individualBehaviour.onUpdate(time,delta);
        for (let i=0,max = this.commonBehaviour.length;i<max;i++){
            this.commonBehaviour[i].onUpdate(time,delta);
        }
        if (this.rigidBody!==null) this.rigidBody.update(time,delta);
        this.game.renderer.draw(this);
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