
var mathEx = require('mathEx');

var gos;
var scene;

exports.setUp = function(){
    scene = require('game').getCurrScene();
    gos = scene.getAllGameObjects();
};

exports.manage = function(obj,newX,newY){
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