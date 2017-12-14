
import BaseModel from '../baseModel'

export default class TileMap extends BaseModel {

    type = "TileMap";
    spriteSheet = null;
    data = [];
    
    constructor(game){
        super(game);
    }

    getTileAt(x,y){
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
    
}