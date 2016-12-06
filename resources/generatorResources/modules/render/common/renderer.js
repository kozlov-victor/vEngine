

var GlContext = require('glContext').GlContext;
var CanvasContext = require('canvasContext').CanvasContext;
var resourceCache = require('resourceCache');
var bundle = require('bundle').instance();
var game = require('game').instance();

var Renderer = function(){

    var canvas;
    var ctx;
    var ctxClass;
    var self = this;
    var currTime = 0;
    var lastTime = 0;
    var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};
    var gameProps;
    var isRunning = false;


    this.getContext = function(){
        return ctx;
    };

    this.getContextClass = function(){
        return ctxClass;
    };

    this.getCanvas = function(){
        return canvas;
    };

    this.init = function(){
        canvas = document.querySelector('canvas');
        gameProps = bundle.gameProps;
        if (!canvas) {
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
        }
        ctxClass = GlContext;
        ctx = new ctxClass();
        //ctx = canvasContext;
        game.setCtx(ctx);
        require('scaleManager').instance(canvas,ctx).manage();
        ctx.init(canvas);
    };

    this.start = function(){
        drawSceneLoop();
        isRunning = true;
    };

    this.getCanvas = function(){
        return canvas;
    };

    this.cancel = function(){
        window.canceled = true;
        isRunning = false;
    };

    this.isRunning = function() {
        return isRunning;
    };

    var drawSceneLoop = function(){
        if (window.canceled) {
           return;
        }

        //<code><%if (opts.debug){%>if (window.canceled) return<%}%>
        //<code><%if (opts.debug){%>var lastErr = ctx.getError(); if (lastErr) throw "GL error: " + lastErr;<%}%>

        reqAnimFrame(drawSceneLoop);

        lastTime = currTime;
        currTime = Date.now();
        var deltaTime = lastTime ? currTime - lastTime : 0;

        ctx.beginFrameBuffer();
        ctx.clear();

        game.update(currTime,deltaTime);

        ctx.flipFrameBuffer();

    };


    this.printText = function(x,y,text,font){
        if (!text) return;
        font = font || bundle.fontList.get(0);
        if (!font) throw 'at least one font must be specified. Create new one please';
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
    }

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Renderer();
    return instance;
};