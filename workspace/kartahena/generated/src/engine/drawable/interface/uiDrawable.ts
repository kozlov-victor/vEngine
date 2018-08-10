
import {Rect} from "../../core/geometry/rect";
import {DrawableInfo} from "../../core/renderer/webGl/renderPrograms/interface/drawableInfo";

export interface UIDrawable {
    drawingRect:Rect,
    getDrawableInfo:()=>DrawableInfo
    draw:()=>void,
    setWH:(w:number,h:number)=>void
}