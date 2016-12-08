
var utils = require('utils');
var Class = require('class');

var getCtx = function(){
    var Ctx = window && window.Audio;
    return new Ctx();
} ;

exports.HtmlAudioContext = Class.extend(
    {
        type:'htmlAudioContext',
        free:true,
        isFree: function(){
           return this.free;
        },
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
        setGain: function(val){
            this._ctx.volume = val;
        },
        construct: function(){
            this._ctx = getCtx();
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
