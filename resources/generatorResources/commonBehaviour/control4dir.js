
var keyboard = require('keyboard').instance();
var animations = {};

var _stop = function(lastDirection){
    self.stopFrAnimations();
    self.velX = 0;
    self.velY = 0;
    var idleKey = 'idle'+lastDirection+'Animation';
    self[idleKey] && (self[idleKey].play());
};
var _go = function(direction){
    animations['walk'+direction+'Animation'].play();
};

function onCreate(){
    var dirs = ['Left','Right','Up','Down'];
    var self = this;
    dirs.forEach(function(dir){
        var keyWalk = 'walk'+dir+'Animation', keyIdle = 'idle'+dir+'Animation';
        animations[keyWalk] = self.getFrAnimation(parameters[keyWalk]);
        if (!animations[keyWalk]) throw 'can not find animation ' + parameters[keyWalk] +' an gameObject ' + self.name;
        parameters[keyIdle] && (animations[keyIdle] = _gameObject.getFrAnimation(parameters[keyIdle]));
    });
}

function onUpdate(){
    if (keyboard.isPressed(keyboard.KEY_UP)) {
        self.velY = -parameters.velocity;
        _go('Up');
    }
    if (keyboard.isPressed(keyboard.KEY_DOWN)) {
        self.velY = parameters.velocity;
        _go('Down');
    }
    if (keyboard.isPressed(keyboard.KEY_LEFT)) {
        self.velX = -parameters.velocity;
        _go('Left');
    }
    if (this.keyboard.isPressed(ve.keyboard.KEY_RIGHT)) {
        self.velX = parameters.velocity;
        _go('Right');
    }

    if (this.keyboard.isJustReleased(keyboard.KEY_LEFT)) {
        _stop('Left');
    } else if (keyboard.isJustReleased(keyboard.KEY_RIGHT)) {
        _stop('Right');
    } else if (keyboard.isJustReleased(keyboard.KEY_UP)) {
        _stop('Up');
    } else if (keyboard.isJustReleased(keyboard.KEY_DOWN)) {
        _stop('Down');
    }
}

function onDefine(){
    return {
        parameters: {
            velocity: 100,
            walkLeftAnimation: 'left',
            walkRightAnimation: 'right',
            walkUpAnimation:'up',
            walkDownAnimation:'down',
            idleLeftAnimation: 'idleLeft',
            idleRightAnimation: 'idleRight',
            idleUpAnimation:'idleUp',
            idleDownAnimation:'idleDown'
        },
        description: "control character with cursor to walk up, down, left and right"

    }
}