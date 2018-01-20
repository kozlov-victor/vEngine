declare const DEBUG:boolean;

import Tween from "./tween";
import * as mat4 from './geometry/mat4'
import * as mathEx from './mathEx'
import Rect from "./geometry/rect";
import Point2d from "./geometry/point2d";
import Game from "./game";
import GameObject from "../model/generic/gameObject";
import Scene from "../model/generic/scene";
import {random} from "./mathEx";

interface CameraTweenTarget {
    time:number,
    point:Point2d
}

export default class Camera {

    objFollowTo:GameObject = null;
    game:Game;
    scene:Scene = null;
    sceneWidth:number = 0;
    sceneHeight:number = 0;
    pos:Point2d = new Point2d(0,0);
    scale:Point2d = new Point2d(1,1);

    private lastToleranceTime:number = 0;
    private _rect:Rect = new Rect();
    private _rectScaled:Rect = new Rect();
    private cameraShakeTween:Tween = null;
    private cameraPosCorrection:any = {
        current: new Point2d(),
        max: new Point2d()
    };

    constructor(game:Game){
        this.game = game;
    }

    followTo(gameObject) {
        if (gameObject===null) return;
        if (DEBUG && gameObject===undefined) throw `Camera:followTo(gameObject) - gameObject not provided`;
        this.objFollowTo = gameObject;
        this.scene = this.game.getCurrScene();
        if (this.scene.tileMap.spriteSheet) {
            this.sceneWidth = this.scene.tileMap.spriteSheet._frameWidth*this.scene.tileMap.width;
            this.sceneHeight = this.scene.tileMap.spriteSheet._frameHeight*this.scene.tileMap.height;
        } else {
            this.sceneWidth = this.game.getCurrScene().width || this.game.width;
            this.sceneHeight = this.game.getCurrScene().height || this.game.height;
        }
    }

    update(currTime:number,delta:number) {

        let gameObject:GameObject = this.objFollowTo;
        if (!gameObject) return;
        let tileWidth = this.scene.tileMap.spriteSheet?this.scene.tileMap.spriteSheet._frameWidth:0; // todo ?
        let tileHeight = this.scene.tileMap.spriteSheet? this.scene.tileMap.spriteSheet._frameHeight:0;
        let w = this.game.width;
        let h = this.game.height;
        let wDiv2 = w/2;
        let hDiv2 = h/2;

        let wScaled = this.getRectScaled().width;
        if (gameObject['_lastDirection'] === 'Right')
            this.cameraPosCorrection.max.x=wScaled/3; // todo _lastDirection
        if (gameObject['_lastDirection'] === 'Left')
            this.cameraPosCorrection.max.x=-wScaled/3;
        let currCorrection:Point2d =
            this.cameraPosCorrection.max.
            substract(this.cameraPosCorrection.current).
            multiply(0.05);

        this.cameraPosCorrection.current.add(currCorrection);

        let newPos:Point2d = Point2d.fromPool();
        let pointToFollow:Point2d = Point2d.fromPool();
        pointToFollow.set(this.objFollowTo.pos);
        pointToFollow.addXY(-wDiv2,-hDiv2);
        newPos.x = this.pos.x+(pointToFollow.x + this.cameraPosCorrection.current.x - this.pos.x)*0.1;
        newPos.y = this.pos.y+(pointToFollow.y - this.pos.y)*0.1;
        if (newPos.x < 0)
            newPos.x = 0;
        if (newPos.y < 0)
            newPos.y = 0;
        if (newPos.x > this.sceneWidth - w + tileWidth)
            newPos.x = this.sceneWidth - w + tileWidth;
        if (newPos.y > this.sceneHeight - h + tileHeight)
            newPos.y = this.sceneHeight - h + tileHeight;

        this.pos.setXY(newPos.x,newPos.y);


        if (this.cameraShakeTween) this.cameraShakeTween.update(currTime);
        this._updateRect();
        this.render();
    }

    shake(amplitude:number,time:number) {
        let tweenTarget:CameraTweenTarget = {time:0,point:new Point2d(0,0)};
        this.cameraShakeTween = new Tween({
            target:tweenTarget,
            time,
            to:{time:time},
            progress:()=>{
                let r1 = random(-amplitude/2,amplitude/2);
                let r2 = random(-amplitude/2,amplitude/2);
                tweenTarget.point.setXY(r1,r2);
            },
            complete:()=>this.cameraShakeTween = null
        });
    }

    _updateRect(){
        let point00 = this.screenToWorld(Point2d.fromPool().setXY(0,0));
        let pointWH = this.screenToWorld(Point2d.fromPool().setXY(this.game.width,this.game.height));
        this._rectScaled.set(
            point00.x,point00.y,
            pointWH.x - point00.x,pointWH.y - point00.y
        );
    }

    render(){ //TRS - (transform rotate scale) reverted
        this.game.renderer.translate(this.game.width/2,this.game.height/2);
        this.game.renderer.scale(this.scale.x,this.scale.y);
        // todo rotation does not work correctly yet
        //this.game.renderer.rotateZ(this.angle);
        this.game.renderer.translate(-this.game.width/2,-this.game.height/2);
        this.game.renderer.translate(-this.pos.x,-this.pos.y);
        if (this.cameraShakeTween!==null) this.game.renderer.translate(
            this.cameraShakeTween.getTarget().point.x,
            this.cameraShakeTween.getTarget().point.y
        );
    }

    screenToWorld(p:Point2d){
        let mScale = mat4.makeScale(this.scale.x,this.scale.y,1);
        let point2d = mathEx.unProject(
            p, this.game.width,this.game.height,mScale);
        point2d.add(this.pos);
        return point2d;
    }

    getRect(){
        this._rect.set(this.pos.x,this.pos.y,this.game.width,this.game.height);
        return this._rect;
    }

    getRectScaled(){
        return this._rectScaled;
    }

}




