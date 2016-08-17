
(function(){

    ve_local.CanvasContext = function(){

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

        this.loadTextureInfo = function(url,callBack){

            var img = new Image(url);
            img.onload = function(){
                var textureInfo = {
                    image:img
                };
                callBack(textureInfo);
            };
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

    }

})();