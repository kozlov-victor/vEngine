/**
 *
 exports.parameters =  {};
 exports.description = 'draggable behaviour with multitouch supporting';
 */

const mouse = require('mouse');
let points = {};
let scene = self.getScene();
let collider = require('collider');
let camera = require('camera');

const getEventId = function(e){
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
    let point = points[getEventId(e)];
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