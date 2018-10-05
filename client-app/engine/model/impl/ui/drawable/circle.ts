
import {Ellipse} from "./ellipse";

export class Circle extends Ellipse {

    radius: number = 10;

    draw():boolean{
        this.radiusX = this.radiusY = this.radius;
        this.game.renderer.drawEllipse(this);
        return true;
    }

}