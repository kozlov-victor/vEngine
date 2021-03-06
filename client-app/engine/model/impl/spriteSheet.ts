
import {Game} from "../../core/game";
import {Rect} from "../../core/geometry/rect";
import {Image} from "./ui/drawable/image";

export class SpriteSheet extends Image {

    type:string = 'SpriteSheet';
    numOfFramesH:number = 1;
    numOfFramesV:number = 1;

    _frameWidth:number = 0;
    _frameHeight:number = 0;
    _numOfFrames:number = 0;


    constructor(game:Game) {
        super(game);
    }

    revalidate(){
        if (!(this.numOfFramesH && this.numOfFramesV)) return;
        this._frameWidth = ~~(this.width / this.numOfFramesH);
        this._frameHeight = ~~(this.height / this.numOfFramesV);
        this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
        this.setWH(this._frameWidth,this._frameHeight);
    }

    getFramePosX(frameIndex:number) {
        return (frameIndex % this.numOfFramesH) * this._frameWidth;
    }

    getFramePosY(frameIndex:number) {
        return ~~(frameIndex / this.numOfFramesH) * this._frameHeight;
    }

    setFrameIndex(frameIndex:number){
        this.srcRect.setXYWH(
            this.getFramePosX(frameIndex),
            this.getFramePosY(frameIndex),
            this._frameWidth,
            this._frameHeight
        );
    }

    getFrameRect(index:number):Rect{
        throw 'unused method'
    }

}