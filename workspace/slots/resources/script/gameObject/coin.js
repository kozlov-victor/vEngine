
self._frameAnimations.get(0).play();
self.angle = Math.random()*3;

function onUpdate(time) {
    self.angle+=0.5;
}