
import Game from "../core/game";
import Rect from "../core/geometry/rect";
import {Renderable} from "./renderable";
import Resource from "../model/resource";
import AbstractFilter from "../core/renderer/webGl/filters/abstract/abstractFilter";

export default class Image extends Resource implements Renderable {

    destRect:Rect = new Rect();
    srcRect:Rect = new Rect();
    filters:AbstractFilter[] = [];
    blendMode:string = '';

    constructor(game: Game) {
        super(game);
    }


    render(){
        this.game.renderer.drawImage(this.resourcePath,this.srcRect,this.destRect);
    }



}