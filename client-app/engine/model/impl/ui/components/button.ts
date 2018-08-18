import {Container} from "../generic/container";
import {TextField} from "./textField";
import {Font} from "../../font";
import {random} from "../../../../core/mathEx";
import {DebugError} from "../../../../debugError";

declare const DEBUG:boolean;

export class Button extends Container {

    text:string = '';
    font:Font = null;


    private _textField:TextField;

    constructor(game) {
        super(game);
        this._textField = new TextField(game);
        this._textField.name = 'textField_' + random(0,1000);
    }

    revalidate(){
        super.revalidate();
        this._textField.setFont(this.font);
        this.onGeometryChanged();
    }

    onGeometryChanged(){
        this._textField.onGeometryChanged();
        this.calcDrawableRect(this._textField.width,this._textField.height);
        if (!this.background) return;

        let dx = (this.background.drawingRect.width - this._textField.width)/2;
        let dy = (this.background.drawingRect.height - this._textField.height)/2;

        this._textField.pos.setXY(dx,dy);
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

    draw(){
        if (this.background) this.background.draw();
        this._textField.render();
    }

}