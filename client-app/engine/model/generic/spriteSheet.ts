import BaseModel from '../baseModel'
import Game from "../../core/game";

export default class SpriteSheet extends BaseModel {

    type:string = 'SpriteSheet';
    width:number = 0;
    height:number = 0;
    numOfFramesH:number = 1;
    numOfFramesV:number = 1;
    _frameWidth:number = 0;
    _frameHeight:number = 0;
    _numOfFrames:number = 0;
    resourcePath:string = '';

    constructor(game:Game) {
        super(game);
    }

    revalidate(){
        if (!(this.numOfFramesH && this.numOfFramesV)) return;
        this._frameWidth = ~~(this.width / this.numOfFramesH);
        this._frameHeight = ~~(this.height / this.numOfFramesV);
        this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
    }

    getFramePosX(frameIndex:number) {
        return (frameIndex % this.numOfFramesH) * this._frameWidth;
    }

    getFramePosY(frameIndex:number) {
        return ~~(frameIndex / this.numOfFramesH) * this._frameHeight;
    }
}