var math = require('math');

self.velX = 0;
self.velY = 0;

var initialX = self.posX;
var initialY = self.posY;

function onCreate() {
    var hel = self.getScene().findGameObject('helicopter');
    self.on('click',function(e){
        var vel = math.getNormalizedVectorFromPoints({x:self.posX,y:self.posY},{x:hel.posX,y:hel.posY});
        self.posX = initialX;
        self.posY = initialY;
        self.velX = vel.x*10;
        self.velY = vel.y*10;
    });
}

function onUpdate(time) {
    self.angle = Math.atan2(self.velY,self.velX) + 3.14/2;
}

function onDestroy() {

}