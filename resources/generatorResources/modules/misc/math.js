exports.isPointInRect = function(point,rect) {
    return  point.x>rect.x &&
        point.x<(rect.x+rect.width) &&
        point.y>rect.y &&
        point.y<(rect.y+rect.height);
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
    var res = Math.random() * (max - min + 1) + min;
    if (res>max) res = max;
    else if (res<min) res = min;
    return res;
};