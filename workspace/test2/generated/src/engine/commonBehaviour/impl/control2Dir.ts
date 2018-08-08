
import {Move2Dir} from './move2Dir'
import {GameObject} from "../../model/impl/gameObject";
import {Game} from "../../core/game";


export class Parameters {
    velocity: number = 100;
    walkLeftAnimation: string = 'left';
    walkRightAnimation: string = 'right';
    idleLeftAnimation: string = 'idleLeft';
    idleRightAnimation: string = 'idleRight';
}

export class Control2Dir extends Move2Dir{

    constructor(game:Game){
        super(game);
    }

    manage(gameObject:GameObject,parameters:{[key:string]:any}) {
        super.manage(gameObject,parameters);
    }

    onUpdate(){
        const keyboard = this.game.keyboard;
        const parameters  = this.parameters;
        const go:GameObject = this.gameObject;
        if (keyboard.isJustPressed(keyboard.KEY.LEFT) || keyboard.isJustPressed(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            go.rigidBody.mAcceleration.x = -parameters['velocity'];
            this.go('Left');
        }
        if (keyboard.isJustPressed(keyboard.KEY.RIGHT) || keyboard.isJustPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            go.rigidBody.mAcceleration.x = parameters['velocity'];
            this.go('Right');
        }

        if (keyboard.isJustReleased(keyboard.KEY.LEFT) || keyboard.isJustReleased(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            this.stop();
        } else if (keyboard.isJustReleased(keyboard.KEY.RIGHT) || keyboard.isJustReleased(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            this.stop();
        }
    }

}