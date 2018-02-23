
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
        this._textField.onGeometryChanged();
        this.calcBgRectWithPadding(this._textField.width,this._textField.height);

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
        this.render();
    }

    render(){
        let renderer = this.game.renderer;
        renderer.translate(
            this.pos.x + this.marginLeft,
            this.pos.y + this.marginTop
        );
        this.background.render();
        this._textField.render();
    }

}