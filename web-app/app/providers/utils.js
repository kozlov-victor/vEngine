
var mathEx = _require('mathEx');
var editData = require('providers/editData');
var resource = require('providers/resource');

var Utils = function(){
    this.getGameObjectCss = function(gameObj){
        if (!gameObj) return {};
        return  {
            width:                 gameObj.width+'px',
            height:                gameObj.height+'px',
            backgroundImage:      gameObj._spriteSheet && 'url('+editData.projectName+'/'+gameObj._spriteSheet.resourcePath+')',
            backgroundPositionY: -gameObj._sprPosY+'px',
            backgroundPositionX: -gameObj._sprPosX+'px',
            backgroundRepeat:     'no-repeat',
            opacity:              gameObj.alpha,
            transform:            'scale('+gameObj.scale.x+','+gameObj.scale.y+') rotateZ('+mathEx.radToDeg(gameObj.angle)+'deg)'
        };
    };
    this.merge = function(a,b){
        a = a || {};
        b = b || {};
        var res = Object.create(a);
        Object.keys(b).forEach(function(key){
            res[key] = b[key];
        });
        return res;
    };

    this.hexToRgb = function(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16)||0,
            parseInt(result[2], 16)||0,
            parseInt(result[3], 16)||0
        ] : [0,0,0];
    };

    this.rgbToHex = function(col) {
        var r = +col[0],g=+col[1],b=+col[2];
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    this.dataURItoBlob =function (dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {type:mimeString});
    };

    this.range = function(rFr,rTo) {
        var arr = [], i;
        if (rTo==undefined) {
            rTo = rFr;
            rFr = 0;
        }
        if (rFr<rTo) {
            for (i=rFr;i<=rTo;i++) {
                arr.push(i);
            }
        } else {
            for (i=rFr;i>=rTo;i--) {
                arr.push(i);
            }
        }
        return arr;
    };

    var waitForFrameAndDo = function(file){
        var frame = document.getElementById('scriptEditorFrame');
        var contentWindow = frame && frame.contentWindow;
        if (!contentWindow.ready) {
            setTimeout(function(){
                waitForFrameAndDo(file);
            },100);
            return;
        }
        contentWindow.setCode(file);
        contentWindow.calcEditorSize();
        window.removeEventListener('resize',contentWindow.calcEditorSize);
        window.addEventListener('resize',contentWindow.calcEditorSize);
    };

    this.openEditor = function(resourceUrl) {
        editData.scriptEditorUrl = resourceUrl;
        resource.readFile('script/'+resourceUrl,function(file){
            waitForFrameAndDo(file);
        });
    };

};

module.exports = new Utils();