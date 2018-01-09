

import Moveable from '../abstract/moveable'
import Game from "../../core/game";
import GameObject from "../../model/generic/gameObject";

export default class Move4Dir extends Moveable {

    static DIRS = ['Left', 'Right', 'Up','Down'];

    constructor(game:Game){
        super(game);
    }

    manage(gameObject:GameObject, parameters) {
        super.manage(gameObject, parameters, Move4Dir.DIRS);
    }

    stop() {
        super.stop();
        this.gameObject.rigidBody.vel.x = 0;
        this.gameObject.rigidBody.vel.y = 0;
    }

}