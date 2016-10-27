
var bundle = require('bundle').instance();
var renderer = require('renderer').instance();
var mathEx = require('mathEx');
var sceneManager = require('sceneManager').instance();
var deviceScale = require('device').deviceScale;

var objectsMouseDown = {};

var Mouse = function(){

    var self = this;
    var globalScale = bundle.gameProps.globalScale;
    var canvas = renderer.getCanvas();

    if ('ontouchstart' in window) {
        canvas.ontouchstart = function(e){
            console.log('canvas.ontouchstart',e.touches.length);
            var l = e.touches.length;
            while (l--){
                resolveClick(e.touches[l]);
            }
        };
        canvas.ontouchend = canvas.ontouchcancel = function(e){
            var l = e.changedTouches.length;
            while (l--){
                resolveMouseUp(e.changedTouches[l]);
            }
        };
        canvas.ontouchmove = function(e){
            var l = e.touches.length;
            while (l--){
                resolveMouseMove(e.touches[l]);
            }
        }
    } else {
        canvas.onmousedown = function(e){
            resolveClick(e);
        };
        canvas.onmouseup = function(e){
            resolveMouseUp(e);
        };
        canvas.onmousemove = function(e){
            resolveMouseMove(e);
        }
    }

    var resolveScreenPoint = function(e){
        return {
            x: (e.clientX - globalScale.left) / globalScale.x * deviceScale,
            y: (e.clientY - globalScale.top) / globalScale.y * deviceScale,
            id: e.id
        };
    };

    var resolveEvent = function(e,name){
        //<code><%if (opts.debug){%>if (window.canceled) return<%}%>
        var scene = sceneManager.getCurrScene();
        if (!scene) return;
        var point = resolveScreenPoint(e);
        var isObjectCaptured = false;
        scene._layers.someReversed(function(l){
            var found = false;
            l._gameObjects.someReversed(function(g){
                if (
                    mathEx.isPointInRect(point,g.getScreenRect(),g.angle)
                ) {
                    g.trigger(name,{
                        screenX:point.x,
                        screenY:point.y,
                        objectX:point.x - g.pos.x,
                        objectY:point.y - g.pos.y
                    });
                    isObjectCaptured = true;
                    point.object = g;
                    return found = true;
                }
            });
            return found;
        });
        //if (!isObjectCaptured) {
            scene.trigger(name,{
                screenX:point.x,
                screenY:point.y
            });
        //}
        return point;
    };

    var resolveClick = function(e){
        var point = resolveEvent(e,'click');
        resolveEvent(e,'mouseDown');
        if (point.object) objectsMouseDown[point.id] = point.object;
    };

    var resolveMouseMove = function(e){
        resolveEvent(e,'mouseMove');
    };

    var resolveMouseUp = function(e){
        var point = resolveEvent(e,'mouseUp');
        var lastMouseDownObject = objectsMouseDown[point.id];
        if (!lastMouseDownObject) return;
        if (lastMouseDownObject!==point.object) {
            lastMouseDownObject.trigger('mouseUp');
        }
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Mouse();
    return instance;
};