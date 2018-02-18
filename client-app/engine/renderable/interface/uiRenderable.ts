
import {Renderable} from "./renderable";
import Rect from "../../core/geometry/rect";
import {DrawableInfo} from "../../core/renderer/webGl/renderPrograms/interface/drawableInfo";

export interface UIRenderable extends Renderable {
    drawingRect:Rect,
    getDrawableInfo:()=>DrawableInfo
}