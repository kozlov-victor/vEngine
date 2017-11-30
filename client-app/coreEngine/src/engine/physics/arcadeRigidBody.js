
// http://madebyevan.com/gamedevclass/minimal-demo/

import Vec2 from '../vec2'
import MatchEx from '../mathEx'

export default class ArcadeRigidBody {

    vel = new Vec2();
    mass = 0;

    constructor(gameObject){
        this.game = gameObject.game;
        this.gameObject = gameObject;
    }

    update(time,delta){

        if (!this.gameObject.rigidBody.static) this.gameObject.rigidBody.vel.y+=1;

        let deltaX = this.vel.x * delta / 1000;
        let deltaY = this.vel.y * delta / 1000;
        let expectedY = this.gameObject.pos.y + deltaY;
        this.game._collider.move(this.gameObject,deltaX,deltaY);
        this.gameObject.rigidBody.onFloor = expectedY > this.gameObject.pos.y;
        if (expectedY !== this.gameObject.pos.y) this.gameObject.rigidBody.vel.y = 0
    }

}