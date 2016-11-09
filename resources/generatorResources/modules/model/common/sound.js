var Resource = require('resource').Resource;
var soundManager = require('soundManager',{ignoreFail:1}).instance();

exports.Sound = Resource.extend({
    type:'sound',
    _buffer:null
}, {
    play: function (sndName, loop) {
        soundManager.play(sndName, loop);
    }
});