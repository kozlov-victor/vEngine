
import {Container} from "../generic/container";
import {Game} from "../../../../core/game";
import {Rectangle} from "../drawable/rectangle";
import {Color} from "../../../../core/color";

export class VScroll extends Container {

    handler: Container;

    maxValue:number = 0;
    value: number = 0;
    enabled: boolean = false;

    constructor(game:Game) {
        super(game);
        let bg:Rectangle = new Rectangle(game);
        bg.width = 5;
        bg.fillColor = new Color(50,50,50,10);
        bg.color = Color.NONE.clone();
        let hnd:Rectangle = new Rectangle(game);
        hnd.height = 10;
        hnd.color = Color.NONE.clone();
        hnd.fillColor = new Color(10,10,10,25);
        this.background = bg;
        this.handler = hnd;
    }

    onGeometryChanged(){
        this.handler.width = this.background.width;
        if (this.value>this.maxValue) this.value = this.maxValue;
        if (this.maxValue) this.handler.height = this.height * this.height / this.maxValue;
        if (this.maxValue) this.handler.pos.y =
            this.height * this.value / this.maxValue;
        this.background.revalidate();
        this.handler.revalidate();
        this.calcDrawableRect(this.width,this.height);
    }

    draw(){
        if (!this.enabled) return;
        this.background.draw();
        this.handler.draw();
    }

}