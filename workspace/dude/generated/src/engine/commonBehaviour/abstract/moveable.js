
import BaseAbstractBehaviour from './baseAbstractBehaviour'

export default class Moveable extends BaseAbstractBehaviour {

    gameObject = null;

    constructor(game) {
        super();
        this.game = game;
    }

    manage(gameObject, parameters,dirs) {
        this.gameObject = gameObject;
        this.parameters = parameters;
        this.animations = {};
        dirs.forEach(dir => {
            let keyWalk = 'walk' + dir + 'Animation', keyIdle = 'idle' + dir + 'Animation';
            this.animations[keyWalk] = this.gameObject.frameAnimations.find(it => it.name === parameters[keyWalk]);
            //if (!this.animations[keyWalk]) throw `can not find animation ${parameters[keyWalk]} at gameObject ${this.gameObject.name}`;
            parameters[keyIdle] && (this.animations[keyIdle] = this.gameObject.frameAnimations.find(it => it.name === parameters[keyIdle]));
        });
    }

    stop() {
        this.gameObject.stopFrAnimations();
        let keyIdle = 'idle' + this.gameObject._lastDirection + 'Animation';
        if (this.animations[keyIdle]) {
            this.animations[keyIdle].play();
        }
    }

    go(direction) {
        this.gameObject._lastDirection = direction;
        this.animations['walk' + direction + 'Animation'].play();
    }

}