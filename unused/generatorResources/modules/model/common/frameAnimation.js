
const BaseModel = require('baseModel');

const FrameAnimation = BaseModel.extend({
    type:'frameAnimation',
    name:'',
    frames:[],
    duration:1000,
    _gameObject:null,
    _startTime:null,
    _timeForOneFrame:0,
    construct: function(){
        this._timeForOneFrame = ~~(this.duration / this.frames.length);
    },
    play: function(){
        this._gameObject._currFrameAnimation = this;
    },
    stop:function(){
        this._gameObject._currFrameAnimation = null;
        this._startTime = null;
    },
    update: function(time){
        if (!this._startTime) this._startTime = time;
        let delta = (time - this._startTime)%this.duration;
        this._currFrame = ~~((this.frames.length)*delta/this.duration);
        let lastFrIndex = this._gameObject.currFrameIndex;
        if (lastFrIndex!=this.frames[this._currFrame]) {
            this._gameObject.setFrameIndex(this.frames[this._currFrame]);
        }
    },
    _currFrame:0,
    nextFrame: function(){
        let ind = this._currFrame;
        ind++;
        if (ind==this.frames.length) ind = 0;
        this._gameObject.setFrameIndex(this.frames[ind]);
        this._currFrame = ind;
    },
    previousFrame: function(){
        let ind = this._currFrame;
        ind--;
        if (ind<0) ind = this.frames.length - 1;
        this._gameObject.setFrameIndex(this.frames[ind]);
        this._currFrame = ind;
    }
});

module.exports = FrameAnimation;