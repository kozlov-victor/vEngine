import Container from "../generic/container";

declare const DEBUG:boolean;

import Font from "../../font";
import Rect from "../../../../core/geometry/rect";

export enum TEXT_ALIGN {
    LEFT,RIGHT,CENTER,JUSTIFY
}

class TextInfo {
    allCharsCached:CharInfo[] = [];
    width:number = 0;
    height:number = 0;
    private strings:StringInfo[] = [];
    reset(){
        this.allCharsCached = [];
        this.strings = [];
    }
    newString(){
        this.strings.push(new StringInfo());
    }
    newChar(c:CharInfo){
        this.strings[this.strings.length-1].chars.push(c);
        this.allCharsCached.push(c);
    }
    revalidate(){
        this.height = 0;
        this.width = 0;
        for (let s of this.strings) {
            s.calcSize();
            this.height+=s.height;
            if (s.width>this.width) this.width = s.width;
        }
    }
}

class CharInfo {
    destRect:Rect = new Rect();
    sourceRect:Rect = new Rect();
}

class StringInfo {
    chars:CharInfo[] = [];
    width:number = 0;
    height:number = 0;
    calcSize(){
        this.width = 0;
        this.height = this.chars.length?this.chars[0].sourceRect.height:0;
        for (let ch of this.chars) {
            this.width+=ch.sourceRect.width;
        }
    }
}

export default class TextField extends Container {

    readonly type ='TextField';
    private _textInfo:TextInfo = new TextInfo();
    text:string = '';
    font:Font = null;
    textAlign:TEXT_ALIGN = TEXT_ALIGN.LEFT;

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
        this._dirty = true;
    }

    onGeometryChanged(){
        super.onGeometryChanged();
        let initialPosX:number = this.pos.x + this.paddingLeft + this.marginLeft;
        let initialPosY:number = this.pos.y + this.paddingTop + this.marginTop;
        let posX:number = initialPosX;
        let posY:number = initialPosY;

        let textInfo = this._textInfo;
        textInfo.reset();
        textInfo.newString();
        let defaultHeight:number = this.font.fontContext.symbols[' '].height;
        let text:string = this.text;
        for (let i=0,max=text.length;i<max;i++) {
            if (text[i]==='\n') {
                textInfo.newString();
                posX = initialPosX;
                posY+= defaultHeight;
            } else {
                let charRect:Rect = this.font.fontContext.symbols[text[i]] || this.font.fontContext.symbols[' '];
                let charInfo = new CharInfo();
                charInfo.sourceRect = charRect;
                charInfo.destRect.setXYWH(posX,posY,charRect.width,charRect.height);
                textInfo.newChar(charInfo);
                posX+=charRect.width;
            }
        }
        textInfo.revalidate();
        this.width = textInfo.width;
        this.height = textInfo.height;
    }

    setText(text){
        this.text  = text;
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
        for (let charInfo of this._textInfo.allCharsCached) {
            this.game.renderer.drawImage(
                this.font.resourcePath, charInfo.sourceRect, charInfo.destRect
            );
        }
    }

}
