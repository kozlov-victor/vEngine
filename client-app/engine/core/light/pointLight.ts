
import Point2d from "../geometry/point2d";
import Rect from "../geometry/rect";
import Game from "../game";

export default class PointLight {

    pos:Point2d = new Point2d();
    radius: number = 0;

    color: [1,1,1,1];

    private game:Game;
    private _screenPoint = new Point2d();

    constructor(game:Game){
        this.game = game;
    }

    worldToScreen():Point2d {
        let cameraRect:Rect = this.game.camera.getRectScaled();
        this._screenPoint.setXY(cameraRect.x - this.pos.x,cameraRect.y - this.pos.y);
        return this._screenPoint;
    }

}