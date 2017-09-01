
var utils = require('utils');
var bundle = require('bundle');
var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
var device = require('device');
var cache = require('resourceCache');
var Class = require('class');

let colorBGDefault = [255,255,255];

var getCtx = function(el){
    if (!el) el = document.createElement('canvas');
    if (!el) return null;
    return el.getContext("2d");
};


var CanvasContext = Class.extend(function(it){

    var ctx;
    var mScaleX = 1, mScaleY = 1;
    var gameProps;
    var scene;

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

        ctx.globalAlpha = 1;
        let col = scene.useBG?scene.colorBG:colorBGDefault;
        ctx.fillStyle='rgba('+col[0]+','+col[1]+','+col[2]+',255)';
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
        ctx.scale(scaleX,scaleY);
    };

    it.getError = function(){

    };

    it.setAlpha = function(a){
        ctx.globalAlpha = a;
    };

    it.lockRect = function(rect) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(rect.x,rect.y,rect.width,rect.height);
        ctx.clip();
    };

    it.unlockRect = function(){
        ctx.restore();
    };

    it.setScene = function(_scene){
        scene = _scene;
    };

    it.beginFrameBuffer = function(){
        ctx.save();
        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
            ctx.translate(gameProps.globalScale.left,gameProps.globalScale.top);
            ctx.beginPath();
            ctx.rect(0,0,gameProps.width,gameProps.height);
            ctx.clip();
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
        //<code>{{#if opts.minify}}
        img.onerror=function(e){throw 'can not load image with url '+ url};
        //<code>{{/if}}
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

module.exports = CanvasContext;