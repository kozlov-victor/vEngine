
import AbstractFilter from "../core/renderer/webGl/filters/abstract/abstractFilter";
import Rect from "../core/geometry/rect";
import Color from "../core/color";
import Game from "../core/game";
import {UIRenderable} from "./interface/uiRenderable";
import {DrawableInfo} from "../core/renderer/webGl/renderPrograms/interface/drawableInfo";

export default class Rectangle implements UIRenderable {

    filters:AbstractFilter[] = [];
    blendMode:string = '';
    drawingRect:Rect = new Rect();

    private game:Game;

    constructor(game: Game) {
        this.game = game;
    }

    getDrawableInfo():DrawableInfo {
        return {blendMode:this.blendMode,acceptLight:false};
    }

    render(){
        this.game.renderer.fillRect(this.drawingRect,Color.RGB(12,222,100))
    }

}