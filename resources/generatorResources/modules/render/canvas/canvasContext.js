
var mat4 = require('mat4');
var utils = require('utils');
var bundle = require('bundle');
var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
var device = require('device');
var cache = require('resourceCache');

var getCtx = function(el){
    if (!el) el = document.createElement('canvas');
    if (!el) return null;
    return el.getContext("2d");
};


exports.CanvasContext = require('class').Class.extend(function(it){

    var ctx;
    var mScaleX = 1, mScaleY = 1;
    var gameProps;

    it.init = function(canvas) {
        ctx = getCtx(canvas);
        gameProps = bundle.gameProps;
    };

    it.drawImage = function(
        textureInfo,
        fromX,
        fromY,
        fromW,
        fromH,
        toX,
        toY
    ) {

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

    it.clear = function(){

        ctx.fillStyle='#ffffff';
        ctx.fillRect(
            0,
            0,
            screen.width*device.scale,
            screen.height*device.scale);

    };

    it.save = function() {
        ctx.save();
    };

    it.scale = function(scaleX,scaleY){
        ctx.scale(scaleX,scaleY);
    };

    it.rotateZ = function(angleInRadians) {
        ctx.rotate(angleInRadians);
    };

    it.rotateY = function(angleInRadians) {
        //
    };

    it.translate = function(x,y){
        ctx.translate(x,y);
    };

    it.restore = function(){
        ctx.restore();
    };

    it.rescaleView = function(scaleX,scaleY){
        //it.scale(scaleX,scaleY);
    };

    it.getError = function(){

    };

    it.setAlpha = function(a){
        ctx.globalAlpha = a;
    };

    it.beginFrameBuffer = function(){
        ctx.save();
        ctx.beginPath();
        //ctx.rect(gameProps.left,gameProps.top,gameProps.scaledWidth,gameProps.scaledHeight);
        //ctx.clip();
        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
            ctx.scale(mScaleX/device.scale,mScaleY/device.scale);
            ctx.translate(gameProps.globalScale.left,gameProps.globalScale.top);
        }
    };

    it.flipFrameBuffer = function(){
        ctx.restore();
    };

},{
    isAcceptable: function(){
        return !!getCtx();
    },
    loadTextureInfo: function(url,opts,progress,callBack) {

        if (cache.has(url)) {
            callBack(cache.get(url));
            return;
        }

        var img = new Image();
        //<code><%if (opts.debug){%>img.onerror=function(e){throw 'can not load image with url '+ url};<%}%>
        var texture = {};

        if (opts.type == 'base64') {
            url = utils.getBase64prefix('image', opts.fileName) + url;
            img.src = url;
            texture = {
                image:img,
                getSize: function(){
                    return {
                        width:img.width,
                        height:img.height
                    }
                }
            };
            callBack(texture);
            return;
        }

        utils.loadBinary(url, progress, function (buffer) {
            var base64String = utils.arrayBufferToBase64(buffer);
            base64String = utils.getBase64prefix('image', opts.fileName) + base64String;
            img.onload = function () {
                texture = {
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
            img.src = base64String;
        });
    }
});