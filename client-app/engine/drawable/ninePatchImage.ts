
import {Game} from "../core/game";
import {Rect} from "../core/geometry/rect";
import {Image} from "./image";

export class NinePatchImage extends Image {

    private a:number = 0;
    private b:number = 0;
    private c:number = 0;
    private d:number = 0;

    constructor(game: Game) {
        super(game);
        this.drawingRect.observe(()=>{this.revalidate()});
    }

    revalidate(){
        let r:Rect = this.drawingRect;
        let {width,height} = r;
        if (width<this.a+this.b) width = this.a + this.b;
        if (height<this.c+this.d) height = this.c + this.d;
        r.setWH(width,height);

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

    draw(){
        this.game.renderer.drawNinePatch(
            this.getDefaultResourcePath(),
            this.drawingRect,
            this.filters,
            this.getDrawableInfo(),
            this.a,this.b,this.c,this.d);
    }

}