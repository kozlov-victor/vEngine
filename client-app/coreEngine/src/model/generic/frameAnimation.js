import BaseModel from '../baseModel'

export default class FrameAnimation extends BaseModel {

    constructor() {
        super();
        this._currFrame = 0;
        this.frames = [];
        this.duration = 1000;
        this._gameObject = null;
        this._startTime = null;
        this._timeForOneFrame = ~~(this.duration / this.frames.length);
    }

    construct() {
        this._timeForOneFrame = ~~(this.duration / this.frames.length);
    }

    play() {
        this._gameObject._currFrameAnimation = this;
    }

    stop() {
        this._gameObject._currFrameAnimation = null;
        this._startTime = null;
    }

    update(time) {
        if (!this._startTime) this._startTime = time;
        let delta = (time - this._startTime) % this.duration;
        this._currFrame = ~~((this.frames.length) * delta / this.duration);
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