
var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
var scale = require('device').scale;
var bundle = require('bundle').instance();

var ScaleManager = function(canvas,ctx){

    var rescaleView = function(x,y){
        ctx.rescaleView(x,y);
    };

    var processScreenSize = function(){
        var gameProps = bundle.gameProps;
        var w,h,scaleFactor,scaledWidth,scaledHeight;
        switch (+gameProps.scaleStrategy) {
            case SCALE_STRATEGY.NO_SCALE:
                w = window.innerWidth*scale;
                h = window.innerHeight*scale;
                gameProps.globalScale.x = 1;
                gameProps.globalScale.y = 1;
                gameProps.globalScale.left = 0;
                gameProps.globalScale.top =  0;
                gameProps.left = 0;
                gameProps.top =  0;
                gameProps.canvasWidth = gameProps.width;
                gameProps.canvasHeight = gameProps.height;
                canvas.width = gameProps.width;
                canvas.height = gameProps.height;
                break;
            case SCALE_STRATEGY.CSS_PRESERVE_ASPECT_RATIO:
                w = window.innerWidth*scale;
                h = window.innerHeight*scale;
                scaleFactor = Math.min(w / gameProps.width, h / gameProps.height);
                scaledWidth = gameProps.width * scaleFactor;
                scaledHeight = gameProps.height * scaleFactor;
                gameProps.globalScale.x = scaledWidth / gameProps.width;
                gameProps.globalScale.y = scaledHeight / gameProps.height;
                gameProps.scaledWidth = scaledWidth;
                gameProps.scaledHeight = scaledHeight;
                gameProps.globalScale.left = (w - scaledWidth) / 2;
                gameProps.globalScale.top =  (h - scaledHeight) / 2;
                gameProps.left = (w - scaledWidth)/2;
                gameProps.top =  (h - scaledHeight)/2;
                gameProps.canvasWidth = gameProps.width;
                gameProps.canvasHeight = gameProps.height;
                canvas.width = gameProps.width;
                canvas.height = gameProps.height;
                canvas.style.width = scaledWidth + 'px';
                canvas.style.height = scaledHeight + 'px';
                canvas.style.marginTop = gameProps.top + 'px';
                canvas.style.left = gameProps.left + 'px';
                break;
            case SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO:
                w = window.innerWidth*scale;
                h = window.innerHeight*scale;
                scaleFactor = Math.min(w / gameProps.width, h / gameProps.height);
                scaledWidth = gameProps.width * scaleFactor;
                scaledHeight = gameProps.height * scaleFactor;
                gameProps.globalScale.x = scaledWidth / gameProps.width;
                gameProps.globalScale.y = scaledHeight / gameProps.height;
                gameProps.scaledWidth = scaledWidth; // one in global scale - other in gameProps
                gameProps.scaledHeight = scaledHeight;
                gameProps.globalScale.left = (w-scaledWidth) / 2 / scaleFactor;
                gameProps.globalScale.top = (h-scaledHeight) / 2 / scaleFactor;
                gameProps.left = (w-scaledWidth) / 2;
                gameProps.top = (h-scaledHeight) / 2;
                gameProps.canvasWidth = w;
                gameProps.canvasHeight = h;
                canvas.width = w;
                canvas.height = h;
                rescaleView(gameProps.globalScale.x,gameProps.globalScale.y);
                break;
            case SCALE_STRATEGY.CSS_STRETCH:
                w = window.innerWidth*scale;
                h = window.innerHeight*scale;
                gameProps.globalScale.x = w / gameProps.width;
                gameProps.globalScale.y = h / gameProps.height;
                gameProps.globalScale.left = 0;
                gameProps.globalScale.top =  0;
                gameProps.left = 0;
                gameProps.top =  0;
                gameProps.canvasWidth = gameProps.width;
                gameProps.canvasHeight = gameProps.height;
                canvas.width = gameProps.width;
                canvas.height = gameProps.height;
                canvas.style.width = w + 'px';
                canvas.style.height = h + 'px';
                break;
            case SCALE_STRATEGY.HARDWARE_STRETCH:
                w = window.innerWidth*scale;
                h = window.innerHeight*scale;
                gameProps.globalScale.x = w / gameProps.width;
                gameProps.globalScale.y = h / gameProps.height;
                gameProps.globalScale.left = 0;
                gameProps.globalScale.top =  0;
                gameProps.left = 0;
                gameProps.top =  0;
                gameProps.canvasWidth = w;
                gameProps.canvasHeight = h;
                canvas.width = w;
                canvas.height = h;
                canvas.style.width = w + 'px';
                canvas.style.height = h + 'px';
                rescaleView(gameProps.globalScale.x,gameProps.globalScale.y);
                break;
        }
    };

    var listenResize = function(){
        window.addEventListener('resize',function(){
            processScreenSize();
        });
    };

    this.manage = function(){
        var gameProps = bundle.gameProps;
        gameProps.globalScale = {};
        processScreenSize();
        gameProps.scaleStrategy!=SCALE_STRATEGY.NO_SCALE && listenResize();
    };

};

var instance = null;

module.exports.instance = function(canvas,ctx){
    if (instance==null) {
        if (!canvas) throw 'can not instantiate ScaleManager: canvas not specified';
        instance = new ScaleManager(canvas,ctx);
    }
    return instance;
};

