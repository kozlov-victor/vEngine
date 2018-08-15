import {Color} from "../../../../core/color";
import {Game} from "../../../../core/game";
import {_global} from "../../../../core/global";
import {AbstractRenderer} from "../../../../core/renderer/abstract/abstractRenderer";
import {Container} from "../generic/container";

export class Rectangle extends Container{

    color:Color = Color.BLACK.clone();
    lineWidth:number = 1;
    fillColor:Color = Color.RGB(100,100,100);

    constructor(game: Game) {
        super(game);
        this.width = 16;
        this.height = 16;
    }


    draw(){
        let r:AbstractRenderer = this.game.renderer;
        let rect = this.getRect();
        this.drawingRect.setXYWH(0,0,rect.width,rect.height);
        if (this.fillColor) {
            r.fillRect(this.drawingRect,this.fillColor);
        }
        r.drawRect(this.drawingRect,this.color,this.lineWidth);
    }

}

_global['Rectangle'] = Rectangle;