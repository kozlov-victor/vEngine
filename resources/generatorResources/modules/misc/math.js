var Vec2 = require('vec2').Vec2;

exports.isPointInRect = function(point,rect,angle) {
    //if (angle) {
    //    var vec2 = new Vec2(point.x - rect.x - rect.width/2,point.y - rect.y - rect.height/2);
    //    vec2.setAngle(vec2.getAngle() - angle);
    //    point = {x:vec2.getX() + point.x,y:vec2.getY() + point.y};
    //
    //}
    var res =  point.x>rect.x &&
        point.x<(rect.x+rect.width) &&
        point.y>rect.y &&
        point.y<(rect.y+rect.height);
    console.log(res);
    return res;
};

exports.isRectIntersectRect = function(r1,r2) {
    return (
        !( r2.x > (r1.x+r1.width)
        || (r2.x+r2.width) < r1.x
        || r2.y > (r1.y+r1.height)
        || (r2.y+r2.height) < r1.y
        )
    );
};

exports.radToDeg = function(rad){
    return rad *  180 / Math.PI;
};

exports.degToRad = function(deg) {
    return deg *  Math.PI / 180;
};

exports.getRandomInRange = function(min, max){
    if (min>max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    var res = Math.random() * (max - min) + min;
    if (res>max) res = max;
    else if (res<min) res = min;
    return ~~res;
};

exports.getNormalizedVectorFromPoints = function(pointA,pointB) {
    var angle = Math.atan2(pointB.y-pointA.y,pointB.x-pointA.x);
    return {
        x:Math.cos(angle),
        y:Math.sin(angle)
    }
};