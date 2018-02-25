
import Game from "../core/game";
import Rect from "../core/geometry/rect";
import Resource from "../model/resource";
import AbstractFilter from "../core/renderer/webGl/filters/abstract/abstractFilter";
import {UIRenderable} from "./interface/uiRenderable";
import {DrawableInfo} from "../core/renderer/webGl/renderPrograms/interface/drawableInfo";

export default class Image extends Resource implements UIRenderable {

    destRect:Rect = new Rect();
    srcRect:Rect = new Rect();
    filters:AbstractFilter[] = [];
    drawingRect:Rect = new Rect();
    blendMode:string = '';

    constructor(game: Game) {
        super(game);
    }


    getDrawableInfo():DrawableInfo {
        return {blendMode:this.blendMode,acceptLight:false};
    }

    render(){
        this.game.renderer.drawImage(this.getDefaultResourcePath(),this.srcRect,this.destRect);
    }



}