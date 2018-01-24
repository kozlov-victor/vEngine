


import Moveable from '../abstract/moveable'
import Game from "../../core/game";
import GameObject from "../../model/impl/gameObject";
import {BehaviourParameters} from "../abstract/baseAbstractBehaviour";

export default class Move2Dir extends Moveable {

    private static DIRS = ['Left', 'Right'];

    constructor(game:Game){
        super(game);
    }

    manage(gameObject:GameObject, parameters:BehaviourParameters) {
        super.manage(gameObject, parameters, Move2Dir.DIRS);
    }

    stop() {
        super.stop();
        this.gameObject.rigidBody.vel.x = 0;
    }

}