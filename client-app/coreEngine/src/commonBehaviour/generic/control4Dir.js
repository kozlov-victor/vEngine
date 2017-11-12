
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
        if (keyboard.isPressed(Keyboard.KEY_UP)) {
            go.vel.y = -parameters.velocity;
            this.go('Up');
        }
        if (keyboard.isPressed(Keyboard.KEY_DOWN)) {
            go.vel.y = parameters.velocity;
            this.go('Down');
        }
        if (keyboard.isPressed(Keyboard.KEY_LEFT)) {
            go.vel.x = -parameters.velocity;
            this.go('Left');
        }
        if (keyboard.isPressed(Keyboard.KEY_RIGHT)) {
            go.vel.x = parameters.velocity;
            this.go('Right');
        }

        if (keyboard.isJustReleased(Keyboard.KEY_LEFT)) {
            this.stop();
        } else if (keyboard.isJustReleased(Keyboard.KEY_RIGHT)) {
            this.stop('Right');
        } else if (keyboard.isJustReleased(Keyboard.KEY_UP)) {
            this.stop('Up');
        } else if (keyboard.isJustReleased(Keyboard.KEY_DOWN)) {
            this.stop('Down');
        }
    }

}