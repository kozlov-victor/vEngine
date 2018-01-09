
// http://madebyevan.com/gamedevclass/minimal-demo/

import Vec2 from '../geometry/vec2'
import GameObject from "../../model/generic/gameObject";
import Game from '../game';

export default class ArcadeRigidBody {

    vel:Vec2 = new Vec2();
    onFloor:boolean = false;
    _onFloorInCurrFrame:boolean = false; // to avoid onFloor oscillation
    _onFloorInPrevFrame:boolean = false;
    static:boolean=false; // todo reserved world
    private game:Game;
    private gameObject:GameObject;

    constructor(gameObject){
        this.game = gameObject.game;
        this.gameObject = gameObject;
    }

    update(time,delta){
        if (!this.gameObject.rigidBody.static) {
            let deltaPoint = this.vel.multByScalar(delta/1000);
            this.game.collider.moveBy(this.gameObject,deltaPoint);
            this.vel.addY(this.game.gravityConstant * delta / 1000);
        }
    }

}