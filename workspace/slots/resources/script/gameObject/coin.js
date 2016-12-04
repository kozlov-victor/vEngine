
self._frameAnimations.get(0).play();
self.setFrameIndex(~~(Math.random()*10));

exports.onUpdate = function(time) {
    self.angle+=0.5;
};