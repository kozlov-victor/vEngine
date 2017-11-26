
/**
 *
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
 exports.description = 'allow character to walk up, down, left and right';
 */

import BaseAbstractBehaviour from '../abstract/baseAbstractBehaviour'

export default class Move4DirBehaviour extends BaseAbstractBehaviour {

    gameObject = null;
    lastDirection = null;

    constructor(game) {
        super();
        this.game = game;
    }

    manage(gameObject, parameters) {
        this.gameObject = gameObject;
        this.parameters = parameters;
        this.animations = {};
        const dirs = ['Left', 'Right', 'Up', 'Down'];
        dirs.forEach(dir => {
            let keyWalk = 'walk' + dir + 'Animation', keyIdle = 'idle' + dir + 'Animation';
            this.animations[keyWalk] = this.gameObject.frameAnimations.find(it => it.name === parameters[keyWalk]);
            if (!this.animations[keyWalk]) throw `can not find animation ${parameters[keyWalk]} at gameObject ${this.gameObject.name}`;
            parameters[keyIdle] && (this.animations[keyIdle] = this.gameObject.frameAnimations.find(it => it.name === parameters[keyIdle]));
        });
    }

    stop() {
        this.gameObject.stopFrAnimations();
        this.gameObject.vel.x = 0;
        this.gameObject.vel.y = 0;
        let keyIdle = 'idle' + this.lastDirection + 'Animation';
        if (this.animations[keyIdle]) {
            this.animations[keyIdle].play();
        }
    }

    go(direction) {
        this.lastDirection = direction;
        this.animations['walk' + direction + 'Animation'].play();
    }

}