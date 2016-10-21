/**
 *
 exports.parameters =  {};
 exports.description = 'draggable behaviour with multitouch supporting';
 */

var mouse = require('mouse').instance();
var points = {};
var scene = self.getScene();

self.on('click',function(e){
    points[e.id] = {
        isMouseDown:true,
        mX: e.objectX,
        mY: e.objectY
    };
});

scene.on('mouseMove',function(e){
    var point = points[e.id];
    if (point && point.isMouseDown) {
        self.pos.x = e.screenX - point.mX;
        self.pos.y = e.screenY - point.mY;
    }
});

scene.on('mouseUp',function(e){
    delete points[e.id];
});

function onUpdate(){} // todo how to remove?