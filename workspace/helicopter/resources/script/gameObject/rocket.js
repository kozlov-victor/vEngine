var math = require('math');

self.velX = 0;
self.velY = 0;

var initialX = self.posX;
var initialY = self.posY;

function onCreate() {
    var hel = self.getScene().findGameObject('helicopter');
    self.on('click',function(e){
        console.log('clicked',e);
        var vel = math.getNormalizedVectorFromPoints(
            {x:self.posX+self.width/2,y:self.posY+self.height/2},
            {x:hel.posX+hel.width/2,y:hel.posY+hel.height/2});
        //self.posX = initialX;
        //self.posY = initialY;
        self.velX = vel.x*10;
        self.velY = vel.y*10;
    });
}

function onUpdate(time) {
    self.angle = Math.atan2(self.velY,self.velX) + 3.14/2;
}

function onDestroy() {

}