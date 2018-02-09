
import Container, {ALIGN_CONTENT} from "./container";
import TextField from "./textField";
import Font from "../../font";
import AbstractRenderer from "../../../../core/renderer/abstract/abstractRenderer";
import {Renderable} from "../../../../renderable/renderable";
import NinePatchImage from "../../../../renderable/ninePatchImage";
import Resource from "../../../resource";

export default class Button extends Container {

    text:string = '';
    font:Font = null;
    background:NinePatchImage;

    private _textField:TextField;

    constructor(game) {
        super(game);
        this.alignContent = ALIGN_CONTENT.VERTICAL;
        this._textField = new TextField(game);
        this.background = new NinePatchImage(game);
        this.background.resourcePath = 'resources/nineP.png';
        this.background.setABCD(45);
    }

    revalidate(){
        super.revalidate();
        this._textField.setFont(this.font);
        this._textField.setText(this.text);
        this.onGeometryChanged();
    }

    protected onGeometryChanged(){
        super.onGeometryChanged();
        this.width = this._textField.width;
        this.height = this._textField.height;
        this._textField.pos.setXY(
            this.pos.x+this.paddingLeft+this.marginLeft,
            this.pos.y+this.paddingTop + this.marginTop
        );
        this.background.drawingRect = this.getRectMargined().clone();
        this.background.onGeometryChanged();
        this.setPaddingsTopBottom((this.background.drawingRect.height - this._textField.height)/2);
    }

    setText(text:string){
        this._textField.setText(text);
        this._dirty = true;
    }
    getText(){
        return this._textField.getText();
    }

    update(time,delta){
        super.update(time,delta);
        this.render();
    }

    render(){
        this.background.render();
        this._textField.render();
    }


}