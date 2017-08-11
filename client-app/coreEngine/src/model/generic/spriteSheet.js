import BaseModel from '../baseModel'

export default class SpriteSheet extends BaseModel {

    constructor() {
        super();
        this.width = null;
        this.height = null;
        this.numOfFramesH = null;
        this.numOfFramesV = null;
        this._frameWidth = null;
        this._frameHeight = null;
        this._numOfFrames = null;
        this._textureInfo = null;
    }

    getFramePosX(frameIndex) {
        return (frameIndex % this.numOfFramesH) * this._frameWidth;
    }

    getFramePosY(frameIndex) {
        return ~~(frameIndex / this.numOfFramesH) * this._frameHeight;
    }

    calcFrameSize() {
        if (!(this.numOfFramesH && this.numOfFramesV)) return;
        this._frameWidth = this.width / this.numOfFramesH;
        this._frameHeight = this.height / this.numOfFramesV;
        this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
    }
}