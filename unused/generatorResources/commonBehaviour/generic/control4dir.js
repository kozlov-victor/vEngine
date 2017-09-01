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
    idleDownAnimation:'idleDown'
 };
 exports.description = "control character with cursor to walk up, down, left and right";
 */

const keyboard = require('keyboard');
let animations = {};


const _stop = function(lastDirection){
    self.stopFrAnimations();
    self.vel.x = 0;
    self.vel.y = 0;
    let keyIdle = 'idle'+lastDirection+'Animation';
    if (animations[keyIdle]) {
        animations[keyIdle].play();
    }
};
const _go = function(direction){
    animations['walk'+direction+'Animation'].play();
};

const dirs = ['Left','Right','Up','Down'];
dirs.forEach(function(dir){
    let keyWalk = 'walk'+dir+'Animation', keyIdle = 'idle'+dir+'Animation';
    animations[keyWalk] = self.getFrAnimation(parameters[keyWalk]);
    if (!animations[keyWalk]) throw 'can not find animation ' + parameters[keyWalk] +' an gameObject ' + self.name;
    parameters[keyIdle] && (animations[keyIdle] = self.getFrAnimation(parameters[keyIdle]));
});


exports.onUpdate = function(){
    if (keyboard.isPressed(keyboard.KEY_UP)) {
        self.vel.y = -parameters.velocity;
        _go('Up');
    }
    if (keyboard.isPressed(keyboard.KEY_DOWN)) {
        self.vel.y = parameters.velocity;
        _go('Down');
    }
    if (keyboard.isPressed(keyboard.KEY_LEFT)) {
        self.vel.x = -parameters.velocity;
        _go('Left');
    }
    if (keyboard.isPressed(keyboard.KEY_RIGHT)) {
        self.vel.x = parameters.velocity;
        _go('Right');
    }

    if (keyboard.isJustReleased(keyboard.KEY_LEFT)) {
        _stop('Left');
    } else if (keyboard.isJustReleased(keyboard.KEY_RIGHT)) {
        _stop('Right');
    } else if (keyboard.isJustReleased(keyboard.KEY_UP)) {
        _stop('Up');
    } else if (keyboard.isJustReleased(keyboard.KEY_DOWN)) {
        _stop('Down');
    }
};