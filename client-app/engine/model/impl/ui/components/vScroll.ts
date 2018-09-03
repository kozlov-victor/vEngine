
import {Container} from "../generic/container";
import {Game} from "../../../../core/game";
import {Rectangle} from "../drawable/rectangle";
import {Color} from "../../../../core/color";

export class VScroll extends Container {

    handler: Container;

    maxValue:number = 0;
    value: number = 0;
    enabled: boolean = true;

    constructor(game:Game) {
        super(game);
        this.background = new Rectangle(game);
        this.background.width = 5;
        this.background.fillColor = new Color(50,50,50,10);
        this.background.color = Color.NONE.clone();
        this.handler = new Rectangle(game);
        this.handler.height = 10;
        this.handler.color = Color.NONE.clone();
        this.handler.fillColor = new Color(10,10,10,25);
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