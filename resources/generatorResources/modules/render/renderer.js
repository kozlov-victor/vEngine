
var bundle = require('bundle').instance();
var collider = require('collider').instance();
var keyboard = require('keyboard').instance();
var glContext = require('glContext').instance();
var canvasContext = require('canvasContext').instance();
var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;

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

    var processScreenSize = function(){
        switch (+gameProps.scaleStrategy) {
            case SCALE_STRATEGY.NO_SCALE:
                var w = gameProps.width;
                var h = gameProps.height;
                canvas.width = w;
                canvas.height = h;
                gameProps.globalScale.x = 1;
                gameProps.globalScale.y = 1;
                break;
            case SCALE_STRATEGY.CSS_PRESERVE_ASPECT_RATIO:
                w = window.innerWidth*deviceScale;
                h = window.innerHeight*deviceScale;
                var scaleFactor = Math.min(w / gameProps.width, h / gameProps.height);
                var scaledWidth = gameProps.width * scaleFactor;
                var scaledHeight = gameProps.height * scaleFactor;
                canvas.width = gameProps.width;
                canvas.height = gameProps.height;
                canvas.style.width = scaledWidth + 'px';
                canvas.style.height = scaledHeight + 'px';
                gameProps.globalScale.x = scaledWidth / gameProps.width;
                gameProps.globalScale.y = scaledHeight / gameProps.height;
                break;
            case SCALE_STRATEGY.CSS_STRETCH:
                w = window.innerWidth*deviceScale;
                h = window.innerHeight*deviceScale;
                canvas.width = gameProps.width;
                canvas.height = gameProps.height;
                canvas.style.width = w + 'px';
                canvas.style.height = h + 'px';
                gameProps.globalScale.x = w / gameProps.width;
                gameProps.globalScale.y = h / gameProps.height;
                break;
            case SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO:
                throw 'SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO not implemented yet';
                break;
            case SCALE_STRATEGY.HARDWARE_STRETCH:
                w = window.innerWidth*deviceScale;
                h = window.innerHeight*deviceScale;
                canvas.width = w;
                canvas.height = h;
                canvas.style.width = w + 'px';
                canvas.style.height = h + 'px';
                gameProps.globalScale.x = w / gameProps.width;
                gameProps.globalScale.y = h / gameProps.height;
                rescaleView(gameProps.globalScale.x,gameProps.globalScale.y);
                break;
        }
    };


    var listenResize = function(){
        window.addEventListener('resize',function(){
            processScreenSize();
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
            document.body.appendChild(canvas);
        }
        ctx = glContext;
        processScreenSize();
        gameProps.scaleStrategy!=SCALE_STRATEGY.NO_SCALE && listenResize();
        //ctx = canvasContext;
        ctx.init(canvas);

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