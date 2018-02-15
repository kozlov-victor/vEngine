import Container from "./container";

declare const DEBUG:boolean;

import BaseModel from '../../../baseModel'
import Font from "../../font";
import Rect from "../../../../core/geometry/rect";
import Point2d from "../../../../core/geometry/point2d";
import Size from "../../../../core/geometry/size";
import Color from "../../../../core/color";


export default class TextField extends Container {

    readonly type ='TextField';
    _chars:string[] = null;
    text:string = '';
    font:Font = null;

    constructor(game){
        super(game);
    }


    revalidate(){
        super.revalidate();
        if (DEBUG && !this.name) {
            console.error(this);
            throw `property 'name' not set at object of type ${this.type}`;
        }
        if (this.font===null)
            this.font = this.game.repository.getArray('Font')[0];
        if (DEBUG && !this.font) throw `at least one Font must be created`;
        this.setFont(this.font);
    }

    setText(text:string) {
        text+='';
        this._chars = [];
        this.text = text;
        let rows = [{width:0}];
        let currRowIndex = 0;
        this.height = this.font.fontContext.symbols[' '].height;
        for (let i=0,max=text.length;i<max;i++) {
            this._chars.push(text[i]);
            let currSymbolInFont = this.font.fontContext.symbols[text[i]] || this.font.fontContext.symbols[' '];
            if (text[i]==='\n') {
                currRowIndex++;
                this.height+=currSymbolInFont.height;
                rows[currRowIndex] = {width:0};
            } else {
                rows[currRowIndex].width+=currSymbolInFont.width;
            }
        }
        this.width = Math.max.apply(Math,rows.map(function(o){return o.width;}));
        this._dirty = true;
    }
    getText(){return this.text}
    setFont(font){
        this.font = font;
        this.setText(this.text);
    }
    update(time,delta){
        super.update(time,delta);
        this.render();
    }
    render(){
        let initialPosX:number = this.paddingLeft + this.marginLeft;
        let initialPosY:number = this.paddingTop + this.marginTop;
        let posX:number = initialPosX;
        let posY:number = initialPosY;
        for (let i=0,max=this._chars.length;i<max;i++) {
            let ch = this._chars[i];
            let charInCtx:Rect = this.font.fontContext.symbols[ch]||this.font.fontContext.symbols['?'];
            if (ch==='\n') {
                posX = initialPosX;
                posY+= charInCtx.height;
                continue;
            }
            let destRect:Rect = Rect.fromPool();
            destRect.getPoint().set(this.pos);
            destRect.getPoint().addXY(posX,posY);
            destRect.setXYWH(this.pos.x+posX,this.pos.y+posY,charInCtx.width,charInCtx.height);
            this.game.renderer.drawImage(
                this.font.resourcePath, charInCtx, destRect
            );
            posX+=charInCtx.width;
        }

    }

}
