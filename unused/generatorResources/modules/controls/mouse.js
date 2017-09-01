
const bundle = require('bundle');
const renderer = require('renderer');
const mathEx = require('mathEx');
const game = require('game');
const device = require('device');

let objectsCaptured = {};

const gameProps = bundle.gameProps;
const globalScale = bundle.gameProps.globalScale;
const canvas = renderer.getCanvas();

if (device.isTouch) {
    canvas.ontouchstart = function(e){
        let l = e.touches.length;
        while (l--){
            resolveClick(e.touches[l]);
        }
    };
    canvas.ontouchend = canvas.ontouchcancel = function(e){
        let l = e.changedTouches.length;
        while (l--){
            resolveMouseUp(e.changedTouches[l]);
        }
    };
    canvas.ontouchmove = function(e){
        let l = e.touches.length;
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

const resolveScreenPoint = function(e){
    return {
        x: (e.clientX * device.scale - gameProps.left) / globalScale.x ,
        y: (e.clientY * device.scale - gameProps.top) / globalScale.y ,
        id: e.identifier || 0
    };
};

const triggerEvent = function(e,name){
    let scene = game.getCurrScene();
    if (!scene) return;
    let point = resolveScreenPoint(e);
    scene.layers.someReversed(function(l){
        let found = false;
        l.gameObjects.someReversed(function(g){
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

const resolveClick = function(e){
    //<code>{{#if opts.minify}}
    if (window.canceled) return;
    // {{/if}}
    let point = triggerEvent(e,'click');
    triggerEvent(e,'mouseDown');
};

const resolveMouseMove = function(e){
    //<code>{{#if opts.minify}}
    if (window.canceled) return;
    // {{/if}}
    let point = triggerEvent(e,'mouseMove');
    if (!point) return;
    let lastMouseDownObject = objectsCaptured[point.id];
    if (lastMouseDownObject && lastMouseDownObject!=point.object) {
        lastMouseDownObject.trigger('mouseLeave');
        delete objectsCaptured[point.id];
    }
    if (point.object && lastMouseDownObject!=point.object) {
        point.object.trigger('mouseEnter');
        objectsCaptured[point.id] = point.object;
    }

};

const resolveMouseUp = function(e){
    //<code>{{#if opts.minify}} if (window.canceled) return;{{/if}}
    let point = triggerEvent(e,'mouseUp');
    if (!point) return;
    let lastMouseDownObject = objectsCaptured[point.id];
    if (!lastMouseDownObject) return;
    lastMouseDownObject.trigger('mouseUp');
    delete objectsCaptured[point.id];
};