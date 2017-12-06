
const Vec2 = function(_x,_y){

    let x = _x||0;
    let y = _y||0;
    let angle = 0;
    let norm = 0;

    this.x = 0;
    this.y = 0;

    let onXY_Changed = function(){
        angle = x===0?0:Math.atan(y/x);
        norm = Math.sqrt(x*x+y*y);
    };

    let onAngleChanged = function(){
        y = Math.sin(angle)*norm;
        x = Math.cos(angle)*norm;
    };

    let onNormChanged = function(){
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

    this.reset = ()=>{
       x = 0;
       y = 0;
    };

    this.addVec2 = function(v){
        return new Vec2(x + v.getX(),y + v.getY);
    };

    this.add = function(x1,y1){
        this.x+=x1;
        this.y+=y1;
    };

    this.set = function(x,y){
        this.x=x;
        this.y=y;
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