
var bundle = require('bundle').instance();
var renderer = require('renderer').instance();
var math = require('math');
var sceneManager = require('sceneManager').instance();
var deviceScale = require('device').deviceScale;

var Mouse = function(){

    var self = this;
    var globalScale = bundle.gameProps.globalScale;
    var canvas = renderer.getCanvas();

    if ('ontouchstart' in window) {
        canvas.ontouchstart = function(e){
            for (var i= 0,l= e.touches.length;i<l;i++) {
                resolveClick(e.touches[i],e.touches[i].identifier);
            }
        };
        canvas.ontouchend = canvas.ontouchcancel = function(e){
            for (var i= 0,l= e.touches.length;i<l;i++) {
                resolveMouseUp(e.touches[i],e.touches[i].identifier);
            }
        };
        canvas.ontouchmove = function(e){
            for (var i= 0,l= e.touches.length;i<l;i++) {
                resolveMouseMove(e.touches[i],e.touches[i].identifier);
            }
        }
    } else {
        canvas.onmousedown = function(e){
            resolveClick(e,0);
        };
        canvas.onmouseup = function(e){
            resolveMouseUp(e,0);
        };
        canvas.onmousemove = function(e){
            resolveMouseMove(e,0);
        }
    }

    var resolveScreenPoint = function(e){
        return {
            x: (e.clientX - bundle.gameProps.left) / globalScale.x * deviceScale,
            y: (e.clientY - bundle.gameProps.top) / globalScale.y * deviceScale
        };
    };

    var resolveClick = function(e,id){

        var scene = sceneManager.getCurrScene();
        if (!scene) return;
        var point = resolveScreenPoint(e);
        scene._layers.someReversed(function(l){
            var found = false;
            l._gameObjects.someReversed(function(g){
                if (
                    math.isPointInRect(point,g.getRect(),g.angle)
                ) {
                    g.trigger('click',{
                        screenX:point.x,
                        screenY:point.y,
                        objectX:point.x - g.posX,
                        objectY:point.y - g.posY,
                        id:id
                    });
                    found = true;
                }
            });
            return found;
        })

    };

    var resolveMouseMove = function(e,id){
        var scene = sceneManager.getCurrScene();
        var point = resolveScreenPoint(e);
        scene.trigger('mouseMove',{
            screenX: point.x,
            screenY: point.y,
            id:id
        });
    };

    var resolveMouseUp = function(e,id){
        var scene = sceneManager.getCurrScene();
        var point = resolveScreenPoint(e);
        scene.trigger('mouseUp',{
            screenX: point.x,
            screenY: point.y,
            id:id
        });
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Mouse();
    return instance;
};