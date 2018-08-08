
import {AbstractFilter} from "../core/renderer/webGl/filters/abstract/abstractFilter";
import {Rect} from "../core/geometry/rect";
import {Color} from "../core/color";
import {Game} from "../core/game";
import {UIDrawable} from "./interface/uiDrawable";
import {DrawableInfo} from "../core/renderer/webGl/renderPrograms/interface/drawableInfo";

export class Rectangle implements UIDrawable {

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

    draw(){
        this.game.renderer.fillRect(this.drawingRect,Color.RGB(12,222,100))
    }

}