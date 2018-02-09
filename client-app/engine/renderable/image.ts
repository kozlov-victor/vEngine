
import Game from "../core/game";
import Rect from "../core/geometry/rect";
import {Renderable} from "./renderable";
import Resource from "../model/resource";

export default class Image extends Resource implements Renderable {

    destRect:Rect = new Rect();
    srcRect:Rect = new Rect();

    constructor(game: Game) {
        super(game);
    }

    revalidate(){
        this.onGeometryChanged();
    }

    onGeometryChanged(){
        super.onGeometryChanged();
        //let size = this.game.renderer.getTextureInfo(this.resourcePath).size;
        //this.destRect.setXYWH(this.pos.x,this.pos.y,size.width,size.height);
    }

    render(){
        this.game.renderer.drawImage(this.resourcePath,this.srcRect,this.destRect);
    }



}