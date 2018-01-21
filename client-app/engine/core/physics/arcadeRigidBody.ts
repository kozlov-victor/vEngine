
// http://madebyevan.com/gamedevclass/minimal-demo/

import GameObjectProto from "../../model/generic/gameObjectProto";

declare const IN_EDITOR:boolean,DEBUG:boolean;
import Vec2 from '../geometry/vec2'
import GameObject from "../../model/generic/gameObject";
import Game from '../game';
import Point2d from "../geometry/point2d";

export default class ArcadeRigidBody {

    vel:Vec2 = new Vec2();
    onFloor:boolean = false;
    _onFloorInCurrFrame:boolean = false; // to avoid onFloor oscillation
    _onFloorInPrevFrame:boolean = false;
    isStatic:boolean=false;
    protected game:Game;
    protected gameObject:GameObjectProto;

    constructor(game:Game,gameObject:GameObjectProto){
        this.game = game;
        this.gameObject = gameObject;
    }

    update(time:number,delta:number){
        if (!this.gameObject.rigidBody.isStatic) {
            let deltaPoint:Point2d = this.vel.multByScalar(delta/1000);
            this.game.collider.moveBy(this.gameObject,deltaPoint);
            this.vel.addY(this.game.gravityConstant * delta / 1000);
        }
    }

}