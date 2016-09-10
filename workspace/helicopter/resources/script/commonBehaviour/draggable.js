
var mouse = require('mouse').instance();
var isMouseDown = false;
var mX = 0;
var mY = 0;
var scene;

function onCreate(){
    scene = self.getScene();
    self.on('click',function(e){
        isMouseDown = true;
        mX = e.objectX;
        mY = e.objectY;
    });
    scene.on('mouseMove',function(e){
        if (isMouseDown) {
            self.posX = e.screenX - mX;
            self.posY = e.screenY - mY;
        }
    });
}

function onUpdate(){
    if (!mouse.isMouseDown) isMouseDown = false;
}

function onDefine(){
    return {
        parameters: {},
        description:'draggable behaviour'
    }
}