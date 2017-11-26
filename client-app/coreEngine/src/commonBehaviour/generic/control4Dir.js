
/**
 exports.parameters = {
    velocity: 100,
    walkLeftAnimation: 'left',
    walkRightAnimation: 'right',
    walkUpAnimation:'up',
    walkDownAnimation:'down',
    idleLeftAnimation: 'idleLeft',
    idleRightAnimation: 'idleRight',
    idleUpAnimation:'idleUp',
    idleDownAnimation:'idleDown',
    idleLeftAnimation:'idleUp',
    idleRightAnimation:'idleDown'
 };
 exports.description = "control character with cursor to walk up, down, left and right";
 */

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
            go.vel.y = -parameters.velocity;
            this.go('Up');
        }
        if (keyboard.isPressed(Keyboard.KEY.DOWN)) {
            go.vel.y = parameters.velocity;
            this.go('Down');
        }
        if (keyboard.isPressed(Keyboard.KEY.LEFT)) {
            go.vel.x = -parameters.velocity;
            this.go('Left');
        }
        if (keyboard.isPressed(Keyboard.KEY.RIGHT)) {
            go.vel.x = parameters.velocity;
            this.go('Right');
        }

        if (keyboard.isJustReleased(Keyboard.KEY.LEFT)) {
            this.stop();
        } else if (keyboard.isJustReleased(Keyboard.KEY.RIGHT)) {
            this.stop('Right');
        } else if (keyboard.isJustReleased(Keyboard.KEY.UP)) {
            this.stop('Up');
        } else if (keyboard.isJustReleased(Keyboard.KEY.DOWN)) {
            this.stop('Down');
        }
    }

}