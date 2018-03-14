
import Container from "../generic/container";
import TextField from "./textField";
import Font from "../../font";

export default class Button extends Container {

    text:string = '';
    font:Font = null;

    private _textField:TextField;

    constructor(game) {
        super(game);
        this._textField = new TextField(game);
    }

    revalidate(){
        super.revalidate();
        this._textField.setFont(this.font);
        this._textField.setText(this.text);
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
        this._textField.setFont(f);
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