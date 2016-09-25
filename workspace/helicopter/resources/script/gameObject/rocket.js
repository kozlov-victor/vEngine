var math = require('math');

self.velX = 0;
self.velY = 0;
var isTouched = false;


function onCreate() {
    var hel = self.getScene().find('helicopter');
    self.on('click',function(e){
        if (isTouched) return;
        isTouched = true;
        self.velX = 150;
        self.velY = -150;
    });
    self.on('collide',function(el){
        if (el!=hel) return;
        self.kill();
        hel.hurt(40);
    });
}

function onUpdate(time) {
    self.angle = Math.atan2(self.velY,self.velX) + 3.14/2;
}

function onDestroy() {

}