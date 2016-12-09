
var Vec2 = function(_x,_y){

    var x = _x||0;
    var y = _y||0;
    var angle = 0;
    var norm = 0;

    var onXY_Changed = function(){
        angle = x==0?0:Math.atan(y/x);
        norm = Math.sqrt(x*x+y*y);
    };

    var onAngleChanged = function(){
        y = Math.sin(angle)*norm;
        x = Math.cos(angle)*norm;
    };

    var onNormChanged = function(){
        y = Math.sin(angle)*norm;
        x = Math.cos(angle)*norm;
    };

    this.setXY = function(_x,_y){
        x = _x;
        y = _y;
        onXY_Changed();
    };

    this.setX = function(_x){
        x = _x;
        onXY_Changed();
    };

    this.setY = function(_y){
        y = _y;
        onXY_Changed();
    };

    this.setAngle = function(a){
        angle = a;
        onAngleChanged();
    };

    this.setNorm = function(l){ // length
        norm = l;
        onNormChanged();
    };

    this.getXY = function(){
        return {x:x,y:y};
    };

    this.getX = function(){
        return x;
    };

    this.getY = function(){
        return y;
    };

    this.getAngle = function(){
        return angle;
    };

    this.addVec2 = function(v){
        return new Vec2(x + v.getX(),y + v.getY);
    };

    this.multiplyByScalar = function(sc){
        return new Vec2(x * sc,y * sc);
    };

    this.dotProduct = function(v){ // inner product, скалярное произведение
        return x* v.getX()+y* v.getY();
    };

    this.getNorm = function(){
        return norm;
    };

    (function(){
        onXY_Changed();
    })();

};


module.exports = Vec2;