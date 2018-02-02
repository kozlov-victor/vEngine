
import BaseModel from "../../../baseModel";
import Rect from "../../../../core/geometry/rect";
import Point2d from "../../../../core/geometry/point2d";
import Size from "../../../../core/geometry/size";

export default class Container extends BaseModel {

    marginLeft: number = 0;
    marginTop: number = 0;
    marginRight: number = 0;
    marginBottom: number = 0;
    paddingLeft: number = 0;
    paddingTop: number = 0;
    paddingRight: number = 0;
    paddingBottom: number = 0;

    protected _dirty = true;

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
    setMargins(top:number,right?:number,bottom?:number,left?:number){
        ({top,right,bottom,left} = Container.normalizeBorders(top,right,bottom,left));
        this.marginTop = top;
        this.marginRight = right;
        this.marginBottom = bottom;
        this.marginLeft = left;
        this._dirty = true;
    }

    setPaddings(top:number);
    setPaddings(top:number,right:number);
    setPaddings(top:number,right:number,bottom:number);
    setPaddings(top:number,right?:number,bottom?:number,left?:number){
        ({top,right,bottom,left} = Container.normalizeBorders(top,right,bottom,left));
        this.paddingTop = top;
        this.paddingRight = right;
        this.paddingBottom = bottom;
        this.paddingLeft = left;
        this._dirty = true;
    }

    constructor(game){
        super(game);
    }

    getRect():Rect{
        if (!this._dirty) return this._rect;
        let rect:Rect = super.getRect();
        rect.setXYWH(
            rect.getPoint().x,
            rect.getPoint().y,
            rect.getSize().width + this.marginRight + this.paddingRight + this.marginLeft + this.paddingLeft ,
            rect.getSize().height +  this.marginBottom + this.paddingBottom + this.marginTop + this.paddingTop
        );
        this._rect.set(rect);
        this._dirty = false;
        return rect;
    }

}