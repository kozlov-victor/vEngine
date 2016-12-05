
var mathEx = require('mathEx');

var Collider = function(){

    var gos;
    var scene;

    this.setUp = function(){
        scene = require('game').instance().getCurrScene();
        gos = scene.getAllGameObjects();
    };

    this.manage = function(obj,newX,newY){
        if (obj.pos.x==newX && obj.pos.y==newY) return;
        if (!obj.rigid) {
            obj.pos.x = newX;
            obj.pos.y = newY;
        } else {
            var tileOn = scene.getTileAt(
                newX + obj.getRect().width / 2,
                newY + obj.getRect().height / 2
            );
            if (tileOn==16 || tileOn==17) return;
        }
        var hasCollision = false;
        var all = gos.rs;
        for (var i = 0,l = all.length;i<l;i++) {
            var go = all[i];
            if (obj==go) continue;

            var objRect = obj.getRect();
            objRect.x = newX;
            objRect.y = newY;

            if (mathEx.isRectIntersectRect(objRect,go.getRect())) {
                if (obj.rigid && go.rigid) {
                    hasCollision = true;
                    obj.trigger('collide',go);
                    //console.log('collided',obj.name,go.name,go.rigid);
                } else {
                    obj.trigger('overlap',go);
                }
            }
        }
        if (!hasCollision) {
            obj.pos.x = newX;
            obj.pos.y = newY;
        }
        return hasCollision;
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Collider();
    return instance;
};