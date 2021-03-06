import {Font} from "../../font";
import {Rect} from "../../../../core/geometry/rect";
import {DebugError} from "../../../../debugError";
import {Rectangle} from "../drawable/rectangle";
import {ScrollableContainer} from "../generic/scrollableContainer";
import {Image} from "../drawable/image";

declare const DEBUG: boolean;
type char = string;


export enum TEXT_ALIGN {
    LEFT = 'LEFT', RIGHT = 'RIGHT', CENTER = 'CENTER', JUSTIFY = 'JUSTIFY'
}

class TextInfo {
    allCharsCached: CharInfo[] = [];
    width: number = 0;
    height: number = 0;
    posX: number = 0;
    posY: number = 0;
    private strings: StringInfo[] = [];

    constructor(private textField: TextField) {}

    reset() {
        this.allCharsCached = [];
        this.strings = [];
        this.posX = 0;
        this.posY = 0;
    }

    newString() {
        this.posX = 0;
        if (this.strings.length) {
            this.posY += this.textField.font.getDefaultSymbolHeight();
        }
        this.strings.push(new StringInfo());
    }

    addChar(c: CharInfo) {
        this.strings[this.strings.length - 1].chars.push(c);
        this.allCharsCached.push(c);
        c.destRect.setXY(this.posX, this.posY);
        this.posX += c.sourceRect.width;
    }

    addWord(w: WordInfo) {
        w.chars.forEach((c: CharInfo) => {
            this.addChar(c);
        });
    }

    revalidate(defaultSymbolHeight: number) {
        this.height = 0;
        this.width = 0;
        for (let s of this.strings) {
            s.calcSize(defaultSymbolHeight);
            this.height += s.height;
            if (s.width > this.width) this.width = s.width;
        }
    }

    align(textAlign: TEXT_ALIGN) {
        if (DEBUG && TEXT_ALIGN[textAlign] === undefined) {
            let keys = Object.keys(TEXT_ALIGN).join(', ');
            throw new DebugError(`can not align text: unknown enum type of TEXT_ALIGN: ${textAlign}, expected: ${keys}`);
        }
        this.strings.forEach((s: StringInfo) => {
            s.align(textAlign, this.textField);
        });
    }
}

class CharInfo {
    symbol: char;
    destRect: Rect = new Rect();
    sourceRect: Rect = new Rect();
}

class CharsHolder {
    chars: CharInfo[] = [];

    moveBy(dx: number, dy: number) {
        for (let ch of this.chars) {
            ch.destRect.getPoint().addXY(dx, dy);
        }
    }

    moveTo(x: number, y: number) {
        let initialOffsetX: number = 0;
        for (let ch of this.chars) {
            ch.destRect.getPoint().setXY(initialOffsetX + x, y);
            initialOffsetX += ch.sourceRect.width;
        }
    }
}

class WordInfo extends CharsHolder {
    width: number = 0;

    revalidate() {
        this.width = 0;
        for (let ch of this.chars) {
            this.width += ch.destRect.width;
        }
    }

    addChar(c: CharInfo) {
        this.chars.push(c);
        this.width += c.sourceRect.width;
    }
}

class StringInfo extends CharsHolder {
    width: number = 0;
    height: number = 0;

    calcSize(defaultSymbolHeight: number) {
        this.width = 0;
        this.height = defaultSymbolHeight;
        for (let ch of this.chars) {
            this.width += ch.sourceRect.width;
        }
    }

    private toWords(): WordInfo[] {
        let res: WordInfo[] = [];
        let currWord: WordInfo = new WordInfo();
        for (let ch of this.chars) {
            if (ch.symbol === ' ') {
                if (currWord.chars.length) {
                    res.push(currWord);
                    currWord = new WordInfo();
                }
            } else {
                currWord.chars.push(ch);
            }
        }
        if (res.indexOf(currWord) === -1) res.push(currWord);
        return res;
    }

    align(textAlign: TEXT_ALIGN, textField: TextField) {
        switch (textAlign) {
            case TEXT_ALIGN.LEFT:
                break;
            case TEXT_ALIGN.CENTER:
                let offset = textField.width - this.width;
                if (offset < 0) return;
                offset /= 2;
                this.moveBy(offset, 0);
                break;
            case TEXT_ALIGN.RIGHT:
                offset = textField.width - this.width;
                if (offset < 0) return;
                this.moveBy(offset, 0);
                break;
            case TEXT_ALIGN.JUSTIFY:
                let words: WordInfo[] = this.toWords();
                if (words.length <= 1) return;
                if (!words[0].chars.length) return;
                let totalWordsWidth: number = 0;
                words.forEach((w: WordInfo) => {
                    w.revalidate();
                    totalWordsWidth += w.width;
                });
                let totalSpaceWidth: number = textField.width - totalWordsWidth;
                let oneSpaceWidth: number = totalSpaceWidth / (words.length - 1);
                let initialPosY = this.chars[0].destRect.getPoint().y;
                let currXPointer: number = this.chars[0].destRect.getPoint().x;
                for (let i = 0; i < words.length; i++) {
                    let w: WordInfo = words[i];
                    w.moveTo(currXPointer, initialPosY);
                    currXPointer += w.width + oneSpaceWidth;
                }
                break;
            default:
                if (DEBUG) throw new DebugError(`unknown TEXT_ALIGN value: ${textAlign}`);

        }
    }
}


