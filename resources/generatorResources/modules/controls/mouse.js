
var bundle = require('bundle').instance();
var renderer = require('renderer').instance();
var mathEx = require('mathEx');
var sceneManager = require('sceneManager').instance();
var device = require('device');

var objectsCaptured = {};

var Mouse = function(){

    var self = this;
    var gameProps = bundle.gameProps;
    var globalScale = bundle.gameProps.globalScale;
    var canvas = renderer.getCanvas();

    if (device.isTouch) {
        canvas.ontouchstart = function(e){
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
            (e.button === 0) && resolveClick(e);
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
            x: (e.clientX * device.scale - gameProps.left) / globalScale.x ,
            y: (e.clientY * device.scale - gameProps.top) / globalScale.y ,
            id: e.identifier || 0
        };
    };

    var triggerEvent = function(e,name){
        var scene = sceneManager.getCurrScene();
        if (!scene) return;
        var point = resolveScreenPoint(e);
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
                        objectY:point.y - g.pos.y,
                        id:point.id
                    });
                    point.object = g;
                    return found = true;
                }
            });
            return found;
        });
        scene.trigger(name,{
            screenX:point.x,
            screenY:point.y,
            id:point.id,
            target:point.object
        });
        return point;
    };

    var resolveClick = function(e){
        //<code><%if (opts.debug){%>if (window.canceled) return<%}%>
        var point = triggerEvent(e,'click');
        triggerEvent(e,'mouseDown');
    };

    var resolveMouseMove = function(e){
        //<code><%if (opts.debug){%>if (window.canceled) return<%}%>
        var point = triggerEvent(e,'mouseMove');
        if (!point) return;
        var lastMouseDownObject = objectsCaptured[point.id];
        if (lastMouseDownObject && lastMouseDownObject!=point.object) {
            lastMouseDownObject.trigger('mouseLeave');
            delete objectsCaptured[point.id];
        }
        if (point.object && lastMouseDownObject!=point.object) {
            point.object.trigger('mouseEnter');
            objectsCaptured[point.id] = point.object;
        }

    };

    var resolveMouseUp = function(e){
        //<code><%if (opts.debug){%>if (window.canceled) return<%}%>
        var point = triggerEvent(e,'mouseUp');
        if (!point) return;
        var lastMouseDownObject = objectsCaptured[point.id];
        if (!lastMouseDownObject) return;
        lastMouseDownObject.trigger('mouseUp');
        delete objectsCaptured[point.id];
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Mouse();
    return instance;
};