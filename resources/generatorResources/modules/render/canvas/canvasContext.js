
var mat4 = require('mat4');
var MatrixStack = require('matrixStack').MatrixStack;
var bundle = require('bundle').instance();
var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
var device = require('device');

var CanvasContext = function(){

    var ctx;
    var mScaleX = 1, mScaleY = 1;
    var gameProps;
    var matrixStack = new MatrixStack();

    this.init = function(canvas) {
        ctx = canvas.getContext('2d');
        gameProps = bundle.gameProps;
    };

    this.drawImage = function(
        textureInfo,
        fromX,
        fromY,
        fromW,
        fromH,
        toX,
        toY
    ) {

        var m;

        ctx.drawImage(
            textureInfo.image,
            fromX,
            fromY,
            fromW,
            fromH,
            toX,
            toY,
            fromW,
            fromH
        );

    };

    var cache = {};


    this.loadTextureInfo = function(url,opts,callBack) {
        if (cache.url) {
            callBack(cache[url]);
            return;
        }
        if (opts.type=='base64') {
            url = utils.getBase64prefix('image',opts.fileName) + url;
        }

        var img = new Image(url);
        img.onload = function(){
            var texture = {
                image:img,
                getSize: function(){
                    return {
                        width:img.width,
                        height:img.height
                    }
                }
            };
            callBack(texture);
        };
        //<code><%if (opts.debug){%>img.onerror=function(e){throw 'can not load image with url '+ url};<%}%>
        img.src = url;
    };

    this.clear = function(){

        ctx.fillStyle="#000000";
        ctx.fillRect(
            0,
            0,
            screen.width*device.scale,
            screen.height*device.scale);

    };

    this.save = function() {
        ctx.save();
    };

    this.scale = function(scaleX,scaleY){
        ctx.scale(scaleX,scaleY);
    };

    this.rotateZ = function(angleInRadians) {
        ctx.rotate(angleInRadians);
    };

    this.rotateY = function(angleInRadians) {
        //
    };

    this.translate = function(x,y){
        ctx.translate(x,y);
    };

    this.restore = function(){
        ctx.restore();
    };

    this.rescaleView = function(scaleX,scaleY){
        mScaleX = scaleX;
        mScaleY = scaleY;
    };

    this.beginFrameBuffer = function(){
        ctx.save();
        ctx.beginPath();
        ctx.rect(gameProps.left,gameProps.top,gameProps.scaledWidth,gameProps.scaledHeight);
        ctx.clip();
        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
            ctx.scale(mScaleX/device.scale,mScaleY/device.scale);
            ctx.translate(gameProps.globalScale.left,gameProps.globalScale.top);


        }
    };

    this.flipFrameBuffer = function(){
        ctx.restore();
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new CanvasContext();
    return instance;
};