
var bundle = require('bundle').instance();
var collider = require('collider').instance();
var keyboard = require('keyboard').instance();
var glContext = require('glContext').instance();
var canvasContext = require('canvasContext').instance();

console.log(navigator.userAgent);

var Renderer = function(){

    var canvas;
    var ctx;
    var scene;
    var self = this;
    var currTime = 0;
    var lastTime = 0;
    var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};
    var gameProps;
    var canceled = false;
    var deviceScale = require('device').deviceScale;

    var setFullScreen = function(){
        var w = window.innerWidth*deviceScale;
        var h = window.innerHeight*deviceScale;
        console.log('w,h',w,h);
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
            rescaleView(gameProps.globalScale.x,gameProps.globalScale.y);
        });
    };

    var rescaleView = function(scaleX,scaleY){
        ctx.rescaleView(scaleX,scaleY);
    };

    this.getContext = function(){
        return ctx;
    };

    this.getCanvas = function(){
        return canvas;
    };

    this.init = function(){
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
        //ctx = canvasContext;
        ctx = glContext;
        ctx.init(canvas);
        rescaleView(gameProps.globalScale.x,gameProps.globalScale.y);

        drawScene();

    };

    this.getCanvas = function(){
        return canvas;
    };

    this.cancel = function(){
        canceled = true;
    };

    var drawScene = function(){
        if (canceled) {
           return;
        }
        //<code>//<%if (opts.debug){%>if (window.canceled) return<%}%>


        reqAnimFrame(drawScene);

        if (!scene) return;

        lastTime = currTime;
        currTime = Date.now();
        var deltaTime = lastTime ? currTime - lastTime : 0;

        ctx.beginFrameBuffer();

        ctx.clear(gameProps.width,gameProps.height);
        scene.update(currTime,deltaTime);
        bundle.particleSystemList.forEach(function(p){
            p.update(currTime,deltaTime);
        });

        ctx.flipFrameBuffer();


        keyboard.update();
    };
    this.setScene = function(_scene){
        scene = _scene;
        collider.setUp();
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Renderer();
    return instance;
};