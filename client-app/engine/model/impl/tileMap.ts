
declare const DEBUG:boolean;

import BaseModel from '../baseModel'
import SpriteSheet from "./spriteSheet";
import Game from "../../core/game";
import Rect from "../../core/geometry/rect";

export default class TileMap extends BaseModel {

    type:string = "TileMap";
    spriteSheet:SpriteSheet = null;
    data:Array<any> = [];
    _tilesInScreenX:number;
    _tilesInScreenY:number;
    
    constructor(game:Game){
        super(game);
    }

    fromTiledJSON(source:number[],mapWidth:number,mapHeight:number){
        this.data = [];
        let cnt:number = 0;
        for (let j=0;j<mapHeight;j++){
            this.data[j] = [];
            for (let i=0;i<mapWidth;i++) {
                let val:number = source[cnt++];
                if (val===0) this.data[j][i] = undefined;
                else this.data[j][i] = val - 1;
            }
        }
        this.width = mapWidth;
        this.height = mapHeight;
        if (DEBUG) {
            let found = cnt;
            let expected = source.length;
            if (expected!==found) {
                throw `incorrect mapWidth/mapHeight provided. Expected ${expected} tiles, but ${found} found (${mapWidth}*${mapHeight})`;
            }
        }
    }

    revalidate(){
        this.game.camera._updateRect();
        let camRect = this.game.camera.getRectScaled();
        this._tilesInScreenX = ~~(camRect.width / this.spriteSheet._frameWidth);
        this._tilesInScreenY = ~~(camRect.height / this.spriteSheet._frameHeight);
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
        for (let y=tilePosY;y<=h;y++) {
            for (let x=tilePosX;x<=w;x++) {
                let index = this.data[y] && this.data[y][x];
                if (index===null || index===undefined) continue;
                let destRect:Rect = Rect.fromPool().clone();
                destRect.setXYWH(
                    x*spriteSheet._frameWidth, y*spriteSheet._frameHeight,
                    spriteSheet._frameWidth, spriteSheet._frameHeight
                );
                renderer.drawImage(
                    spriteSheet.getDefaultResourcePath(),
                    spriteSheet.getFrameRect(index),
                    destRect
                );
            }
        }
    }
    
}