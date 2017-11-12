
//import HtmlRenderer from '../renderer/dom/htmlRenderer'
//import CanvasRenderer from '../renderer/canvas/canvasRenderer'
import WebGlRenderer from '../renderer/webGl/webGlRenderer'
//import SvgRenderer from '../renderer/dom/svgRenderer'

export default class RendererFactory {
    static getRenderer(game){
        if (!game) throw `RendererFactory::getRenderer: game param not specified`;
        return new WebGlRenderer(game);
    }
}