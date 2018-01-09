
import Tween from "./tween";
import * as mat4 from './geometry/mat4'
import * as mathEx from './mathEx'
import Rect from "./geometry/rect";
import Point2d from "./geometry/point2d";
import Game from "./game";
import GameObject from "../model/generic/gameObject";
import Scene from "../model/generic/scene";
import {DEBUG} from "../declarations";


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
    private cameraTween:Tween;

    FOLLOWING_TOLERANCE_TIME:number = 2000;

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
        this.cameraTween = new Tween({
            target: this,
            ease: 'easeInQuad',
            to: {x:this.pos.x,y:this.pos.y},
            time: this.FOLLOWING_TOLERANCE_TIME
        });
    }

    update(currTime,delta) {
        let cameraRect = this.getRectScaled();
        let gameObject = this.objFollowTo;
        if (!gameObject) return;
        let tileWidth = this.scene.tileMap.spriteSheet?this.scene.tileMap.spriteSheet._frameWidth:0; // todo ?
        let tileHeight = this.scene.tileMap.spriteSheet? this.scene.tileMap.spriteSheet._frameHeight:0;
        let w = this.game.width;
        let h = this.game.height;
        let wDiv2 = w/2;
        let hDiv2 = h/2;
        let x = gameObject.pos.x - wDiv2;
        let y = gameObject.pos.y - hDiv2;
        if (gameObject['_lastDirection']==='Right') x+=cameraRect.width/2; // todo set camera follow mode // todo _lastDirection
        if (gameObject['_lastDirection']==='Left') x-=cameraRect.height/2;
        if (x<0) x = 0;
        if (y<0) y = 0;
        if (x>this.sceneWidth - w + tileWidth)  x = this.sceneWidth -w + tileWidth;
        if (y>this.sceneHeight -h + tileHeight) y = this.sceneHeight -h + tileHeight;
        let scaleVal = Math.abs(gameObject.rigidBody.vel.x)>0?0.95:1;
        if (this.FOLLOWING_TOLERANCE_TIME===0) {
            this.pos.x = x;
            this.pos.y = y;
        }
        else if (currTime-this.lastToleranceTime>this.FOLLOWING_TOLERANCE_TIME) {
            this.lastToleranceTime = currTime;
            this.cameraTween.reuse({
                to: {
                    'pos.x':x,'pos.y':y,
                    'scale.x':scaleVal,'scale.y':scaleVal
                }
            });
        }

        this.cameraTween.update(currTime);
        this._updateRect();
        this.render();
    }

    _updateRect(){
        let point00 = this.screenToWorld(0,0);
        let pointWH = this.screenToWorld(this.game.width,this.game.height);
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
    }

    screenToWorld(screenX,screenY){
        let mScale = mat4.makeScale(this.scale.x,this.scale.y,1);
        let point2d = mathEx.unProject(
            screenX,screenY,
            this.game.width,this.game.height,mScale);
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




