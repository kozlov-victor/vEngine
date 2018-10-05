

import {Shape} from "../generic/shape";

export class Ellipse extends Shape {

    radiusX: number = 10;
    radiusY: number = 20;

    draw():boolean{
        this.game.renderer.drawEllipse(this);
        return true;
    }

}