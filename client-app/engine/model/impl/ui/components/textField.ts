import Container from "../generic/container";

declare const DEBUG:boolean;
type char = string;

import Font from "../../font";
import Rect from "../../../../core/geometry/rect";
import Point2d from "../../../../core/geometry/point2d";

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
    revalidate(defaultSymbolHeight:number){
        this.height = 0;
        this.width = 0;
        for (let s of this.strings) {
            s.calcSize(defaultSymbolHeight);
            this.height+=s.height;
            if (s.width>this.width) this.width = s.width;
        }
    }
    align(textAlign:TEXT_ALIGN) {
        for (let s of this.strings) {
            s.align(textAlign,this.width);
        }
    }
}

class CharInfo {
    symbol:char;
    destRect:Rect = new Rect();
    sourceRect:Rect = new Rect();
}

class CharsHolder {
    chars:CharInfo[] = [];
    moveBy(dx:number,dy:number){
        for (let ch of this.chars) {
            ch.destRect.getPoint().addXY(dx,dy);
        }
    }
    moveTo(x:number,y:number){
        let initialOffsetX:number = 0;
        for (let ch of this.chars) {
            ch.destRect.getPoint().setXY(initialOffsetX + x,y);
            initialOffsetX+=ch.sourceRect.width;
        }
    }
}

class WordInfo extends CharsHolder {
    width:number;
    revalidate(){
        this.width = 0;
        for (let ch of this.chars) {
            this.width+=ch.destRect.width;
        }
    }
}

class StringInfo extends CharsHolder {
    chars:CharInfo[] = [];
    width:number = 0;
    height:number = 0;
    calcSize(defaultSymbolHeight:number){
        this.width = 0;
        this.height = defaultSymbolHeight;
        for (let ch of this.chars) {
            this.width+=ch.sourceRect.width;
        }
    }
    private toWords():WordInfo[] {
        let res:WordInfo[] = [];
        let currWord:WordInfo = new WordInfo();
        for (let ch of this.chars) {
            if (ch.symbol===' ') {
                if (currWord.chars.length) {
                    res.push(currWord);
                    currWord = new WordInfo();
                }
            } else {
                currWord.chars.push(ch);
            }
        }
        if (res.indexOf(currWord)===-1) res.push(currWord);
        return res;
    }
    align(textAlign:TEXT_ALIGN,textRectWidth:number){
        switch (textAlign) {
            case TEXT_ALIGN.LEFT:
                break;
            case TEXT_ALIGN.CENTER:
                let offset = textRectWidth - this.width;
                if (offset<0) return;
                offset/=2;
                this.moveBy(offset,0);
                break;
            case TEXT_ALIGN.RIGHT:
                offset = textRectWidth - this.width;
                if (offset<0) return;
                this.moveBy(offset,0);
                break;
            case TEXT_ALIGN.JUSTIFY:
                let words:WordInfo[] = this.toWords();
                if (words.length<=1) return;
                if (!words[0].chars.length) return;
                let totalWordsWidth:number = 0;
                words.forEach((w:WordInfo)=>{
                    w.revalidate();
                    totalWordsWidth+=w.width;
                });
                let totalSpaceWidth:number = textRectWidth - totalWordsWidth;
                let oneSpaceWidth:number = totalSpaceWidth / (words.length - 1);
                let initialPosY = this.chars[0].destRect.getPoint().y;
                let currXPointer:number = this.chars[0].destRect.getPoint().x;
                for (let i=0;i<words.length;i++) {
                    let w:WordInfo = words[i];
                    w.moveTo(currXPointer,initialPosY);
                    currXPointer+=w.width+oneSpaceWidth;
                }

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
        let initialPosX:number = 0;
        let initialPosY:number = 0;
        let posX:number = initialPosX;
        let posY:number = initialPosY;

        let textInfo = this._textInfo;
        textInfo.reset();
        textInfo.newString();
        let defaultHeight:number = this.font.getDefaultSymbolHeight();
        let text:string = this.text;
        for (let i=0,max=text.length;i<max;i++) {
            if (text[i]==='\n') {
                textInfo.newString();
                posX = initialPosX;
                posY+= defaultHeight;
            } else {
                let charRect:Rect = this.font.fontContext.symbols[text[i]] || this.font.fontContext.symbols[' '];
                let charInfo = new CharInfo();
                charInfo.symbol = text[i];
                charInfo.sourceRect = charRect;
                charInfo.destRect.setXYWH(posX,posY,charRect.width,charRect.height);
                textInfo.newChar(charInfo);
                posX+=charRect.width;
            }
        }
        textInfo.revalidate(this.font.getDefaultSymbolHeight());
        textInfo.align(this.textAlign);
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
        this.game.renderer.translate(this.pos.x, this.pos.y);
        for (let charInfo of this._textInfo.allCharsCached) {
            this.game.renderer.drawImage(
                this.font.resourcePath, charInfo.sourceRect, charInfo.destRect
            );
        }
    }

}
