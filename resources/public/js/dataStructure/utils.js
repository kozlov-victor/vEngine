(function(){
    ve.utils = {};
    var ns = ve.utils;
    ns.Queue = function(){
        var self = this;
        this.size = function(){
            return tasksTotal;
        };
        this.onResolved = null;
        var tasksTotal = 0;
        var tasksResolved = 0;
        this.addTask = function() {
            tasksTotal++;
        };
        this.resolveTask = function(){
            tasksResolved++;
            if (tasksTotal==tasksResolved) {
                if (self.onResolved) self.onResolved();
            }
        };
        this.start = function() {
            if (this.size()==0) this.onResolved();
        }
    };
    ns.merge = function(obj1,obj2){
        Object.keys(obj2).forEach(function(key){
            obj1[key]=obj2[key];
        });
    };
    ns.clone = function(obj){
        return Object.create(obj);
    };
    ns.capitalize = function(s){
        return s.substr(0,1).toUpperCase() +
            s.substr(1);
    };
})();



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