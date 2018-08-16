
import {BaseAbstractBehaviour, BehaviourParameters} from './baseAbstractBehaviour'
import {Game} from "../../core/game";
import {GameObject} from "../../model/impl/gameObject";
import {FrameAnimation} from "../../model/impl/frameAnimation";

export class Moveable extends BaseAbstractBehaviour {

    protected gameObject:GameObject;
    protected parameters:BehaviourParameters;
    protected animations:{[key:string]:FrameAnimation};

    private _dirs: string[];

    constructor(game:Game) {
        super(game);
    }


    setDirs(value: string[]) {
        this._dirs = value;
    }

    manage(gameObject:GameObject, parameters:BehaviourParameters) {
        this.gameObject = gameObject;
        this.parameters = parameters;
        this.animations = {} as {[key:string]:FrameAnimation};
        this._dirs.forEach((dir:string) => {
            let keyWalk:string = 'walk' + dir + 'Animation', keyIdle = 'idle' + dir + 'Animation';
            this.animations[keyWalk] = <FrameAnimation>this.gameObject.
                    frameAnimations.
                    find(it => it.name === parameters[keyWalk]);

            parameters[keyIdle] && (this.animations[keyIdle] =
                <FrameAnimation>this.gameObject.
                frameAnimations.
                find(it => it.name === parameters[keyIdle]));
        });
    }

    stop() {
        this.gameObject.stopFrAnimations();
        let keyIdle:string = 'idle' + this.gameObject._lastDirection + 'Animation';
        if (this.animations[keyIdle]) {
            this.animations[keyIdle].play();
        }
    }

    go(direction:string) {
        this.gameObject._lastDirection = direction;
        this.animations['walk' + direction + 'Animation'].play();
    }

}