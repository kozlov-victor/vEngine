
const utils = require('utils');
const cache = require('resourceCache');
const Class = require('class');

const getCtx = (function(){
    let ctx = window.AudioContext;
    let res = null;
    return function(){
        if (ctx && !res) res = new ctx();
        return res;
    }
})();

const decode = function(buffer,callback){
    getCtx().decodeAudioData(
        buffer,
        function(decoded) {
            callback(decoded);
        },
        function(err){
            //<code>{{#if opts.debug}}
            window.showError(err);
            // {{/if}}
        }
    );
};

const WebAudioContext = Class.extend(
    {
        type:'webAudioContext',
        _ctx:null,
        _currSource: null,
        _gainNode:null,
        _free:true,
        isFree: function(){
            return this._free;
        },
        play: function(buffer,loop){
            let self = this;
            self._free = false;
            let currSource = self._ctx.createBufferSource();
            currSource.buffer = buffer;
            currSource.loop = loop;
            currSource.connect(self._gainNode);
            currSource.start(0);
            currSource.onended = function(){
                self.stop();
            };
            self._currSource = currSource;
        },
        stop: function(){
            let currSource = this._currSource;
            if (currSource)  {
                currSource.stop();
                currSource.disconnect(this._gainNode);
            }
            this._currSource = null;
            this._free = true;
        },
        setGain: function(val){
            this._gainNode.gain.value = val;

        },
        pause: function(){
            this._ctx.suspend();
        },
        resume: function(){
            this._ctx.resume();
        },
        construct: function(){
            this._ctx = getCtx();
            this._gainNode = this._ctx.createGain();
            this._gainNode.connect(this._ctx.destination);
        }
    },
    {
        isAcceptable: function(){
            return !!(window && getCtx());
        },
        load: function(url,opts,progress,callBack){
            if (opts.type=='base64') {
                let buffer = require('base64').toByteArray(url).buffer;
                decode(buffer,callBack);
            } else {
                utils.loadBinary(url,progress,function(buffer){
                    decode(buffer,callBack);
                });
            }

        }
    }
);

module.exports = WebAudioContext;