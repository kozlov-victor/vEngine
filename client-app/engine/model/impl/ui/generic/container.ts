
import {UIRenderable} from "../../../../renderable/interface/uiRenderable";

declare const DEBUG:boolean;

import BaseModel from "../../../baseModel";
import Rect from "../../../../core/geometry/rect";
import {Renderable} from "../../../../renderable/interface/renderable";
import AbstractFilter from "../../../../core/renderer/webGl/filters/abstract/abstractFilter";
import {DrawableInfo} from "../../../../core/renderer/webGl/renderPrograms/interface/drawableInfo";

export enum ALIGN_CONTENT {
    NONE, VERTICAL,
    HORIZONTAL,BOTH
}

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

    alignContent    :ALIGN_CONTENT = ALIGN_CONTENT.NONE;
    background      :UIRenderable;

    drawingRect:Rect = new Rect();

    testLayout(){
        if (DEBUG) {
            if (this.layoutWidth===LAYOUT_SIZE.FIXED && this.width===0)
                throw `layoutWidth is LAYOUT_SIZE.FIXED so width must be specified`;
            if (this.layoutHeight===LAYOUT_SIZE.FIXED && this.height===0)
                throw `layoutHeight is LAYOUT_SIZE.FIXED so height must be specified`
        }
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
        if (!this._dirty) {
            return this._rect;
        }
        let rect:Rect = super.getRect();
        rect.setXYWH(
            rect.getPoint().x,
            rect.getPoint().y,
            rect.getSize().width + this.marginRight + this.paddingRight + this.marginLeft + this.paddingLeft ,
            rect.getSize().height +  this.marginBottom + this.paddingBottom + this.marginTop + this.paddingTop
        );
        this._rect.set(rect);
        return rect;
    }

    getRectMargined():Rect{
        if (!this._dirty) return this.drawingRect;
        let rect = this.getRect();
        this.drawingRect.setXYWH(
            rect.getPoint().x + this.marginLeft,
            rect.getPoint().y + this.marginTop,
            rect.getSize().width - this.marginLeft - this.marginRight,
            rect.getSize().height - this.marginTop - this.marginBottom
        );
        return this.drawingRect;
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