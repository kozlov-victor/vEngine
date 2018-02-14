
import Container, {ALIGN_CONTENT} from "./container";
import TextField from "./textField";
import Font from "../../font";
import AbstractRenderer from "../../../../core/renderer/abstract/abstractRenderer";
import {Renderable} from "../../../../renderable/renderable";
import NinePatchImage from "../../../../renderable/ninePatchImage";
import Resource from "../../../resource";
import ColorizeFilter from "../../../../core/renderer/webGl/filters/textureFilters/colorizeFilter";
import Color from "../../../../core/color";
import Image from "../../../../renderable/image";

export default class Button extends Container {

    text:string = '';
    font:Font = null;
    onClick:()=>void = ()=>{};

    private _background:NinePatchImage;
    private _textField:TextField;

    constructor(game) {
        super(game);
        this.alignContent = ALIGN_CONTENT.VERTICAL;
        this._textField = new TextField(game);
        this.on('click',()=>{
            this.onClick();
        });
        // this._background = new NinePatchImage(game);
        // this._background.resourcePath = 'resources/nineP.png';
        // this._background.setABCD(45);
        // let colorize = new ColorizeFilter(this.game.renderer['gl']);
        // this._background.filters.push(colorize);
        // let c:Color = new Color(12,12,12,0);
        // this.on('mouseEnter',()=>{
        //     c.setRGBA(20,220,12,100);
        //     colorize.setColor(c);
        // });
        // this.on('mouseLeave',()=>{
        //     c.setRGBA(12,12,12,0);
        //     colorize.setColor(c);
        // });
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

        this._background.drawingRect.set(this.getRectMargined());
        this._background.revalidate(); // todo
        this.width = this._background.drawingRect.width;
        this.height = this._background.drawingRect.height;
        this.getRect().setWH(this.width,this.height); // todo

        let dx = (this._background.drawingRect.width - this._textField.width)/2;
        let dy = (this._background.drawingRect.height - this._textField.height)/2;

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

    setBackground(value: NinePatchImage) {
        this._background = value;
    }

    getText(){
        return this._textField.getText();
    }

    update(time:number,delta:number){
        super.update(time,delta);
        this.render();
    }

    render(){
        this._background.render();
        this._textField.render();
    }

}