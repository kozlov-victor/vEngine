
import {Game} from "../../core/game";
import {Rect} from "../../core/geometry/rect";
import {Resource} from "../resource";

export class SpriteSheet extends Resource {

    type:string = 'SpriteSheet';
    width:number = 0;
    height:number = 0;
    numOfFramesH:number = 1;
    numOfFramesV:number = 1;
    _frameWidth:number = 0;
    _frameHeight:number = 0;
    _numOfFrames:number = 0;

    private _frameRect:Rect = new Rect();

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

    getFrameRect(index:number):Rect{
        let fr:Rect = this._frameRect;
        fr.setXYWH(
            this.getFramePosX(index),
            this.getFramePosY(index),
            this._frameWidth,
            this._frameHeight);
        return fr;
    }

}