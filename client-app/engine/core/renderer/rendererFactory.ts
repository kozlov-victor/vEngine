
//import {HtmlRenderer as Renderer} from './dom/htmlRenderer'
//import {CanvasRenderer as Renderer} from './canvas/canvasRenderer'
import {WebGlRenderer as Renderer} from './webGl/webGlRenderer'
import {Game} from "../game";
import {DebugError} from "../../debugError";
//import Renderer from './dom/svgRenderer'

export class RendererFactory {
    static getRenderer(game:Game){
        if (!game) throw new DebugError(`RendererFactory::getRenderer: game param not specified`);
        return new Renderer(game);
    }
}