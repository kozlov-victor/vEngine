/**
 *
 exports.parameters =  {};
 exports.description = 'draggable behaviour with multitouch supporting';
 */

var mouse = require('mouse').instance();
var points = {};
var scene = self.getScene();
var collider = require('collider').instance();
var camera = require('camera').instance();

self.on('click',function(e){
    points[e.id] = {
        isMouseDown:true,
        mX: e.objectX,
        mY: e.objectY
    };
    console.log('clicked',points,e.id);
});

scene.on('mouseMove',function(e){
    var point = points[e.id];
    if (point && point.isMouseDown) {
        collider.manage(self,e.screenX - point.mX ,e.screenY - point.mY);
        //self.pos.x = e.screenX - point.mX;
        //self.pos.y = e.screenY - point.mY;
    }
});

scene.on('mouseUp',function(e){
    delete points[e.id];
});