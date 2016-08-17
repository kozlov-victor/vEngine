
var self = module.exports; // todo canvas
var canvas;
self.isMouseDown = false;
var globalScale = ve_local.bundle.gameProps.globalScale; // todo

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
    var scene = ve.sceneManager.getCurrScene(); // todo
    if (!scene) return;
    var point = {
        x: e.clientX / globalScale.x,
        y: e.clientY / globalScale.y
    };
    scene._layers.someReversed(function(l){
        var found = false;
        l._gameObjects.someReversed(function(g){
            if (
                ve.Math.isPointInRect(point,g.getRect())
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
    var scene = ve.sceneManager.getCurrScene();
    scene.trigger('mouseMove',{
        screenX: e.clientX / globalScale.x,
        screenY: e.clientY / globalScale.y
    });
};

var resolveMouseUp = function(){
    self.isMouseDown = false;
};