
var bundle = require('bundle').instance();
var AudioSet = require('audioSet').AudioSet;

var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = window.AudioContext1 && new window.AudioContext1();

var SoundManager = function(){

    var audioSet = new AudioSet(context,5);

    var base64ToArrayBuffer = function(base64) {
        var binaryString = window.atob(base64);
        var len = binaryString.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    };

    var _loadSoundXhr = function(url,callback){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.setRequestHeader('Accept-Ranges', 'bytes');
        request.setRequestHeader('Content-Range', 'bytes');

        request.onload = function() {
            if (!context) {
                callback(url);
                return;
            }
            context.decodeAudioData(request.response,function(buffer) {
                callback(buffer);
            });
        };
        //<code><%if (opts.debug){%>request.onerror=function(e){throw 'can not load sound with url '+url};<%}%>
        request.send();
    };

    var _loadSoundBase64 = function(url,callback){
        if (context) {
            var byteArray = base64ToArrayBuffer(url);
            context.decodeAudioData(byteArray).then(function(buffer) {
                callback(buffer);
            });
        } else {
            callback(url);
        }
    };

    this.loadSound = function( url, opts, callback) {
        if (opts.type=='base64') {
            _loadSoundBase64(url, callback);
        } else {
            _loadSoundXhr(url, callback);
        }
    };

    this.play = function(sndName,loop){
        var player = audioSet.getFreePlayer();
        if (!player) return;
        player.play(bundle.soundList.find({name:sndName})._buffer,loop);
    }
};

var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new SoundManager();
    return instance;
};