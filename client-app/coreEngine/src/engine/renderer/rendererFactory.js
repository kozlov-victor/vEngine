
//import HtmlRenderer from './dom/htmlRenderer'
//import CanvasRenderer from './canvas/canvasRenderer'
import WebGlRenderer from './webGl/webGlRenderer'
//import SvgRenderer from './dom/svgRenderer'

export default class RendererFactory {
    static getRenderer(game){
        if (!game) throw `RendererFactory::getRenderer: game param not specified`;
        return new WebGlRenderer(game);
    }
}