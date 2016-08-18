
var keyboard = require('common/keyboard');
var collider = require('common/collider');
var canvasContext = require('render/canvas/canvasContext');
var bundle = require('bundle');

var canvas;
var ctx;
var scene;
var currTime = 0;
var lastTime = 0;
var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};
var gameProps;
var canceled = false;

var self = module.exports;

var setFullScreen = function(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    gameProps.globalScale.x = w / gameProps.width;
    gameProps.globalScale.y = h / gameProps.height;
};

var setNormalScreen = function(){
    var w = gameProps.width;
    var h = gameProps.height;
    canvas.width = w;
    canvas.height = h;
    gameProps.globalScale.x = 1;
    gameProps.globalScale.y = 1;
};

var listenResize = function(){
    window.addEventListener('resize',function(){
        setFullScreen();
        rescale(gameProps.globalScale.x,gameProps.globalScale.y);
    });
};

var rescale = function(scaleX,scaleY){
    ctx.scale(scaleX,scaleY);
};

self.getContext = function(){
    return ctx;
};

self.getCanvas = function(){
    return canvas;
};

var init = function(){
    canvas = document.querySelector('canvas');
    gameProps = bundle.gameProps;
    gameProps.globalScale = {};
    if (!canvas) {
        canvas = document.createElement('canvas');
        if (gameProps.scaleToFullScreen) {
            setFullScreen();
            listenResize()
        } else {
            setNormalScreen();
        }
        document.body.appendChild(canvas);
    }
    ctx = canvasContext;
    //ctx = new ve_local.GlContext();

    module.exports.rendererContext = ctx;
    rescale(gameProps.globalScale.x,gameProps.globalScale.y);

    drawScene();

};

self.getCanvas = function(){
    return canvas;
};


self.cancel = function(){
    cancelAnimationFrame(drawScene);
    canceled = true;
};

var drawScene = function(){
    if (canceled) {
        return;
    }
    reqAnimFrame(drawScene);

    if (!scene) return;

    lastTime = currTime;
    currTime = Date.now();
    var deltaTime = lastTime ? currTime - lastTime : 0;

    ctx.clear(gameProps.width,gameProps.height);

    scene.update(currTime,deltaTime);

    bundle.particleSystemList.forEach(function(p){
        p.update(currTime,deltaTime);
    });

    keyboard.update();
};
self.setScene = function(_scene){
    scene = _scene;
    collider.setUp();
};

init();