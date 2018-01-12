
import {Image} from "../../../declarations";

declare const IN_EDITOR:boolean,DEBUG:boolean;

import AbstractRenderer from '../abstract/abstractRenderer'
import Game from "../../game";
import GameObject from "../../../model/generic/gameObject";
import Rect from "../../geometry/rect";
import Point2d from "../../geometry/point2d";

export default class CanvasRenderer extends AbstractRenderer {

    private ctx;

    constructor(game:Game){
        super(game);
        let container = document.createElement('canvas');
        this.ctx = container.getContext('2d');
        document.body.appendChild(container);
        container.setAttribute('width',game.width.toString());
        container.setAttribute('height',game.height.toString());
        this.container = container;
        this.registerResize();
    }

    draw(renderable:GameObject){
        let ctx = this.ctx;
        ctx.save();
        ctx.translate(renderable.pos.x + renderable.width /2,renderable.pos.y + renderable.height/2);
        ctx.scale(renderable.scale.x,renderable.scale.y);
        ctx.rotate(renderable.angle);
        //ctx.rotateY(a);
        ctx.translate(-renderable.width /2, -renderable.height/2);
        ctx.globalAlpha = renderable.alpha;
        ctx.globalCompositeOperation = renderable.blendMode || 'source-over';
        ctx.drawImage(
            this.renderableCache[renderable.spriteSheet.resourcePath],
            renderable._sprPosX,
            renderable._sprPosY,
            renderable.width,
            renderable.height,
            0,
            0,
            renderable.width,
            renderable.height
        );
        ctx.restore();
    }

    drawImage(
        imgPath:string,
        srcRect:Rect,
        dstPoint:Point2d){
        this.ctx.drawImage(
            this.renderableCache[imgPath],
            srcRect.x,
            srcRect.y,
            srcRect.width,
            srcRect.height,
            dstPoint.x,
            dstPoint.y,
            srcRect.width,
            srcRect.height
        );
    }

    drawTiledImage(texturePath:string,
                   srcRect:Rect,
                   dstRect:Rect,
                   offset:Point2d){

    }

    fillRect(rect:Rect,color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
    }

    drawRect(rect:Rect,color){
        this.ctx.fillStyle = color;
        this.ctx.strokeRect(rect.x,rect.y,rect.width,rect.height);
    }

    drawLine(point1:Point2d,point2:Point2d,color){
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(point1.x,point1.y);
        this.ctx.lineTo(point2.x,point2.y);
        this.ctx.stroke();
    }

    fillCircle(x:number,y:number,r:number,color){
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    setAlpha(a:number){
        this.ctx.globalAlpha = a;
    }

    lockRect(rect:Rect) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rect(rect.x,rect.y,rect.width,rect.height);
        this.ctx.clip();
    }

    unlockRect(){
        this.ctx.restore();
    }

    clear(){
        this.ctx.clearRect(0,0,this.game.width,this.game.height);
    }

    clearColor(color){
        this.fillRect(new Rect(0,0,this.game.width,this.game.height),`rgb(${color.r},${color.g},${color.b})`)
    }

    save() {
        this.ctx.save();
    }

    scale(x:number,y:number) {
        this.ctx.scale(x,y);
    }

    rotateZ(angleInRadians:number) {
        this.ctx.rotateZ(angleInRadians);
    }

    rotateY(angleInRadians:number) {
        throw 'rotateY not supported by canvasRenderer'
    }

    translate(x:number,y:number){
        this.ctx.translate(x,y);
    }

    restore(){
        this.ctx.restore();
    }

    beginFrameBuffer(){
        this.save();
    }
    flipFrameBuffer(){
        this.restore();
    }

    loadTextureInfo(resourcePath:string,onLoad:Function){
        let img:Image = new Image();
        img.src = resourcePath;
        img.onload = ()=>{
            let c = document.createElement('canvas');
            c.setAttribute('width',img.width.toString());
            c.setAttribute('height',img.height.toString());
            let ctx = c.getContext('2d');
            ctx.drawImage(img as HTMLImageElement,0,0);
            this.renderableCache[resourcePath] = c;
            onLoad();
        }
    }

}