import BaseModel from '../baseModel'

export default class SpriteSheet extends BaseModel {

    constructor(game) {
        super(game);
        this.type = 'SpriteSheet';
        this.width = 0;
        this.height = 0;
        this.numOfFramesH = 1;
        this.numOfFramesV = 1;
        this._frameWidth = 0;
        this._frameHeight = 0;
        this._numOfFrames = 0;
        this._textureInfo = null;
        this.resourcePath = '';
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