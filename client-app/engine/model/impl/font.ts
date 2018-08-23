
import {DebugError} from "../../debugError";
declare const DEBUG: boolean;

import {Game} from "../../core/game";
import {Rect} from "../../core/geometry/rect";
import {Resource} from "../resource";

class FontContext {

    width:number = 0;
    height:number = 0;
    symbols:Array<Rect> = [];
}


export class Font extends Resource {

    type:string = 'Font';
    fontSize:number=12;
    fontFamily:string='Monospace';
    fontContext:{symbols:{[key:string]:Rect}}=null;
    fontColor = {r:0,g:0,b:0};

    constructor(game:Game){
        super(game);
    }
    

    revalidate(){
        super.revalidate();
        let s = this.fontContext.symbols;
        this.fontContext.symbols = {};
        Object.keys(s).forEach((key:string)=>{
            if (DEBUG) {
                if (s[key]==undefined) {
                    console.error(s);
                    throw new DebugError(`font revalidation error: can not find proper object for key ${key}`);
                }
            }
            this.fontContext.symbols[key] = new Rect(s[key].x,s[key].y,s[key].width,s[key].height);
        });
    }  // todo is it really need???

    getDefaultSymbolHeight():number{
        return this.fontContext.symbols[' '].height;
    }
}