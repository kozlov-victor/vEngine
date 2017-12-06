


import Move4Dir from './move4Dir'

export default class Control4Dir extends Move4Dir {

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
        if (keyboard.isPressed(keyboard.KEY.UP)) {
            go.rigidBody.vel.y = -parameters.velocity;
            this.go('Up');
        }
        if (keyboard.isPressed(keyboard.KEY.DOWN)) {
            go.rigidBody.vel.y = parameters.velocity;
            this.go('Down');
        }
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
        } else if (keyboard.isJustReleased(keyboard.KEY.UP)) {
            this.stop();
        } else if (keyboard.isJustReleased(keyboard.KEY.DOWN)) {
            this.stop();
        }
    }

}