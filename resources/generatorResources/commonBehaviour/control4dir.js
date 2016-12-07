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

var keyboard = require('keyboard');
var animations = {};


var _stop = function(lastDirection){
    self.stopFrAnimations();
    self.vel.x = 0;
    self.vel.y = 0;
    var keyIdle = 'idle'+lastDirection+'Animation';
    if (animations[keyIdle]) {
        animations[keyIdle].play();
    }
};
var _go = function(direction){
    animations['walk'+direction+'Animation'].play();
};

var dirs = ['Left','Right','Up','Down'];
dirs.forEach(function(dir){
    var keyWalk = 'walk'+dir+'Animation', keyIdle = 'idle'+dir+'Animation';
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