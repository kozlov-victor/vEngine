/*global DEBUG:true*/
import Tween from "./tween";
import mat4 from './mat4'
import MatrixStack from './renderer/webGl/base/matrixStack'

export default class Camera {

    objFollowTo = null;
    scene = null;
    sceneWidth;
    sceneHeight;
    pos = {x:0, y:0};
    scale = {x:1,y:1};
    lastToleranceTime = 0;

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
        if (gameObject._lastDirection==='Right') x+=400; // todo remove hardcoded value, set camera follow mode
        if (gameObject._lastDirection==='Left') x-=400;
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
                    //'scale.x':scaleVal,'scale.y':scaleVal
                }
            });
        }

        this.cameraTween.update(currTime);
        this.render();
    }

    render(){
        this.game.renderer.translate(this.game.width/2,this.game.height/2);
        this.game.renderer.scale(this.scale.x,this.scale.y);
        // camera rotation will be here id needs
        this.game.renderer.translate(-this.game.width/2,-this.game.height/2);
        this.game.renderer.translate(-this.pos.x,-this.pos.y);
    }

    getRect(){
        return {
            x:this.pos.x,
            y:this.pos.y,
            width: this.game.width,
            height: this.game.height
        }
    }

    getRectScaled(){ // todo cache this method
        let game = this.game;
        let camera = this.game.camera;
        let scale = camera.scale;
        let w = this.game.width;
        let h = this.game.height;
        let fi = Math.atan2(w,h); // todo const
        let r = Math.sqrt(w*w+h*h);
        let oldPosX = r*Math.cos(fi);
        let oldPosY = r*Math.sin(fi);
        let newPosX = r/scale.x*Math.cos(fi); // delta screen offset due to camera view scaling
        let newPosY = r/scale.y*Math.sin(fi);
        let scaleOffsetX = newPosX - oldPosX;
        let scaleOffsetY = newPosY - oldPosY;
        let x = this.pos.x - scaleOffsetX;
        let y = this.pos.y - scaleOffsetY;
        //game.renderer.log(game.mouse.lastPoint);
        return  {
            scaleOffsetX,
            scaleOffsetY,
            x, y,
            width: w + scaleOffsetX*2,
            height: h + scaleOffsetY*2
        };
    }

}




