


import Move4DirBehaviour from './move4Dir'
import Keyboard from '../../engine/control/keyboard'


export default class Control4DirBehaviour extends Move4DirBehaviour{

    constructor(game){
        super(game);
    }

    manage(gameObject,parameters) {
        super.manage(gameObject,parameters);
    }


    onUpdate(){
        const keyboard = this.game._keyboard;
        const parameters  = this.parameters;
        const go = this.gameObject;
        if (keyboard.isPressed(Keyboard.KEY.UP)) {
            go.rigidBody.vel.y = -parameters.velocity;
            this.go('Up');
        }
        if (keyboard.isPressed(Keyboard.KEY.DOWN)) {
            go.rigidBody.vel.y = parameters.velocity;
            this.go('Down');
        }
        if (keyboard.isPressed(Keyboard.KEY.LEFT)) {
            go.rigidBody.vel.x = -parameters.velocity;
            this.go('Left');
        }
        if (keyboard.isPressed(Keyboard.KEY.RIGHT)) {
            go.rigidBody.vel.x = parameters.velocity;
            this.go('Right');
        }

        if (keyboard.isJustReleased(Keyboard.KEY.LEFT)) {
            this.stop();
        } else if (keyboard.isJustReleased(Keyboard.KEY.RIGHT)) {
            this.stop();
        } else if (keyboard.isJustReleased(Keyboard.KEY.UP)) {
            this.stop();
        } else if (keyboard.isJustReleased(Keyboard.KEY.DOWN)) {
            this.stop();
        }
    }

}