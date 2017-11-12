import BaseModel from '../baseModel'

export default class SpriteSheet extends BaseModel {

    type = 'SpriteSheet';
    width = 0;
    height = 0;
    numOfFramesH = 1;
    numOfFramesV = 1;
    _frameWidth = 0;
    _frameHeight = 0;
    _numOfFrames = 0;
    resourcePath = '';

    constructor(game) {
        super(game);
    }

    revalidate(){
        if (!(this.numOfFramesH && this.numOfFramesV)) return;
        this._frameWidth = ~~(this.width / this.numOfFramesH);
        this._frameHeight = ~~(this.height / this.numOfFramesV);
        this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
    }

    getFramePosX(frameIndex) {
        return (frameIndex % this.numOfFramesH) * this._frameWidth;
    }

    getFramePosY(frameIndex) {
        return ~~(frameIndex / this.numOfFramesH) * this._frameHeight;
    }
}