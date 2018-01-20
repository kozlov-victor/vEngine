
import Point2d from "../geometry/point2d";
import Rect from "../geometry/rect";
import Game from "../game";
import AbstractLight from "./abstract/abstractLight";

export default class PointLight extends AbstractLight {

    pos:Point2d = new Point2d();
    radius: number = 0;

    private _screenPoint = new Point2d();

    constructor(game:Game){
        super(game);
    }

    worldToScreen():Point2d {
        let cameraRect:Rect = this.game.camera.getRectScaled();
        this._screenPoint.setXY(this.pos.x - cameraRect.x, this.pos.y - cameraRect.y);
        return this._screenPoint;
    }

}