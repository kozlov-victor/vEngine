
var animations = {};

function onCreate(){
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
    }
}
var _stop = function(lastDirection){
    self.stopFrAnimations();
    self.velX = 0;
    self.velY = 0;
    var idleKey = 'idle'+lastDirection+'Animation';
    animations[idleKey] && (animations[idleKey].play());
};
var _go = function(direction){
    animations['walk'+direction+'Animation'].play();
    switch (direction) {
        case 'Up':
            self.velX = 0;
            self.velY = - parameters.velocity;
            break;
        case 'Down':
            self.velX = 0;
            self.velY = parameters.velocity;
            break;
        case 'Left':
            self.velY = 0;
            self.velX = -parameters.velocity;
            break;
        case 'Right':
            self.velY = 0;
            self.velX = parameters.velocity;
            break;
    }
};


function onUpdate(){

}


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
exports.description = 'allow character to walk up, down, left and right'