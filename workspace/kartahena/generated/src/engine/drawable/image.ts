
import {Game} from "../core/game";
import {Rect} from "../core/geometry/rect";
import {AbstractFilter} from "../core/renderer/webGl/filters/abstract/abstractFilter";
import {UIDrawable} from "./interface/uiDrawable";
import {DrawableInfo} from "../core/renderer/webGl/renderPrograms/interface/drawableInfo";
import {Container} from "../model/impl/ui/generic/container";

declare const DEBUG: boolean;

export class Image extends Container implements UIDrawable {

    srcRect:Rect = new Rect();
    filters:AbstractFilter[] = [];
    drawingRect:Rect = new Rect();
    blendMode:string = '';

    constructor(game: Game) {
        super(game);
    }

    revalidate(){
        if (DEBUG && !this.getDefaultResourcePath()) {
            throw `can not render Image: default resource path not specified in resourceMap property`;
        }
    }

    getDrawableInfo():DrawableInfo {
        return {blendMode:this.blendMode,acceptLight:false};
    }

    draw(){
        this.game.renderer.drawImage(this.getDefaultResourcePath(),this.srcRect,this.drawingRect);
    }



}