import BaseModel from '../baseModel'

export default class FrameAnimation extends BaseModel {

    type = 'FrameAnimation';
    _currFrame = 0;
    frames = [];
    duration = 1000;
    _gameObject = null;
    _startTime = null;

    constructor(game) {
        super(game);
        this.stop();
    }

    revalidate(){
        this._timeForOneFrame = ~~(this.duration / this.frames.length);
    }

    play(opts = {repeat:true}) {
        this._isRepeat = opts.repeat;
        this._gameObject._currFrameAnimation = this;
    }

    stop() {
        if (this._gameObject) this._gameObject._currFrameAnimation = null;
        this._startTime = null;
        this._isRepeat = true;
    }

    update(time) {
        if (!this._startTime) this._startTime = time;
        let delta = (time - this._startTime) % this.duration;
        this._currFrame = ~~((this.frames.length) * delta / this.duration);
        if (this._isRepeat==false && this._currFrame>=this.frames.length-1) {
            this.stop();
        }
        let lastFrIndex = this._gameObject.currFrameIndex;
        if (lastFrIndex != this.frames[this._currFrame]) {
            this._gameObject.setFrameIndex(this.frames[this._currFrame]);
        }
    }

    nextFrame() {
        let ind = this._currFrame;
        ind++;
        if (ind == this.frames.length) ind = 0;
        this._gameObject.setFrameIndex(this.frames[ind]);
        this._currFrame = ind;
    }

    previousFrame() {
        let ind = this._currFrame;
        ind--;
        if (ind < 0) ind = this.frames.length - 1;
        this._gameObject.setFrameIndex(this.frames[ind]);
        this._currFrame = ind;
    }

}