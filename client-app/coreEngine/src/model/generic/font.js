
import BaseModel from '../baseModel'

export default class Font extends BaseModel {
    constructor(game){
        super(game);
        this.type = 'Font';
        this.resourcePath = null;
        this.fontSize=12;
        this.fontColor= null;
        this.fontFamily='Monospace';
        this.fontContext=null;
        this.fontColor = {r:0,g:0,b:0}
    }
}