
import AbstractFilter from "../core/renderer/webGl/filters/abstract/abstractFilter";

export interface Renderable {
    filters: AbstractFilter[],
    blendMode:string,
    render: ()=>void
}