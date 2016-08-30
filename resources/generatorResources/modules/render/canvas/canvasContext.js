
var CanvasContext = function(){

    var ctx;

    this.init = function(canvas) {
        ctx = canvas.getContext('2d');
    };

    this.scale = function(scaleX,scaleY){
        ctx.scale(scaleX,scaleY);
    };

    this.drawImage = function(
        textureInfo,
        fromX,
        fromY,
        fromW,
        fromH,
        toX,
        toY,
        toW,
        toH
    ) {

        ctx.drawImage(
            textureInfo.image,
            fromX,
            fromY,
            fromW,
            fromH,
            toX,
            toY,
            toW,
            toH
        );

    };

    this.loadTextureInfo = function(url,opts,callBack){

        var img = new Image(url);
        img.onload = function(){
            var textureInfo = {
                image:img
            };
            callBack(textureInfo);
        };
        //<code><%if (opts.debug){%>img.onerror=function(e){throw 'can not load image with url '+ url};<%}%>
        img.src = url;

    };

    this.clear = function(w,h){

        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(
            0,
            0,
            w,
            h);

    }

};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new CanvasContext();
    return instance;
};