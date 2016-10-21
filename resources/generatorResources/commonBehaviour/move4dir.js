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
    idleDownAnimation:'idleDown'
};
 exports.description = 'allow character to walk up, down, left and right';
 */

var animations = {};

var dirs = ['Left','Right','Up','Down'];

dirs.forEach(function(dir){
    var keyWalk = 'walk'+dir+'Animation', keyIdle = 'idle'+dir+'Animation';
    animations[keyWalk] = self.getFrAnimation(parameters[keyWalk]);
    if (!animations[keyWalk]) throw 'can not find animation ' + parameters[keyWalk] +' an gameObject ' + self.name;
    parameters[keyIdle] && (animations[keyIdle] = self.getFrAnimation(parameters[keyIdle]));
});

var lastDir = '';

self.go = function(direction){
    _go(direction);
    lastDir = direction;
};

self.stop = function(){
    _stop();
};

var _stop = function(lastDirection){
    self.stopFrAnimations();
    self.vel.x = 0;
    self.vel.y = 0;
    var idleKey = 'idle'+lastDirection+'Animation';
    animations[idleKey] && (animations[idleKey].play());
};

var _go = function(direction){
    animations['walk'+direction+'Animation'].play();
    switch (direction) {
        case 'Up':
            self.vel.x = 0;
            self.vel.y = - parameters.velocity;
            break;
        case 'Down':
            self.vel.x = 0;
            self.vel.y = parameters.velocity;
            break;
        case 'Left':
            self.vel.x = -parameters.velocity;
            self.vel.y = 0;
            break;
        case 'Right':
            self.vel.x = parameters.velocity;
            self.vel.y = 0;
            break;
    }
};


function onUpdate(){}