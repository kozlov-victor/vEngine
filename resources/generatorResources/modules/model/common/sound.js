const Resource = require('resource');
const audioPlayer = require('audioPlayer');
const bundle = require('bundle');

const Sound = Resource.extend({
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
        let res = bundle.soundList.find({name:name});
        //<code>{{#if opts.debug}}
        if (!res) throw `can not found sound with name ${name}`;
        // {{/if}}
        return res;
    }
});

module.exports = Sound;