/*global DEBUG:true*/
import Tween from "./tween";

export default class Camera {

    objFollowTo = null;
    scene = null;
    sceneWidth;
    sceneHeight;
    pos = {x:0, y:0};
    scale = {x:1,y:1};

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
            target: this.pos,
            ease: 'easeInQuad',
            to: {x:this.pos.x,y:this.pos.y},
            time: 2500,
            progress: e=>{
                //console.log(e);
            }
        });
    }

    update(currTime) {
        if (!this.objFollowTo) return;
        let pos = this.pos;
        let oldPos = this.oldPos;
        let tileWidth = this.scene.tileMap.spriteSheet?this.scene.tileMap.spriteSheet._frameWidth:0; // todo ?
        let tileHeight = this.scene.tileMap.spriteSheet? this.scene.tileMap.spriteSheet._frameHeight:0;
        let w = this.game.width;
        let h = this.game.height;
        let wDiv2 = w/2;
        let hDiv2 = h/2;
        let x = this.objFollowTo.pos.x - wDiv2;
        let y = this.objFollowTo.pos.y - hDiv2;
        if (x<0) x = 0;
        if (y<0) y = 0;
        if (x>this.sceneWidth - w + tileWidth)  x = this.sceneWidth -w + tileWidth;
        if (y>this.sceneHeight -h + tileHeight) y = this.sceneHeight -h + tileHeight;
        this.cameraTween.reuse({
            to: {x,y}
        });
        // pos.x = x;
        // pos.y = y;
        this.cameraTween.update(currTime);
    }

    getRect(){
        return {
            x:this.pos.x,
            y:this.pos.y,
            width: this.game.width,
            height: this.game.height
        }
    }

}




