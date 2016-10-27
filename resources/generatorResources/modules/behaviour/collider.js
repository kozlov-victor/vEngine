
var mathEx = require('mathEx');
var sceneManager = require('sceneManager').instance();

var Collider = function(){

    var gos;

    this.setUp = function(){
        var scene = sceneManager.getCurrScene();
        gos = scene.getAllGameObjects();
    };

    this.manage = function(obj,newX,newY){
        if (obj.pos.x==newX && obj.pos.y==newY) return;
        if (!obj.rigid) {
            obj.pos.x = newX;
            obj.pos.y = newY;
        }
        var res = false;
        gos.some(function(go){

            if (obj==go) return;

            var objRect = obj.getRect();
            objRect.x = newX;
            objRect.y = newY;

            if (mathEx.isRectIntersectRect(objRect,go.getRect())) {
                if (obj.rigid && go.rigid) {
                    res = true;
                    obj.trigger('collide',go);
                    //console.log('collided',obj.name,go.name,go.rigid);
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