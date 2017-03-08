
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
        let ind = ~~((this.frames.length)*delta/this.duration);
        let lastFrIndex = this._gameObject.currFrameIndex;
        if (lastFrIndex!=this.frames[ind]) {
            this._gameObject.setFrameIndex(this.frames[ind]);
        }
    }
});

module.exports = FrameAnimation;