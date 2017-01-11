

var ry = 0;
        
exports.onShow = function(){
    self.getFrAnimation('walk').play();
    self.vel.x = -16;
};

exports.onUpdate = function(time) {
    self.angle+=ry;
    //ry+=0.1;
};
    