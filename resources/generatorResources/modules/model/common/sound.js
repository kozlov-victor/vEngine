var Resource = require('resource');
var audioPlayer = require('audioPlayer');
var bundle = require('bundle');

var Sound = Resource.extend({
    type:'sound',
    _gain:1,
    _loop:false,
    play: function(){
        audioPlayer.play(this);
    },
    stop: function(){
        audioPlayer.stop(this);
    },
    pause:function(){
        throw 'not implemented'
    },
    setGain:function(val,time,easeFnName){
        audioPlayer.setGain(this,val,time,easeFnName);
    }
}, {
    find: function(name){
        return bundle.soundList.find({name:name});
    }
});

module.exports = Sound;