
var utils = require('utils');

var getCtx = function(){
    var Ctx = window && window.Audio;
    return new Ctx();
} ;

exports.HtmlAudioContext = require('class').Class.extend(
    {
        type:'htmlAudioContext',
        free:true,
        play: function(buffer,loop){
            var self = this;
            self.free = false;
            self._ctx.src = buffer;
            self._ctx.play();
            self._ctx.onended = function(){
                self.stop();
            }

        },
        stop: function(){
            this.free = true;
        },
        construct: function(){
            this._ctx = getCtx();
            console.log('htmlAudio');
        }
    },
    {
        isAcceptable: function(){
            return !!(window && window.Audio);
        },
        load: function(url,opts,progress,callBack){
            if (opts.type=='base64') {
                callBack(url);
            } else {
                utils.loadBinary(url,progress,function(){
                    callBack(url);
                });
            }

        }
    }
);
