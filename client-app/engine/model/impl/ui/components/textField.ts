import {Container} from "../generic/container";
import {Font} from "../../font";
import {Rect} from "../../../../core/geometry/rect";
import {DebugError} from "../../../../debugError";
import {Rectangle} from "../drawable/rectangle";
import {MousePoint, MOUSE_EVENTS} from "../../../../core/control/mouse";
import {closeTo} from "../../../../core/mathEx";

declare const DEBUG:boolean;
type char = string;


export enum TEXT_ALIGN {
    LEFT = 'LEFT',RIGHT = 'RIGHT',CENTER = 'CENTER',JUSTIFY = 'JUSTIFY'
}

class TextInfo {
    allCharsCached:CharInfo[] = [];
    width:number = 0;
    height:number = 0;
    posX:number = 0;
    posY:number = 0;
    private strings:StringInfo[] = [];

    constructor(private textField:TextField){

    }

    reset(){
        this.allCharsCached = [];
        this.strings = [];
        this.posX = 0;
        this.posY = 0;
    }
    newString(){
        this.posX = 0;
        if (this.strings.length) {
            this.posY += this.textField.font.getDefaultSymbolHeight();
        }
        this.strings.push(new StringInfo());
    }
    addChar(c:CharInfo){
        this.strings[this.strings.length-1].chars.push(c);
        this.allCharsCached.push(c);
        c.destRect.setXY(this.posX,this.posY);
        this.posX+=c.sourceRect.width;
    }
    addWord(w:WordInfo) {
        w.chars.forEach((c:CharInfo)=>{
            this.addChar(c);
        });
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
        if (DEBUG && TEXT_ALIGN[textAlign]===undefined) {
            let keys = Object.keys(TEXT_ALIGN).join(', ');
            throw new DebugError(`can not align text: unknown enum type of TEXT_ALIGN: ${textAlign}, expected: ${keys}`);
        }
        this.strings.forEach((s:StringInfo)=>{
            s.align(textAlign,this.textField);
        });
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
    width:number = 0;
    revalidate(){
        this.width = 0;
        for (let ch of this.chars) {
            this.width+=ch.destRect.width;
        }
    }
    addChar(c:CharInfo) {
        this.chars.push(c);
        this.width+=c.sourceRect.width;
    }
}

class StringInfo extends CharsHolder {
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
    align(textAlign:TEXT_ALIGN,textField:TextField){
        switch (textAlign) {
            case TEXT_ALIGN.LEFT:
                break;
            case TEXT_ALIGN.CENTER:
                let offset = textField.width - this.width;
                if (offset<0) return;
                offset/=2;
                this.moveBy(offset,0);
                break;
            case TEXT_ALIGN.RIGHT:
                offset = textField.width - this.width;
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
                let totalSpaceWidth:number = textField.width - totalWordsWidth;
                let oneSpaceWidth:number = totalSpaceWidth / (words.length - 1);
                let initialPosY = this.chars[0].destRect.getPoint().y;
                let currXPointer:number = this.chars[0].destRect.getPoint().x;
                for (let i=0;i<words.length;i++) {
                    let w:WordInfo = words[i];
                    w.moveTo(currXPointer,initialPosY);
                    currXPointer+=w.width+oneSpaceWidth;
                }
                break;
            default:
                if (DEBUG) throw new DebugError(`unknown TEXT_ALIGN value: ${textAlign}`);

        }
    }
}

export class TextField extends Container {

    readonly type ='TextField';
    private _textInfo:TextInfo;
    text:string = '';
    font:Font = null;
    textAlign:TEXT_ALIGN = TEXT_ALIGN.LEFT;
    maxWidth:number = 0;
    maxHeight:number = 0;
    border:Rectangle = null;

    private scrollInfo:any = {offset:0,scrollVelocity:0,scrollHeight:0,deceleration:0};

    constructor(game){
        super(game);
        this._textInfo = new TextInfo(this);
        this._listenScroll();
    }

    private _listenScroll(){
        this.on(MOUSE_EVENTS.mouseDown,(p:MousePoint)=>{
            this.scrollInfo.lastPoint = {
                point: p,
                time: Date.now()
            };
            this.scrollInfo.prevPoint = {
                point: this.scrollInfo.lastPoint.point,
                time: this.scrollInfo.lastPoint.time
            };
            this.scrollInfo.scrollVelocity = 0;
            this.scrollInfo.deceleration = 0;
        });
        this.on(MOUSE_EVENTS.mouseMove,(p:MousePoint)=>{
           if (!p.isMouseDown) return;
           this.scrollInfo.prevPoint = {
               point: this.scrollInfo.lastPoint.point,
               time: this.scrollInfo.lastPoint.time,
           };
           this.scrollInfo.lastPoint = {
               point: p,
               time: Date.now()
           };

           this.scrollInfo.offset -=
               this.scrollInfo.lastPoint.point.screenY - this.scrollInfo.prevPoint.point.screenY;

           if (this.scrollInfo.offset>this.scrollInfo.scrollHeight - this.height)
                this.scrollInfo.offset = this.scrollInfo.scrollHeight - this.height;
           if (this.scrollInfo.offset<0) this.scrollInfo.offset = 0;
        });
        this.on(MOUSE_EVENTS.mouseUp,(p:MousePoint)=>{
            if (!this.scrollInfo.lastPoint) return;
            if (!this.scrollInfo.prevPoint) return;
            this.scrollInfo.scrollVelocity = 50 *
               (this.scrollInfo.prevPoint.point.screenY - this.scrollInfo.lastPoint.point.screenY) /
               (this.scrollInfo.lastPoint.time - this.scrollInfo.prevPoint.time);
        });
    }

