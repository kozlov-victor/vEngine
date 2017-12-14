


import Moveable from '../abstract/moveable'

export default class Move2Dir extends Moveable {

    static DIRS = ['Left', 'Right'];

    constructor(game){
        super(game);
    }

    manage(gameObject, parameters) {
        super.manage(gameObject, parameters, Move2Dir.DIRS);
    }

    stop() {
        super.stop();
        this.gameObject.rigidBody.vel.x = 0;
    }

}