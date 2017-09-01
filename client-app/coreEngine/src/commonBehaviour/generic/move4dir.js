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

let animations = {};

const dirs = ['Left','Right','Up','Down'];

dirs.forEach(function(dir){
    let keyWalk = 'walk'+dir+'Animation', keyIdle = 'idle'+dir+'Animation';
    animations[keyWalk] = self.getFrAnimation(parameters[keyWalk]);
    if (!animations[keyWalk]) throw 'can not find animation ' + parameters[keyWalk] +' an gameObject ' + self.name;
    parameters[keyIdle] && (animations[keyIdle] = self.getFrAnimation(parameters[keyIdle]));
});

let lastDir = '';

self.go = function(direction){
    _go(direction);
    lastDir = direction;
};

self.stop = function(){
    _stop();
};

let _stop = function(lastDirection){
    self.stopFrAnimations();
    self.vel.x = 0;
    self.vel.y = 0;
    let idleKey = 'idle'+lastDirection+'Animation';
    animations[idleKey] && (animations[idleKey].play());
};

let _go = function(direction){
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