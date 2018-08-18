import {Game} from "../../../../core/game";
import {Rect} from "../../../../core/geometry/rect";
import {Container} from "../generic/container";
import {DebugError} from "../../../../debugError";

declare const DEBUG: boolean;

export class Image extends Container {

    private srcRect:Rect = new Rect();

    constructor(game: Game) {
        super(game);
    }

    revalidate(){
        if (DEBUG && !this.getDefaultResourcePath()) {
            throw new DebugError(`can not render Image: default resource path not specified in resourceMap property`);
        }
        let r:Rect = this.drawingRect;
        let tex = this.game.renderer.getTextureInfo(this.getDefaultResourcePath());
        if (this.width===0) this.width = tex.size.width;
        if (this.height===0) this.height = tex.size.height;
        r.setWH(this.width,this.height);
        if (this.srcRect.width===0) this.srcRect.width = tex.size.width;
        if (this.srcRect.height===0) this.srcRect.height = tex.size.height;
    }

    draw(){
        this.game.renderer.drawImage(this.getDefaultResourcePath(),this.srcRect,this.drawingRect);
    }



}