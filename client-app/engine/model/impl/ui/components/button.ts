
import Container, {ALIGN_CONTENT} from "../generic/container";
import TextField from "./textField";
import Font from "../../font";
import AbstractRenderer from "../../../../core/renderer/abstract/abstractRenderer";
import {Renderable} from "../../../../renderable/interface/renderable";
import NinePatchImage from "../../../../renderable/ninePatchImage";
import Resource from "../../../resource";
import ColorizeFilter from "../../../../core/renderer/webGl/filters/textureFilters/colorizeFilter";
import Color from "../../../../core/color";
import Image from "../../../../renderable/image";
import {UIRenderable} from "../../../../renderable/interface/uiRenderable";

export default class Button extends Container {

    text:string = '';
    font:Font = null;

    private _textField:TextField;

    constructor(game) {
        super(game);
        this.alignContent = ALIGN_CONTENT.VERTICAL;
        this._textField = new TextField(game);
    }

    revalidate(){
        super.revalidate();
        this._textField.setFont(this.font);
        this._textField.setText(this.text);
        this.onGeometryChanged();
    }

    onGeometryChanged(){
        this.width = this._textField.width;
        this.height = this._textField.height;

        this.background.drawingRect.set(this.getRectMargined());

        this.width = this.background.drawingRect.width - this.paddingLeft - this.paddingRight;
        this.height = this.background.drawingRect.height  - this.paddingTop - this.paddingBottom; // todo???
        console.log('before calc',this.width);
        this.getRect().setWH(
            this.width,
            this.height
        ); // todo

        let dx = (this.background.drawingRect.width - this._textField.width)/2;
        let dy = (this.background.drawingRect.height - this._textField.height)/2;

        this._textField.pos.setXY(
            this.getRect().x + this.marginLeft + dx,
            this.getRect().y + this.marginTop + dy
        );
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
        this.render();
    }

    render(){
        this.background.render();
        this._textField.render();
    }

}