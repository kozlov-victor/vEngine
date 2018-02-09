
import BaseModel from '../baseModel'
import FrameAnimation from "./frameAnimation";
import SpriteSheet from "./spriteSheet";
import AbstractFilter from "../../core/renderer/webGl/filters/abstract/abstractFilter";
import Game from "../../core/game";
import Rect from "../../core/geometry/rect";
import {ArrayEx} from "../../declarations";
import ArcadeRigidBody from "../../core/physics/arcadeRigidBody";
import GameObject from "./gameObject";
import ShaderMaterial from "../../core/light/shaderMaterial";
import Layer from "./layer";
import AbstractRenderer from "../../core/renderer/abstract/abstractRenderer";
import {Renderable} from "../../renderable/renderable";


export default class GameObjectProto extends BaseModel implements Renderable {

    type:string = 'GameObjectProto';
    spriteSheet:SpriteSheet = null;
    commonBehaviour = [];
    currFrameIndex:number = 0;
    frameAnimations:ArrayEx<FrameAnimation> = [] as ArrayEx<FrameAnimation>;

    startFrameAnimationName:string = null;
    tileOffset =  {x:0,y:0};
    tileRepeat:boolean = false;
    groupName:string = '';
    filters: Array<AbstractFilter> = [];
    blendMode:string = null;
    acceptLight:boolean = false;
    shaderMaterial:ShaderMaterial = new ShaderMaterial();
    rigidBody:ArcadeRigidBody;

    _frameRect = new Rect(); // todo make all private
    _layer:Layer;
    _behaviour = null;
    _sprPosX:number = 0;
    _sprPosY:number = 0;
    _currFrameAnimation:FrameAnimation;
    _timeCreated:number = null;
    _individualBehaviour = null;

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
        this._frameRect.setXYWH(
            this._sprPosX,
            this._sprPosY,
            this.width,
            this.height
        );
        return this._frameRect;
    }

    update(time:number,delta:number) {
        super.update(time,delta);
        this._currFrameAnimation && this._currFrameAnimation.update(time);
        //if (_gameObject.angleVel) _gameObject.angle += _gameObject.angleVel * delta / 1000;

        if (this._individualBehaviour) this._individualBehaviour.onUpdate(time,delta);
        for (let i=0,max = this.commonBehaviour.length;i<max;i++){
            if (this.commonBehaviour[i].onUpdate) this.commonBehaviour[i].onUpdate(time,delta); // todo its undefined when clone
        }
        if (this.rigidBody!==null) this.rigidBody.update(time,delta);
        let renderer:AbstractRenderer = this.game.renderer;

        renderer.save();
        renderer.translate(this.pos.x,this.pos.y);
        if (!(this.angle===0 && this.scale.equal(1))) {
            let halfV = this.width /2;
            let halfH = this.height/2;
            renderer.translate(halfV,halfH);
            renderer.scale(this.scale.x,this.scale.y);
            renderer.rotateZ(this.angle);
            //ctx.rotateY(a);
            renderer.translate(-halfV, -halfH);
        }

        this.render();

        if (this.children.length>0) {
            renderer.save();
            for(let i=0,max=this.children.length;i<max;i++) {
                this.children[i].update(time,delta);
            }
            renderer.restore();
        }

        renderer.restore();

    }


    render(){
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
        this._layer.kill(this.id);
    }
}