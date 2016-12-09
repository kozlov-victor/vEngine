
self._frameAnimations.get(0).play();
self.setFrameIndex(~~(Math.random()*10));

var isBlocked = false;

self.blockRotation = function(){
    isBlocked = true;
};

exports.onUpdate = function(time) {
    if (isBlocked) return;
    self.angle+=0.5;
};