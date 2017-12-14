
//import HtmlRenderer from './dom/htmlRenderer'
import Renderer from './canvas/canvasRenderer'
//import Renderer from './webGl/webGlRenderer'
//import SvgRenderer from './dom/svgRenderer'

export default class RendererFactory {
    static getRenderer(game){
        if (!game) throw `RendererFactory::getRenderer: game param not specified`;
        return new Renderer(game);
    }
}