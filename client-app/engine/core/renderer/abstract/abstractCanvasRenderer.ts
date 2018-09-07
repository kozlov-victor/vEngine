
import {AbstractRenderer} from "./abstractRenderer";
import {Game} from "../../game";
import {SCALE_STRATEGY} from "../../misc/consts";
import { AbstractFilter } from '../webGl/filters/abstract/abstractFilter';
import { DrawableInfo } from '../webGl/renderPrograms/interface/drawableInfo';
import {Rect} from "../../geometry/rect";
import { Size } from '../../geometry/size';

export class AbstractCanvasRenderer extends AbstractRenderer {

    constructor(game:Game) {
        super(game);
        let container = document.createElement('canvas');
        document.body.appendChild(container);
        container.setAttribute('width',game.width.toString());
        container.setAttribute('height',game.height.toString());
        this.container = container;
    }

    onResize(){
        let canvas = this.container as HTMLCanvasElement;
        if (this.game.scaleStrategy===SCALE_STRATEGY.NO_SCALE) return;
        else if (this.game.scaleStrategy===SCALE_STRATEGY.STRETCH) {
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            return;
        }
        let canvasRatio = canvas.height / canvas.width;
        let windowRatio = window.innerHeight / window.innerWidth;
        let width;
        let height;

        if (windowRatio < canvasRatio) {
            height = window.innerHeight;
            width = height / canvasRatio;
        } else {
            width = window.innerWidth;
            height = width * canvasRatio;
        }
        this.game.scale.setXY(width / this.game.width, height / this.game.height);
        this.game.pos.setXY(
            (window.innerWidth - width) / 2,
            (window.innerHeight - height) / 2
        );

        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';
        this.container.style.marginTop = `${this.game.pos.y}px`;
    }

    /**
     *
      |-A-|--------|-B-|
     C|-1-|---2----|-3-|
      |---|--------|---|
      |-4-|   4    |-6-|
      |---|        |---|
      |---|--------|---|
     D|-7-|---8----|-9-|
      |---|--------|---|
     */
    drawNinePatch(
        texturePath:string,
        destRect:Rect,
        filters:AbstractFilter[],
        drawableInfo:DrawableInfo,
        a:number,b:number,c:number,d:number
    ){

        let r:Rect = Rect.fromPool();
        let rDst:Rect = Rect.fromPool();
        let texSize:Size = this.renderableCache[texturePath].texture.getSize();
        // patch 1
        r.setXYWH(0,0,a,c);
        rDst.setXYWH(destRect.getPoint().x,destRect.getPoint().y,a,c);
        this.drawImage(texturePath,r,rDst);
        // patch 2
        r.setXYWH(a,0,texSize.width-a-b,c);
        rDst.setXYWH(destRect.x+a,destRect.y,destRect.width-a-c,c);
        this.drawImageEx(texturePath,r,rDst,filters,drawableInfo);
        // patch 3
        r.setXYWH(texSize.width-b,0,b,c);
        rDst.setXYWH(destRect.getPoint().x+destRect.width-b,destRect.getPoint().y,b,c);
        this.drawImageEx(texturePath,r,rDst,filters,drawableInfo);
        // patch 4
        r.setXYWH(0, c, a,texSize.height - c - d);
        rDst.setXYWH(destRect.x,destRect.y+c,a,destRect.height-c-d);
        this.drawImageEx(texturePath,r,rDst,filters,drawableInfo);
        // patch 5
        r.setXYWH(a, c, texSize.width - a - b,texSize.height - c - d);
        rDst.setXYWH(destRect.x + a,destRect.y+c,destRect.width - a - b,destRect.height-c-d);
        this.drawImageEx(texturePath,r,rDst,filters,drawableInfo);
        // patch 6
        r.setXYWH(texSize.width - b, c, b,texSize.height - c - d);
        rDst.setXYWH(destRect.x + destRect.width - b,destRect.y+c,b,destRect.height-c-d);
        this.drawImageEx(texturePath,r,rDst,filters,drawableInfo);
        // patch 7
        r.setXYWH(0,texSize.height - d,a,d);
        rDst.setXYWH(destRect.getPoint().x,destRect.getPoint().y+destRect.height - d,a,d);
        this.drawImageEx(texturePath,r,rDst,filters,drawableInfo);
        // patch 8
        r.setXYWH(a,texSize.height - d,texSize.width-a-b,d);
        rDst.setXYWH(destRect.x + a,destRect.y+destRect.height-d,destRect.width-a-b,d);
        this.drawImageEx(texturePath,r,rDst,filters,drawableInfo);
        // patch 9
        r.setXYWH(texSize.width-b,texSize.height-d,b,d);
        rDst.setXYWH(destRect.getPoint().x+destRect.width-b,destRect.getPoint().y+destRect.height-d,b,d);
        this.drawImageEx(texturePath,r,rDst,filters,drawableInfo);
    }



    

}