
var bundle = require('bundle').instance();
var renderer = require('renderer').instance();
var math = require('math');
var sceneManager = require('sceneManager').instance();

var Mouse = function(){

    var self = this;
    self.isMouseDown = false;
    var globalScale = bundle.gameProps.globalScale;
    var canvas = renderer.getCanvas();

    if ('ontouchstart' in window) {
        canvas.ontouchstart = function(e){
            resolveClick(e.touches[0]);
        };
        canvas.ontouchend = canvas.ontouchcancel = function(){
            resolveMouseUp();
        };
        canvas.ontouchmove = function(e){
            resolveMouseMove(e.touches[0]);
        }
    } else {
        canvas.onmousedown = function(e){
            resolveClick(e);
        };
        canvas.onmouseup = function(){
            resolveMouseUp();
        };
        canvas.onmousemove = function(e){
            resolveMouseMove(e);
        }
    }

    var resolveClick = function(e){
        self.isMouseDown = true;
        var scene = sceneManager.getCurrScene();
        if (!scene) return;
        var point = {
            x: e.clientX / globalScale.x,
            y: e.clientY / globalScale.y
        };
        scene._layers.someReversed(function(l){
            var found = false;
            l._gameObjects.someReversed(function(g){
                if (
                    math.isPointInRect(point,g.getRect())
                ) {
                    g.trigger('click',{
                        screenX:point.x,
                        screenY:point.y,
                        objectX:point.x - g.posX,
                        objectY:point.y - g.posY
                    });
                    return found = true;
                }
            });
            return found;
        })

    };

    var resolveMouseMove = function(e){
        var scene = sceneManager.getCurrScene();
        scene.trigger('mouseMove',{
            screenX: e.clientX / globalScale.x,
            screenY: e.clientY / globalScale.y
        });
    };

    var resolveMouseUp = function(){
        self.isMouseDown = false;
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Mouse();
    return instance;
};