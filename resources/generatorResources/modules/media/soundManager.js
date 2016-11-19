
var bundle = require('bundle').instance();
var AudioSet = require('audioSet').AudioSet;
var cache = require('resourceCache');

var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = window.AudioContext && new window.AudioContext();

var SoundManager = function(){

    var audioSet = new AudioSet(context,5);


    var _loadSoundXhr = function(url,progress,callback){
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
        request.onprogress = function(e){
            progress(url,e.loaded/ e.total);
        };
        //<code><%if (opts.debug){%>request.onerror=function(e){throw 'can not load sound with url '+url};<%}%>
        request.send();
    };

    var _loadSoundBase64 = function(url,callback){
        if (context) {
            var byteArray = require('base64').toByteArray(url);
            context.decodeAudioData(byteArray.buffer).
            then(function(buffer) {
                callback(buffer);
            }).
            catch(function(e){
                    //<code><%if (opts.debug){%>window.showError(e)<%}%>
            });
        } else {
            callback(url);
        }
    };

    this.loadSound = function( url, opts, progress, callback) {
        if (opts.type=='base64') {
            _loadSoundBase64(url, callback);
        } else {
            _loadSoundXhr(url, progress, callback);
        }
    };

    this.play = function(sndName,loop){
        var player = audioSet.getFreePlayer();
        if (!player) return;
        player.play(cache.get(sndName),loop);
    }
};
var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new SoundManager();
    return instance;
};