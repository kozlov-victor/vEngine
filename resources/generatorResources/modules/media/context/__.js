//
//var utils = require('utils');
//var cache = require('resourceCache');
//var Class = require('class');
//
//var getCtx = (function(){
//    var ctx = window.AudioContext || window.webkitAudioContext;
//    var res = null;
//    return function(){
//        if (ctx && !res) res = new ctx();
//        return res;
//    }
//})();
//
//var decode = function(buffer,callback){
//    getCtx().decodeAudioData(
//        buffer,
//        function(decoded) {
//            callback(decoded);
//        },
//        function(err){
//            //<code><%if (opts.debug){%>window.showError(err)<%}%>
//        }
//    );
//};
//
//exports.WebAudioContext = Class.extend(
//    function(self){
//        self.type = 'webAudioContext';
//        var _ctx = null;
//        var _currSource = null;
//        var _gainNode = null;
//        var _free = true;
//        self.isFree = function(){
//            return _free;
//        };
//        self.play = function(buffer,loop){
//            _free = false;
//            var currSource = _ctx.createBufferSource();
//            currSource.buffer = buffer;
//            currSource.loop = loop;
//            currSource.connect(_gainNode);
//            currSource.start(0);
//            currSource.onended = function(){
//                self.stop();
//            };
//            _currSource = currSource;
//        };
//        self.stop = function() {
//            if (_currSource)  {
//                _currSource.stop();
//                _currSource.disconnect(_gainNode);
//            }
//            this._currSource = null;
//            this._free = true;
//        };
//        self.setGain = function(val){
//            _gainNode.gain.value = val;
//
//        };
//        self.construct = function(){
//            _ctx = getCtx();
//            _gainNode = _ctx.createGain();
//            _gainNode.connect(_ctx.destination);
//        }
//    },
//    {
//        isAcceptable: function(){
//            return !!(window && getCtx());
//        },
//        load: function(url,opts,progress,callBack){
//            if (opts.type=='base64') {
//                var buffer = require('base64').toByteArray(url).buffer;
//                decode(buffer,callBack);
//            } else {
//                utils.loadBinary(url,progress,function(buffer){
//                    decode(buffer,callBack);
//                });
//            }
//
//        }
//    }
//);