export class TextField extends ScrollableContainer {

    readonly type = 'TextField';
    private _textInfo: TextInfo;
    private _symbolImage:Image;

    text: string = '';
    font: Font = null;
    textAlign: TEXT_ALIGN = TEXT_ALIGN.LEFT;
    border: Rectangle = null;

    constructor(game) {
        super(game);
        this._textInfo = new TextInfo(this);
        this._symbolImage = new Image(this.game);
        this._initScrolling({vertical: true});
    }


    revalidate() {
        super.revalidate();
        if (this.font === null)
            this.font = this.game.repository.getArray('Font')[0];
        if (DEBUG && !this.font) throw new DebugError(`at least one Font must be created`);
        this.setFont(this.font);
    }

    private _getCharInfo(c: char): CharInfo {
        let charRect: Rect =
            this.font.fontContext.symbols[c] ||
            this.font.fontContext.symbols[' '];
        let charInfo = new CharInfo();
        charInfo.symbol = c;
        charInfo.sourceRect = charRect;
        charInfo.destRect.setWH(charRect.width, charRect.height);
        return charInfo;
    }

    onGeometryChanged() {
        super.onGeometryChanged();

        let textInfo = this._textInfo;
        textInfo.reset();
        textInfo.newString();
        let text: string = this.text;

        let strings = text.split('\n');
        strings.forEach((str:string, i:number) => {
            let words:string[] = str.split(' ');
            words.forEach((w: string, i: number) => {
                let wordInfo:WordInfo = new WordInfo();
                for (let k:number = 0; k < w.length; k++) {
                    let charInfo: CharInfo = this._getCharInfo(w[k]);
                    wordInfo.addChar(charInfo);
                }
                if (this.maxWidth && textInfo.posX + wordInfo.width > this.maxWidth && i < words.length - 1) {
                    textInfo.newString();
                }
                textInfo.addWord(wordInfo);
                if (i < str.length - 1) {
                    let spaceChar = this._getCharInfo(' ');
                    textInfo.addChar(spaceChar);
                }
            });
            if (i < strings.length - 1) {
                textInfo.newString();
            }
        });
        textInfo.revalidate(this.font.getDefaultSymbolHeight());
        textInfo.align(this.textAlign);
        this.width = textInfo.width;
        if (this.maxHeight !== 0 && textInfo.height > this.maxHeight) {
            this.height = this.maxHeight;
        } else {
            this.height = textInfo.height;
        }
        if (this.border) {
            this.border.width = this.width;
            this.border.height = this.height;
        }
        this.updateScrollSize(textInfo.height,this.height);
    }

    setText(text = '') {
        this.text = text.toString();
        this._dirty = true;
    }

    getText() {
        return this.text
    }

    setFont(font) {
        this.font = font;
        this.setText(this.text);
    }

    setFontName(name) {
        let font = this.game.repository.getArray('Font').find(it => it.name == name);
        if (!font) throw new DebugError(`can not find font with name ${name}`);
        this.setFont(font);
    }


    draw():boolean {
        this.game.renderer.lockRect(this.getScreenRect());
        this.game.renderer.save();
        if (this.vScrollInfo.offset) this.game.renderer.translate(0, -this.vScrollInfo.offset, 0);

        this._symbolImage.setDefaultResourcePath(this.font.getDefaultResourcePath());
        for (let charInfo of this._textInfo.allCharsCached) {

            if (charInfo.destRect.y - this.vScrollInfo.offset > this.height) continue;
            if (charInfo.destRect.y + charInfo.destRect.height - this.vScrollInfo.offset < 0) continue;

            this._symbolImage.srcRect.set(charInfo.sourceRect);
            this._symbolImage.setXYWH(charInfo.destRect.x,charInfo.destRect.y,charInfo.destRect.width,charInfo.destRect.height);

            this._symbolImage.render(true);
        }
        this.game.renderer.restore();
        this.game.renderer.unlockRect();
        if (this.border) this.border.render();
        return true;
    }

}
