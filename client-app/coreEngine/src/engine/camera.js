/*global DEBUG:true*/
export default class Camera {

    objFollowTo = null;
    scene = null;
    sceneWidth;
    sceneHeight;
    pos = {x:0, y:0};

    constructor(game){
        this.game = game;
    }

    followTo(gameObject) {
        if (DEBUG && !gameObject) throw `Camera:followTo() - gameObject not provided`;
        this.objFollowTo = gameObject;
        this.scene = this.game._currentScene;
        if (this.scene.tileMap.spriteSheet) {
            this.sceneWidth = this.scene.tileMap.spriteSheet._frameWidth*this.scene.tileMap.width;
            this.sceneHeight = this.scene.tileMap.spriteSheet._frameHeight*this.scene.tileMap.height;
        } else {
            this.sceneWidth = this.game.getCurrScene().width || this.game.width;
            this.sceneHeight = this.game.getCurrScene().height || this.game.height;
        }
    }

    update() {
        if (!this.objFollowTo) return;
        let pos = this.pos;
        let tileWidth = this.scene.tileMap.spriteSheet?this.scene.tileMap.spriteSheet._frameWidth:0; // todo ?
        let tileHeight = this.scene.tileMap.spriteSheet? this.scene.tileMap.spriteSheet._frameHeight:0;
        let w = this.game.width;
        let h = this.game.height;
        let wDiv2 = w/2;
        let hDiv2 = h/2;
        pos.x = this.objFollowTo.pos.x - wDiv2;
        pos.y = this.objFollowTo.pos.y - hDiv2;
        if (pos.x<0) pos.x = 0;
        if (pos.y<0) pos.y = 0;
        if (pos.x>this.sceneWidth - w + tileWidth) pos.x = this.sceneWidth -w + tileWidth;
        if (pos.y>this.sceneHeight -h + tileHeight) pos.y = this.sceneHeight -h + tileHeight;
    }

}




