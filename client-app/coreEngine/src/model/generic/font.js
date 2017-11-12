
import BaseModel from '../baseModel'

export default class Font extends BaseModel {

    type = 'Font';
    resourcePath = null;
    fontSize=12;
    fontColor= null;
    fontFamily='Monospace';
    fontContext=null;
    fontColor = {r:0,g:0,b:0};

    constructor(game){
        super(game);
    }
}