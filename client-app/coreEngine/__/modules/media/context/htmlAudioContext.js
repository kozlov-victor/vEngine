
const utils = require('utils');
const Class = require('class');

const getCtx = function(){
    let Ctx = window && window.Audio;
    return new Ctx();
} ;

const HtmlAudioContext = Class.extend(
    {
        type:'htmlAudioContext',
        free:true,
        isFree: function(){
           return this.free;
        },
        play: function(buffer,loop){
            let self = this;
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
        pause: function(){
            this._ctx.pause();
        },
        resume: function(){
            throw "not implemented for now"
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
                console.log('dfdffdf');
                utils.loadBinary(url,progress,function(){
                    callBack(url);
                });
            }

        }
    }
);

module.exports = HtmlAudioContext;