    revalidate(){
        super.revalidate();
        if (this.font===null)
            this.font = this.game.repository.getArray('Font')[0];
        if (DEBUG && !this.font) throw new DebugError(`at least one Font must be created`);
        this.setFont(this.font);
    }

    private _getCharInfo(c:char):CharInfo{
        let charRect:Rect =
            this.font.fontContext.symbols[c] ||
            this.font.fontContext.symbols[' '];
        let charInfo = new CharInfo();
        charInfo.symbol = c;
        charInfo.sourceRect = charRect;
        charInfo.destRect.setWH(charRect.width,charRect.height);
        return charInfo;
    }

    onGeometryChanged(){
        super.onGeometryChanged();

        let textInfo =  this._textInfo;
        textInfo.reset();
        textInfo.newString();
        let text:string = this.text;

        let strings = text.split('\n');
        strings.forEach((str,i)=>{
            let words = str.split(' ');
            words.forEach((w:string,i:number)=>{
                let wordInfo = new WordInfo();
                for (let k=0;k<w.length;k++) {
                    let charInfo:CharInfo = this._getCharInfo(w[k]);
                    wordInfo.addChar(charInfo);
                }
                if (this.maxWidth && textInfo.posX+wordInfo.width>this.maxWidth && i<words.length-1) {
                    textInfo.newString();
                }
                textInfo.addWord(wordInfo);
                if (i<str.length-1) {
                    let spaceChar = this._getCharInfo(' ');
                    textInfo.addChar(spaceChar);
                }
            });
            if (i<strings.length-1) {
                textInfo.newString();
            }
        });
        textInfo.revalidate(this.font.getDefaultSymbolHeight());
        textInfo.align(this.textAlign);
        this.width = textInfo.width;
        this.height = textInfo.height;
        if (this.maxHeight!==0 && this.height>this.maxHeight) {
            this.height = this.maxHeight;
            this.scrollInfo.scrollHeight = textInfo.height;
        }
        if (this.border) {
            this.border.width = this.width;
            this.border.height = this.height;
        }
    }

    setText(text = ''){
        this.text  = text.toString();
        this._dirty = true;
    }

    getText(){return this.text}

    setFont(font){
        this.font = font;
        this.setText(this.text);
    }

    setFontName(name){
        let font = this.game.repository.getArray('Font').find(it=>it.name==name);
        if (!font) throw new DebugError(`can not find font with name ${name}`);
        this.setFont(font);
    }

    update(time:number,delta:number){
        super.update(time,delta);
        if (this.scrollInfo.scrollVelocity) {
            this.scrollInfo.offset+=this.scrollInfo.scrollVelocity/delta;
            if (this.scrollInfo.offset>this.scrollInfo.scrollHeight - this.height)
                this.scrollInfo.offset = this.scrollInfo.scrollHeight - this.height;
            if (this.scrollInfo.offset<0) this.scrollInfo.offset = 0;
        }
        this.scrollInfo.deceleration = this.scrollInfo.deceleration + 0.5/delta;
        if (this.scrollInfo.scrollVelocity>0) this.scrollInfo.scrollVelocity-=this.scrollInfo.deceleration;
        else if (this.scrollInfo.scrollVelocity<0) this.scrollInfo.scrollVelocity+=this.scrollInfo.deceleration;
        if (closeTo(this.scrollInfo.scrollVelocity,0)) this.scrollInfo.scrollVelocity = 0;
    }

    draw(){
        this.game.renderer.lockRect(this.getScreenRect());
        this.game.renderer.save();
        if (this.scrollInfo.offset) this.game.renderer.translate(0,-this.scrollInfo.offset,0);
        for (let charInfo of this._textInfo.allCharsCached) {
            this.game.renderer.drawImage(
                this.font.getDefaultResourcePath(), charInfo.sourceRect, charInfo.destRect
            );
        }
        this.game.renderer.restore();
        this.game.renderer.unlockRect();
        if (this.border) this.border.render();
    }

}
