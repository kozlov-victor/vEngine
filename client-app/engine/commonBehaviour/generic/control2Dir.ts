
import Move2Dir from './move2Dir'
import GameObject from "../../model/generic/gameObject";
import Game from "../../core/game";


export default class Control2Dir extends Move2Dir{

    constructor(game:Game){
        super(game);
    }

    manage(gameObject:GameObject,parameters) {
        super.manage(gameObject,parameters);
    }

    onUpdate(){
        const keyboard = this.game.keyboard;
        const parameters  = this.parameters;
        const go:GameObject = this.gameObject;
        if (keyboard.isPressed(keyboard.KEY.LEFT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            go.rigidBody.vel.x = -parameters['velocity'];
            this.go('Left');
        }
        if (keyboard.isPressed(keyboard.KEY.RIGHT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            go.rigidBody.vel.x = parameters['velocity'];
            this.go('Right');
        }

        if (keyboard.isJustReleased(keyboard.KEY.LEFT) || keyboard.isJustReleased(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            this.stop();
        } else if (keyboard.isJustReleased(keyboard.KEY.RIGHT) || keyboard.isJustReleased(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            this.stop();
        }
    }

}