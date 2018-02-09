
import BaseModel from '../baseModel'
import SpriteSheet from "./spriteSheet";
import Game from "../../core/game";
import Rect from "../../core/geometry/rect";
import Point2d from "../../core/geometry/point2d";

export default class TileMap extends BaseModel {

    type:string = "TileMap";
    spriteSheet:SpriteSheet = null;
    data:Array<any> = [];
    _tilesInScreenX:number;
    _tilesInScreenY:number;
    
    constructor(game:Game){
        super(game);
    }

    getTileAt(x:number,y:number){
        if (!this.spriteSheet) return;
        let tilePosX = ~~(x / this.spriteSheet._frameWidth);
        let tilePosY = ~~(y / this.spriteSheet._frameHeight);
        if (!this.data[tilePosY]) return;
        let value = this.data[tilePosY][tilePosX];
        if (value==null) return;
        return {
            getRect: ()=>{
                let x = tilePosX * this.spriteSheet._frameWidth + 1,
                    y = tilePosY * this.spriteSheet._frameHeight + 1,
                    width =  this.spriteSheet._frameWidth-2,
                    height = this.spriteSheet._frameHeight-2;
                return {
                    x,y,width,height,
                    right: x + width,
                    bottom: y + height
                }
            },
            tileIndex: this.spriteSheet.numOfFramesH * tilePosY + tilePosX + 1,
            value
        }
    }

    getTilesAtRect(rect){
        let result = [];
        if (!this.spriteSheet) return result;
        let alreadyCheckedTiles = {};

        let x = rect.x,y;
        let maxX = rect.x+rect.width,maxY = rect.y+rect.height;
        while (true) {
            y = rect.y;
            while (true) {
                let tileInfo = this.getTileAt(x,y);
                if (tileInfo) {
                    if (!alreadyCheckedTiles[tileInfo.tileIndex]) {
                        result.push(tileInfo);
                        alreadyCheckedTiles[tileInfo.tileIndex] = true;
                    }
                }
                if (y===maxY) break;
                y+=this.spriteSheet._frameHeight;
                if (y>maxY) y = maxY;
            }
            if (x===maxX) break;
            x+=this.spriteSheet._frameWidth;
            if (x>maxX) x = maxX;
        }
        //if (result.length) result = [result[0]];
        //if (result.length) console.log('collided with',result.length);
        return result;
    }

    update(){
        let spriteSheet = this.spriteSheet;
        if (!spriteSheet) return;
        let camera = this.game.camera;
        let renderer = this.game.renderer;
        let cameraRect = camera.getRectScaled();
        let tilePosX = ~~((cameraRect.x) / this.spriteSheet._frameWidth);
        let tilePosY = ~~((cameraRect.y) / this.spriteSheet._frameHeight);
        if (tilePosX<0) tilePosX = 0;
        if (tilePosY<0) tilePosY = 0;
        let w = tilePosX + this._tilesInScreenX + 1;
        let h = tilePosY + this._tilesInScreenY + 1;
        for (let y=tilePosY;y<h;y++) {
            for (let x=tilePosX;x<w;x++) {
                let index = this.data[y] && this.data[y][x];
                if (index===null || index===undefined) continue;
                let destRect:Rect = Rect.fromPool();
                destRect.setXYWH(
                    x*spriteSheet._frameWidth, y*spriteSheet._frameHeight,
                    spriteSheet._frameWidth, spriteSheet._frameHeight
                );
                renderer.drawImage(
                    spriteSheet.resourcePath,
                    spriteSheet.getFrameRect(index),
                    destRect
                );
            }
        }
    }
    
}