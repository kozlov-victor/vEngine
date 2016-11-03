
var camera = require('camera').instance();
camera.follow(self);

function onUpdate(time) {
    self.getScene().printText(10,10,window.tot);
}