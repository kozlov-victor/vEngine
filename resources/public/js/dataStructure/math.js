
(function(){

    var ns = {};

    ve.Math = ns;

    ns.isPointInRect = function(point,rect) {
        return  point.x>rect.x &&
            point.x<(rect.x+rect.width) &&
            point.y>rect.y &&
            point.y<(rect.y+rect.height);
    };

    ns.isRectIntersectRect = function(r1,r2) {
        var res =  ! ( r2.x > (r1.x+r1.width)
            || (r2.x+r2.width) < r1.x
            || r2.y > (r1.y+r1.height)
            || (r2.y+r2.height) < r1.y
        );
        return res;
    };

    ns.radToDeg = function(rad){
        return rad *  180 / Math.PI;
    };

    ns.degToRad = function(deg) {
        return deg *  Math.PI / 180;
    };

    ns.getRandomInRange = function(min, max){
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

})();