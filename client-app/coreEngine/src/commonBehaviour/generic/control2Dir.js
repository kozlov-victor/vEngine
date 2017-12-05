
import Move2Dir from './move2Dir'


export default class Control2Dir extends Move2Dir{

    constructor(game){
        super(game);
    }

    manage(gameObject,parameters) {
        super.manage(gameObject,parameters);
    }

    onUpdate(){
        const keyboard = this.game.keyboard;
        const parameters  = this.parameters;
        const go = this.gameObject;
        if (keyboard.isPressed(keyboard.KEY.LEFT)) {
            go.rigidBody.vel.x = -parameters.velocity;
            this.go('Left');
        }
        if (keyboard.isPressed(keyboard.KEY.RIGHT)) {
            go.rigidBody.vel.x = parameters.velocity;
            this.go('Right');
        }

        if (keyboard.isJustReleased(keyboard.KEY.LEFT)) {
            this.stop();
        } else if (keyboard.isJustReleased(keyboard.KEY.RIGHT)) {
            this.stop();
        }
    }

}