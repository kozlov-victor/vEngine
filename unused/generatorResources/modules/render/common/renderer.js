

var GlContext = require('glContext');
var CanvasContext = require('canvasContext');
var resourceCache = require('resourceCache');
var bundle = require('bundle');
var game = require('game');

var canvas;
var ctx;
var ctxClass;
var self = exports;
var currTime = 0;
var lastTime = 0;
var reqAnimFrame = window.requestAnimationFrame;
var gameProps;
var isRunning = false;
exports.isReady = false;


exports.getContext = function(){
    return ctx;
};

exports.getContextClass = function(){
    return ctxClass;
};

exports.getCanvas = function(){
    return canvas;
};

exports.init = function(){
    canvas = document.querySelector('canvas');
    gameProps = bundle.gameProps;
    if (!canvas) {
        canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
    }
    ctxClass = null;
    if (GlContext.isAcceptable()) ctxClass = GlContext;
    //if (CanvasContext.isAcceptable()) ctxClass = CanvasContext;
    else throw "can not create rendering context";
    ctx = new ctxClass();
    game.setCtx(ctx);
    ctx.init(canvas);
    require('scaleManager').instance(canvas,ctx).manage();
};


exports.start = function(){
    //<code>{{#if opts.minify}}
    if (window.canceled) return;
    //<code>{{/if}}
    if (!exports.isReady) return;
    isRunning = true;
    drawSceneLoop();
};

exports.getCanvas = function(){
    return canvas;
};

exports.stop = function(){
    if (!exports.isReady) return;
    isRunning = false;
};

exports.isRunning = function() {
    return isRunning;
};

exports.setScene = function(scene){
    ctx.setScene(scene);
};

var drawSceneLoop = function(){

    if (!isRunning) return;

    //<code>{{#if opts.minify}}
    var lastErr = ctx.getError();
    if (lastErr) throw "GL error: " + lastErr;
    if (window.canceled) return;
    //{{/if}}

    reqAnimFrame(drawSceneLoop);

    lastTime = currTime;
    currTime = Date.now();
    var deltaTime = lastTime ? currTime - lastTime : 0;

    ctx.beginFrameBuffer();
    ctx.clear();

    game.update(currTime,deltaTime);

    ctx.flipFrameBuffer();

};


exports.printText = function(x,y,text,font){
    if (!text) return;
    font = font || bundle.fontList.get(0);
    //<code>{{#if opts.minify}}
    if (!font) throw 'at least one font must be specified. Create new one';
    //<code>{{/if}}
    var posX = x;
    var oldPosX = x;
    var posY = y;
    text.split('').forEach(function(ch){
        var charInCtx = font.fontContext.symbols[ch]||font.fontContext.symbols['?'];
        if (ch=='\n') {
            posX = oldPosX;
            posY+= charInCtx.height;
            return;
        }
        ctx.drawImage(
            resourceCache.get(font.resourcePath),
            charInCtx.x,
            charInCtx.y,
            charInCtx.width,
            charInCtx.height,
            posX + camera.pos.x,
            posY + camera.pos.y,
            charInCtx.width,
            charInCtx.height
        );
        posX+=charInCtx.width;
    });
};