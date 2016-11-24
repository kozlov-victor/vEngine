
var utils = require('utils');

var getCtx = (function(){
    var ctx = window.AudioContext || window.webkitAudioContext;
    var res = null;
    return function(){
        if (ctx && !res) res = new ctx();
        return res;
    }
})();

var decode = function(buffer,callback){
    getCtx().decodeAudioData(
        buffer,
        function(decoded) {
            callback(decoded);
        },
        function(err){
            //<code><%if (opts.debug){%>window.showError(err)<%}%>
        }
    );
};

exports.WebAudioContext = require('class').Class.extend(
    {
        type:'webAudioContext',
        _ctx:null,
        _currSource: null,
        free:true,
        play: function(buffer,loop){
            var self = this;
            self.free = false;
            var currSource = self._ctx.createBufferSource();
            currSource.buffer = buffer;
            currSource.loop = loop;
            currSource.connect(self._ctx.destination);
            currSource.start(0);
            currSource.onended = function(){
                self.stop();
            };
            self._currSource = currSource;
        },
        stop: function(){
            var currSource = this._currSource;
            if (currSource)  {
                currSource.stop();
                currSource.disconnect(this._ctx.destination);
            }
            this._currSource = null;
            this.free = true;
        },
        construct: function(){
            this._ctx = getCtx();
            console.log('webAudio');
        }
    },
    {
        isAcceptable: function(){
            return !!(window && getCtx());
        },
        load: function(url,opts,progress,callBack){
            if (opts.type=='base64') {
                var buffer = require('base64').toByteArray(url).buffer;
                decode(buffer,callBack);
            } else {
                utils.loadBinary(url,progress,function(buffer){
                    decode(buffer,callBack);
                });
            }

        }
    }
);