
var bundle = require('bundle').instance();

var CanvasContext = function(){

    var ctx;

    this.init = function(canvas) {
        ctx = canvas.getContext('2d');
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

        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(
            0,
            0,
            bundle.gameProps.width,
            bundle.gameProps.height);

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
        //
    };

    this.beginFrameBuffer = function(){
        //
    };

    this.flipFrameBuffer = function(){
        //
    };

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new CanvasContext();
    return instance;
};