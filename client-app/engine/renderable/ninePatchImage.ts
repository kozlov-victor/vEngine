
import Resource from "../model/resource";
import {Renderable} from "./renderable";
import Game from "../core/game";
import Rect from "../core/geometry/rect";
import Image from "./image";

export default class NinePatchImage extends Image {

    private a:number = 0;
    private b:number = 0;
    private c:number = 0;
    private d:number = 0;

    constructor(game: Game) {
        super(game);
    }

    revalidate(){
        let r:Rect = this.drawingRect;
        if (r.width<this.a+this.b) r.width = this.a + this.b;
        if (r.height<this.c+this.d) r.height = this.c + this.d;
    }

    setABCD(a:number);
    setABCD(a:number,b:number,c:number,d:number);
    setABCD(a:number,b?:number,c?:number,d?:number) {
        if (b===undefined) b = a;
        if (c===undefined) c = b;
        if (d===undefined) d = c;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;

        this.revalidate();

    }

    render(){
        this.game.renderer.drawNinePatch(this.resourcePath,this.drawingRect,this.filters,this.a,this.b,this.c,this.d);
    }

}