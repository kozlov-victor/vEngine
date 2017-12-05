

import Moveable from '../abstract/moveable'

export default class Move4Dir extends Moveable {

    static DIRS = ['Left', 'Right', 'Up','Down'];

    constructor(game){
        super(game);
    }

    manage(gameObject, parameters) {
        super.manage(gameObject, parameters, Move4Dir.DIRS);
    }

    stop() {
        super.stop();
        this.gameObject.rigidBody.vel.x = 0;
        this.gameObject.rigidBody.vel.y = 0;
    }

}