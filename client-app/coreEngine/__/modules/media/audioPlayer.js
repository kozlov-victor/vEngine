
const bundle = require('bundle');
const AudioNodeSet = require('audioNodeSet');
const cache = require('resourceCache');
const HtmlAudioContext = require('htmlAudioContext');
const WebAudioContext = require('webAudioContext');
const FakeAudioContext = require('fakeAudioContext');
const Tweenable = require('tweenable');
const Tween = require('tween');

let Context  = null;

if (WebAudioContext.isAcceptable()) {
    Context = WebAudioContext;
} else if (HtmlAudioContext.isAcceptable()) {
    Context = HtmlAudioContext;
} else {
    Context = FakeAudioContext;
}

let audioNodeSet = new AudioNodeSet(Context,5);
let tweenable = new Tweenable({global:true});

exports.loadSound = function( url, opts, progress, callback) {
    Context.load(url,opts,progress,callback);
};

exports.play = function(sound){
    let node = audioNodeSet.getFreeNode();
    if (!node) return;
    node.play(sound);
};

exports.stop = function(sound){
    let node = audioNodeSet.getNodeBySound(sound);
    if (!node) return;
    node.stop();
};

exports.stopAll = function(){
    audioNodeSet.stopAll();
};

exports.pauseAll = function(){
    audioNodeSet.pauseAll();
};

exports.resumeAll = function(){
    audioNodeSet.resumeAll();
};

exports.setGain = function(sound,toVal,time,easeFnName){
    let node = audioNodeSet.getNodeBySound(sound);
    if (!node) return;
    if (time) {
        let tween = new Tween(sound,{to:{_gain:toVal}},time,easeFnName);
        tween.progress(function(s){
            node.setGain(s._gain);
        });
        tweenable.tween(tween);
    } else {
        sound._gain = val;
        node.setGain(sound._gain);
    }
};