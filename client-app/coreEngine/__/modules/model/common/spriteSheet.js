
const Resource = require('resource');

const SpriteSheet = Resource.extend({
    type:'spriteSheet',
    width:0,
    height:0,
    numOfFramesH:1,
    numOfFramesV:1,
    _frameWidth:0,
    _frameHeight:0,
    _numOfFrames:0,
    _textureInfo: null,
    getFramePosX: function(frameIndex){
        return (frameIndex%this.numOfFramesH)*this._frameWidth;
    },
    getFramePosY: function(frameIndex){
        return ~~(frameIndex/this.numOfFramesH)*this._frameHeight;
    },
    calcFrameSize: function(){
        if (!(this.numOfFramesH && this.numOfFramesV)) return;
        this._frameWidth = this.width/this.numOfFramesH;
        this._frameHeight = this.height/this.numOfFramesV;
        this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
    },
    construct: function(){
        this.calcFrameSize();
    }
});

module.exports = SpriteSheet;