

self.angleVel = 10;
var delta = 1;

exports.onUpdate = function(time) {
    self.vel.x = delta * 100;
    self.angleVel +=delta;
    if (self.angleVel>100) delta = -1;
    if (self.angleVel<-100) delta = 1;
};
    