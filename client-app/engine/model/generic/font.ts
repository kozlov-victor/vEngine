
import BaseModel from '../baseModel'
import Game from "../../core/game";

export default class Font extends BaseModel {

    type:string = 'Font';
    resourcePath:string = null;
    fontSize:number=12;
    fontFamily:string='Monospace';
    fontContext=null;
    fontColor = {r:0,g:0,b:0};

    constructor(game:Game){
        super(game);
    }
}