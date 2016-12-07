/**
 *
 exports.parameters =  {};
 exports.description = 'draggable behaviour with multitouch supporting';
 */

var mouse = require('mouse');
var points = {};
var scene = self.getScene();
var collider = require('collider');
var camera = require('camera');

var getEventId = function(e){
    return e.id || 1;
};

self.on('click',function(e){
    points[getEventId(e)] = {
        isMouseDown:true,
        mX: e.objectX,
        mY: e.objectY
    };
});

scene.on('mouseMove',function(e){
    var point = points[getEventId(e)];
    if (point && point.isMouseDown) {
        collider.manage(
            self,e.screenX - point.mX,
            e.screenY - point.mY
        );
    }
});

scene.on('mouseUp',function(e){
    delete points[getEventId(e)];
});