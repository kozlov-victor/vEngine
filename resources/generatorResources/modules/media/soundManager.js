
var bundle = require('bundle').instance();
var AudioSet = require('audioSet').AudioSet;
var cache = require('resourceCache');
var HtmlAudioContext = require('htmlAudioContext').HtmlAudioContext;
var WebAudioContext = require('webAudioContext').WebAudioContext;
var FakeAudioContext = require('fakeAudioContext').FakeAudioContext;

var Context  = null;

var SoundManager = function(){

    if (WebAudioContext.isAcceptable()) {
        Context = WebAudioContext;
    } else if (HtmlAudioContext.isAcceptable()) {
        Context = HtmlAudioContext;
    } else {
        Context = FakeAudioContext;
    }

    var audioSet = new AudioSet(Context,5);

    this.loadSound = function( url, opts, progress, callback) {
        Context.load(url,opts,progress,callback);
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