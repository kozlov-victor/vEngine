
import Container, {ALIGN_CONTENT} from "./container";
import TextField from "./textField";
import Font from "../../font";
import AbstractRenderer from "../../../../core/renderer/abstract/abstractRenderer";
import {Renderable} from "../../../../renderable/renderable";
import NinePatchImage from "../../../../renderable/ninePatchImage";
import Resource from "../../../resource";
import ColorizeFilter from "../../../../core/renderer/webGl/filters/textureFilters/colorizeFilter";
import Color from "../../../../core/color";

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
        let colorize = new ColorizeFilter(this.game.renderer['gl']);
        this.background.filters.push(colorize);
        let c:Color = new Color(12,12,12,0);
        this.on('mouseEnter',()=>{
            c.setRGBA(20,220,12,100);
            colorize.setColor(c);
        });
        this.on('mouseLeave',()=>{
            c.setRGBA(12,12,12,0);
            colorize.setColor(c);
        });
    }

    revalidate(){
        super.revalidate();
        this._textField.setFont(this.font);
        this._textField.setText(this.text);
        this.onGeometryChanged();
    }

    protected onGeometryChanged(){
        this.width = this._textField.width;
        this.height = this._textField.height;

        this.background.drawingRect.set(this.getRectMargined());
        this.background.revalidate(); // todo
        this._rect.setWH(this.background.drawingRect.width,this.background.drawingRect.height);

        let dx = (this.background.drawingRect.width - this._textField.width)/2;
        let dy = (this.background.drawingRect.height - this._textField.height)/2;

        this._textField.pos.setXY(
            this.pos.x + this.marginLeft + dx,
            this.pos.y + this.marginTop + dy
        );
    }

    setText(text:string){
        this._textField.setText(text);
        this._dirty = true;
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