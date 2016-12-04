
var bundle = require('bundle').instance();
var AudioNodeSet = require('audioNodeSet').AudioNodeSet;
var cache = require('resourceCache');
var HtmlAudioContext = require('htmlAudioContext').HtmlAudioContext;
var WebAudioContext = require('webAudioContext').WebAudioContext;
var FakeAudioContext = require('fakeAudioContext').FakeAudioContext;
var Tweenable = require('tweenable').Tweenable;
var Tween = require('tween').Tween;

var Context  = null;

var AudioPlayer = function(){

    if (WebAudioContext.isAcceptable()) {
        Context = WebAudioContext;
    } else if (HtmlAudioContext.isAcceptable()) {
        Context = HtmlAudioContext;
    } else {
        Context = FakeAudioContext;
    }

    var audioNodeSet = new AudioNodeSet(Context,5);
    var tweenable = new Tweenable({global:true});

    this.loadSound = function( url, opts, progress, callback) {
        Context.load(url,opts,progress,callback);
    };

    this.play = function(sound){
        var node = audioNodeSet.getFreeNode();
        if (!node) return;
        node.play(sound);
    };

    this.stop = function(sound){
        var node = audioNodeSet.getNodeBySound(sound);
        if (!node) return;
        node.stop();
    };

    this.setGain = function(sound,toVal,time,easeFnName){
        var node = audioNodeSet.getNodeBySound(sound);
        if (!node) return;
        if (time) {
            var tween = new Tween(sound,{to:{_gain:toVal}},time,easeFnName);
            tween.progress(function(s){
                node.setGain(s._gain);
            });
            tweenable.tween(tween);
        } else {
            sound._gain = val;
            node.setGain(sound._gain);
        }
    };
};
var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new AudioPlayer();
    return instance;
};