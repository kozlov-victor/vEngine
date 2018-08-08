
import {Point2d} from "../../core/geometry/point2d";
declare const IN_EDITOR:boolean,DEBUG:boolean;

import {FrameAnimation} from "./frameAnimation";
import {SpriteSheet} from "./spriteSheet";
import {AbstractFilter} from "../../core/renderer/webGl/filters/abstract/abstractFilter";
import {Game} from "../../core/game";
import {Rect} from "../../core/geometry/rect";
import {ArrayEx} from "../../declarations";
import {ShaderMaterial} from "../../core/light/shaderMaterial";
import {Renderable} from "../../drawable/interface/renderable";
import {RigidShape} from "../../core/physics/rigidShapes";
import {RenderableModel} from "../renderableModel";
import {_global} from "../../core/global";

let cloneId:number = 0;

export class GameObjectProto extends RenderableModel implements Renderable {

    type:string = 'GameObjectProto';
    spriteSheet:SpriteSheet = null;
    commonBehaviour = [];
    currFrameIndex:number = 0;
    frameAnimations:ArrayEx<FrameAnimation> = [] as ArrayEx<FrameAnimation>;

    startFrameAnimationName:string = null;
    tileOffset =  {x:0,y:0};
    tileRepeat:boolean = false;
    groupNames:string[] = [];
    collideWith:string[] = [];
    filters: AbstractFilter[] = [];
    blendMode:string = null;
    acceptLight:boolean = false;
    shaderMaterial:ShaderMaterial = new ShaderMaterial();
    rigidBody:RigidShape = null;
    velocity = new Point2d(0,0);

    _frameRect = new Rect(); // todo make all private
    _sprPosX:number = 0;
    _sprPosY:number = 0;
    _currFrameAnimation:FrameAnimation;
    _timeCreated:number = null; // todo only for particle system
    _individualBehaviour = null;

    // static find(name:string){
    //     //return game.getCurrScene()._allGameObjects.find({name:name});
    // }
    // static findAll(name:string) {
    //     //return game.getCurrScene()._allGameObjects.findAll({name: name});
    // }

    constructor(game:Game){
        super(game);
    }

    createGameObject(){
        let go = new _global['GameObject'](this.game); // to avoid circular dependency
        go.gameObjectProto = this.clone();
        go.revalidate();
        go.id +=`_clone_${++cloneId}`;
        go.setCommonBehaviour();
        return go;
    }

    revalidate(){
        super.revalidate();
        this.setFrameIndex(this.currFrameIndex);
        if (this.spriteSheet) {
            this.width = this.spriteSheet._frameWidth;
            this.height = this.spriteSheet._frameHeight;
        }
        this.frameAnimations.forEach((f,i)=>{
            //this.frameAnimations[i] = this.frameAnimations[i].clone(); // todo need clone?
            this.frameAnimations[i]._gameObject = this;
        });
        if (this.rigid) {
            // let center = new Vec2(this.pos.x+this.anchor.x,this.pos.y+this.anchor);
            // let mass = 10; // todo
            // this.rigidBody = new RigidRectangle(this.game,center,this.width,this.height,mass);
        }
        if (IN_EDITOR) {
            this.spriteSheet['_lastRevalidated'] = new Date().getTime().toString(16);
        }
    }

    playFrameAnimation(animationName:string,opts?):FrameAnimation{
        let fr:FrameAnimation = this.frameAnimations.find(it=>it.name===animationName);
        fr._gameObject = this;
        this._currFrameAnimation = fr;
        fr.play(opts);
        return fr;
    }

    setFrameIndex(index:number){
        this.currFrameIndex = index % this.spriteSheet._numOfFrames;
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

        if (this._individualBehaviour) this._individualBehaviour.onUpdate(time,delta);
        for (let i=0,max = this.commonBehaviour.length;i<max;i++){
            if (this.commonBehaviour[i].onUpdate) this.commonBehaviour[i].onUpdate(time,delta); // todo its undefined when clone
        }
        if (this.rigidBody!==null) {
            this.rigidBody.update(time,delta);
            this.pos.x = ~~(this.rigidBody.mCenter.x - this.rigidBody['mWidth']/2); // todo
            this.pos.y = ~~(this.rigidBody.mCenter.y - this.rigidBody['mHeight']/2);
            this.angle = this.rigidBody.mAngle;
        } else {
            if (this.velocity.x) this.pos.x += this.velocity.x * delta / 1000;
            if (this.velocity.y) this.pos.y += this.velocity.y * delta / 1000;
        }

        if (this.children.length>0) {
            for(let i=0;i<this.children.length;i++) {
                this.children[i].update(time,delta);
            }
        }
        this.render();
    }


    draw(){
        this.game.renderer.draw(this);
    }

    onShow(){
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
        if (this.startFrameAnimationName!==null) this.playFrameAnimation(this.startFrameAnimationName);
    }

    stopFrAnimations(){
        this._currFrameAnimation && this._currFrameAnimation.stop();
    }
}

_global['GameObjectProto'] = GameObjectProto;