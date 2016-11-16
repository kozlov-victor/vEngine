
self._frameAnimations.get(0).play();
self.setFrameIndex(~~(Math.random()*10));

function onUpdate(time) {
    self.angle+=0.5;
}