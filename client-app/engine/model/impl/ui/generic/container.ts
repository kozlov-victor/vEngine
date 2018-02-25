
declare const DEBUG:boolean;

import {UIRenderable} from "../../../../renderable/interface/uiRenderable";
import BaseModel from "../../../baseModel";
import Rect from "../../../../core/geometry/rect";
import AbstractFilter from "../../../../core/renderer/webGl/filters/abstract/abstractFilter";
import {DrawableInfo} from "../../../../core/renderer/webGl/renderPrograms/interface/drawableInfo";


export enum OVERFLOW {
    HIDDEN,VISIBLE
}

export enum LAYOUT_SIZE {
    FIXED,WRAP_CONTENT,MATCH_PARENT
}

export default class Container extends BaseModel implements UIRenderable {

    marginLeft      :number = 0;
    marginTop       :number = 0;
    marginRight     :number = 0;
    marginBottom    :number = 0;
    paddingLeft     :number = 0;
    paddingTop      :number = 0;
    paddingRight    :number = 0;
    paddingBottom   :number = 0;

    layoutWidth     :LAYOUT_SIZE =  LAYOUT_SIZE.WRAP_CONTENT;
    layoutHeight    :LAYOUT_SIZE =  LAYOUT_SIZE.WRAP_CONTENT;
    overflow        :OVERFLOW = OVERFLOW.HIDDEN; // todo change

    filters         :AbstractFilter[] = [];
    blendMode       :string = '';

    background      :UIRenderable = undefined;

    drawingRect:Rect = new Rect();
    children:Container[] = [];

    testLayout(){
        if (DEBUG) {
            if (this.layoutWidth===LAYOUT_SIZE.FIXED && this.width===0)
                throw `layoutWidth is LAYOUT_SIZE.FIXED so width must be specified`;
            if (this.layoutHeight===LAYOUT_SIZE.FIXED && this.height===0)
                throw `layoutHeight is LAYOUT_SIZE.FIXED so height must be specified`
        }
    }

    appendChild(c:Container){
        this.children.push(c);
    }

    private static normalizeBorders(top:number,right:number,bottom:number,left:number){
        if (right===undefined && bottom===undefined && left===undefined) {
            right = bottom = left = top;
        }
        else if (bottom===undefined && left===undefined) {
            bottom = top;
            left = right;
        }
        else if (left===undefined) {
            left = right;
        }
        return {top,right,bottom,left};
    }

    setMargins(top:number);
    setMargins(top:number,right:number);
    setMargins(top:number,right:number,bottom:number);
    setMargins(top:number,right:number,bottom:number,left:number);
    setMargins(top:number,right?:number,bottom?:number,left?:number){

        ({top,right,bottom,left} = Container.normalizeBorders(top,right,bottom,left));
        this.marginTop = top;
        this.marginRight = right;
        this.marginBottom = bottom;
        this.marginLeft = left;
        this._setDirty();
    }

    setMarginsTopBottom(top:number,bottom?:number){
        if (bottom===undefined) bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this._setDirty();
    }

    setMarginsLeftRight(left:number,right?:number){
        if (right===undefined) right = left;
        this.marginLeft = left;
        this.marginRight = right;
        this._setDirty();
    }

    setPaddings(top:number);
    setPaddings(top:number,right:number);
    setPaddings(top:number,right:number,bottom:number);
    setPaddings(top:number,right:number,bottom:number,left:number);
    setPaddings(top:number,right?:number,bottom?:number,left?:number){

        ({top,right,bottom,left} = Container.normalizeBorders(top,right,bottom,left));

        this.paddingTop = top;
        this.paddingRight = right;
        this.paddingBottom = bottom;
        this.paddingLeft = left;
        this._setDirty();
    }

    setPaddingsTopBottom(top:number,bottom?:number){
        if (bottom===undefined) bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this._dirty = true;
    }

    setPaddingsLeftRight(left:number,right?:number){
        if (right===undefined) right = left;
        this.paddingLeft = left;
        this.paddingRight = right;
        this._setDirty();
    }

    getDrawableInfo():DrawableInfo {
        return {blendMode:this.blendMode,acceptLight:false};
    }

    constructor(game){
        super(game);
    }

    onGeometryChanged(){}

    getRect():Rect{
        if (this._dirty) {
             this.calcLayoutRect();
        }
        return this._rect;
    }

    private calcLayoutRect(){
        this._rect.setXYWH(
            this.pos.x,this.pos.y,
            this.width + this.marginLeft + this.marginRight,
            this.height + this.marginTop + this.marginBottom
        )
    }

    calcDrawableRect(contentWidth:number, contentHeight:number){
        let paddedWidth = contentWidth  + this.paddingLeft + this.paddingRight;
        let paddedHeight = contentHeight +  this.paddingTop +  this.paddingBottom;
        if (this.background) {
            this.background.drawingRect.setWH(paddedWidth,paddedHeight);
            this.width = this.background.drawingRect.width;
            this.height = this.background.drawingRect.height;
        } else {
            this.width = paddedWidth;
            this.height = paddedHeight;
        }
        this.calcLayoutRect();

    }

    update(time:number,delta:number){
        super.update(time,delta);
        if (this._dirty) {
            this.onGeometryChanged();
            this._dirty = false;
        }
    }

    render(){}

}