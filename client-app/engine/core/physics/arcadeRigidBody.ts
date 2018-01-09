
// http://madebyevan.com/gamedevclass/minimal-demo/

import Vec2 from '../geometry/vec2'

export default class ArcadeRigidBody {

    vel:Vec2 = new Vec2();
    onFloor = false;
    _onFloorInCurrFrame = false; // to avoid onFloor oscillation
    _onFloorInPrevFrame = false;
    private game;
    private gameObject;

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