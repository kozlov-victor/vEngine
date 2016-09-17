
var mouse = require('mouse').instance();
var points = {};
var scene;

function onCreate(){
    scene = self.getScene();
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
            self.posX = e.screenX - point.mX;
            self.posY = e.screenY - point.mY;
        }
    });
    scene.on('mouseUp',function(e){
        delete points[e.id];
    });
}

function onUpdate(){
    //if (!mouse.isMouseDown) isMouseDown = false;
}

function onDefine(){
    return {
        parameters: {},
        description:'draggable behaviour'
    }
}