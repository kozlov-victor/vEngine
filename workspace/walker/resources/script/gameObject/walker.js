
var camera = require('camera');
camera.follow(self);

function onUpdate(time) {
    self.getScene().printText(10,10,window.tot);
}