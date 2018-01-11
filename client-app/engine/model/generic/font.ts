
import BaseModel from '../baseModel'
import Game from "../../core/game";
import Rect from "../../core/geometry/rect";

class FontContext {

    width:number = 0;
    height:number = 0;
    symbols:Array<Rect> = [];
}

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

    revalidate(){ // todo must be done in serializer
        super.revalidate();
        let s = this.fontContext.symbols;
        this.fontContext.symbols = {};
        Object.keys(s).forEach(key=>{
            this.fontContext.symbols[key] = new Rect(s[key].x,s[key].y,s[key].width,s[key].height);
        });
    }
}