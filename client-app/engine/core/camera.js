/*global DEBUG:true*/
import Tween from "./tween";
import mat4 from './geometry/mat4'
import mathEx from './mathEx'
import Rect from "./geometry/rect";

// https://stackoverflow.com/questions/7692988/opengl-math-projecting-screen-space-to-world-space-coords
export default class Camera {

    objFollowTo = null;
    scene = null;
    sceneWidth;
    sceneHeight;
    pos = {x:0, y:0}; // todo to point2d
    scale = {x:1,y:1};
    lastToleranceTime = 0;

    _rect = new Rect();
    _rectScaled = new Rect();

    TOLERANCE_TIME = 2000;

    constructor(game){
        this.game = game;
    }

    followTo(gameObject) {
        if (DEBUG && !gameObject) throw `Camera:followTo(gameObject) - gameObject not provided`;
        this.objFollowTo = gameObject;
        this.scene = this.game._currentScene;
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
            time: this.TOLERANCE_TIME
        });
    }

    update(currTime,delta) {
        let cameraRect = this.getRectScaled(); // todo cache this value
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
        if (gameObject._lastDirection==='Right') x+=cameraRect.width/2; // todo set camera follow mode
        if (gameObject._lastDirection==='Left') x-=cameraRect.height/2;
        if (x<0) x = 0;
        if (y<0) y = 0;
        if (x>this.sceneWidth - w + tileWidth)  x = this.sceneWidth -w + tileWidth;
        if (y>this.sceneHeight -h + tileHeight) y = this.sceneHeight -h + tileHeight;
        let scaleVal = Math.abs(gameObject.rigidBody.vel.x)>0?0.95:1;
        if (this.TOLERANCE_TIME===0) {
            this.pos.x = x;
            this.pos.y = y;
        }
        else if (currTime-this.lastToleranceTime>this.TOLERANCE_TIME) {
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

    render(){
        this.game.renderer.translate(this.game.width/2,this.game.height/2);
        this.game.renderer.scale(this.scale.x,this.scale.y);
        // camera rotation will be here if needs
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




