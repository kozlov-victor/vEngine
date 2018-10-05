import {Container} from "../generic/container";
import {TextField} from "./textField";
import {Font} from "../../font";
import {DebugError} from "../../../../debugError";

declare const DEBUG:boolean;

export class Button extends Container {

    text:string = '';
    font:Font = null;


    private _textField:TextField;

    constructor(game) {
        super(game);
        this._textField = new TextField(game);
        this.appendChild(this._textField);
    }

    revalidate(){
        super.revalidate();
        this._textField.setFont(this.font);
        this.onGeometryChanged();
    }

    onGeometryChanged(){
        this._textField.onGeometryChanged();
        this.calcDrawableRect(this._textField.width,this._textField.height);
        if (this.background) {
            let dx = (this.background.width - this._textField.width)/2;
            let dy = (this.background.height - this._textField.height)/2;

            this._textField.pos.setXY(dx,dy);
        }
    }


    setText(text:string){
        this._textField.setText(text);
        this._dirty = true;
    }

    setFont(f:Font){
        this.font = f;
        this._textField.setFont(f);
    }

    setFontName(name){
        let font = this.game.repository.getArray('Font').find(it=>it.name==name);
        if (DEBUG && !font) throw new DebugError(`can not find font with name ${name}`);
        this.setFont(font);
    }

    getText(){
        return this._textField.getText();
    }

    update(time:number,delta:number){
        super.update(time,delta);
    }

    draw():boolean{
        if (this.background) this.background.draw();
        this._textField.render();
        return true;
    }

}