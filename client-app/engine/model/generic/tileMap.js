
import BaseModel from '../baseModel'

export default class TileMap extends BaseModel {

    type = "TileMap";
    spriteSheet = null;
    data = [];
    
    constructor(game){
        super(game);
    }
    
}