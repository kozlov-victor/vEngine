

import {Moveable} from '../abstract/moveable'
import {Game} from "../../core/game";
import {GameObject} from "../../model/impl/gameObject";
import {BehaviourParameters} from "../abstract/baseAbstractBehaviour";

export class Move4Dir extends Moveable {

    private static DIRS = ['Left', 'Right', 'Up','Down'];

    constructor(game:Game){
        super(game);
    }

    manage(gameObject:GameObject, parameters:BehaviourParameters) {
        super.manage(gameObject, parameters, Move4Dir.DIRS);
    }

    stop() {
        super.stop();
        this.gameObject.rigidBody.mVelocity.x = 0; // todo mVelocity velocity
        this.gameObject.rigidBody.mVelocity.y = 0;
    }

}