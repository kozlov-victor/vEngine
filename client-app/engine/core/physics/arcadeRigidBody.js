
// http://madebyevan.com/gamedevclass/minimal-demo/

import Vec2 from '../geometry/vec2'

export default class ArcadeRigidBody {

    vel = new Vec2();

    constructor(gameObject){
        this.game = gameObject.game;
        this.gameObject = gameObject;
    }

    update(time,delta){
        if (!this.gameObject.rigidBody.static) {
            let deltaPoint = this.vel.multByScalar(delta/1000);
            this.vel.y+=this.game.gravityConstant * delta / 1000;
            this.game.collider.moveBy(this.gameObject,deltaPoint);
        }
    }

}