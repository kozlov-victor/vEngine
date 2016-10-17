
var mathEx = require('mathEx');
var sceneManager = require('sceneManager').instance();

var Collider = function(){

    var gos;

    this.setUp = function(){
        var scene = sceneManager.getCurrScene();
        gos = scene.getAllGameObjects();
    };

    this.manage = function(obj,newX,newY){
        if (!obj.rigid) {
            obj.pos.x = newX;
            obj.pos.y = newY;
        }
        var res = false;
        gos.some(function(go){
            if (!go.rigid) {
                res = true;
                return true;
            }
            if (obj==go) return true;
            var objRect = obj.getRect();
            objRect.x = newX;
            objRect.y = newY;
            if (mathEx.isRectIntersectRect(objRect,go.getRect())) {
                if (go.rigid) {
                    res = true;
                    obj.trigger('collide',go);
                    return true;
                } else {
                    obj.trigger('overlap',go);
                }
            }
        });
        if (!res) {
            obj.pos.x = newX;
            obj.pos.y = newY;
        }
        return res;
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Collider();
    return instance;
};