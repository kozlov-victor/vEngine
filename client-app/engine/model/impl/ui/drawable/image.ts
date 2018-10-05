import {Game} from "../../../../core/game";
import {Rect} from "../../../../core/geometry/rect";
import {Container} from "../generic/container";
import {DebugError} from "../../../../debugError";
import {Shape} from "../generic/shape";
import {Color} from "../../../../core/color";

declare const DEBUG: boolean;

export class Image extends Shape {

    srcRect:Rect = new Rect();
    borderRadius:number = 0;

    constructor(game: Game) {
        super(game);
        this.fillColor.set(Color.NONE);
    }

    setSrc(uri:string){
        this.setDefaultResourcePath(uri);
    }

    getSrc(){
        return this.getDefaultResourcePath();
    }

    revalidate(){
        if (DEBUG && !this.getDefaultResourcePath()) {
            console.error(this);
            throw new DebugError(`can not render Image: default resource path not specified in resourceMap property`);
        }
        let tex = this.game.renderer.getTextureInfo(this.getDefaultResourcePath());
        if (this.width===0) this.width = tex.size.width;
        if (this.height===0) this.height = tex.size.height;
        if (this.srcRect.width===0) this.srcRect.width = tex.size.width;
        if (this.srcRect.height===0) this.srcRect.height = tex.size.height;
    }

    draw():boolean{
        this.game.renderer.drawImage(this);
        return true;
    }



}