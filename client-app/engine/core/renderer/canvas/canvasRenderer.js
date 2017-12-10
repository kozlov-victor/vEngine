/*global Image:true*/

import AbstractRenderer from '../abstract/abstractRenderer'


export default class CanvasRenderer extends AbstractRenderer {

    constructor(game){
        super(game);
        let container = document.createElement('canvas');
        this.ctx = container.getContext('2d');
        document.body.appendChild(container);
        container.setAttribute('width',game.width);
        container.setAttribute('height',game.height);
        this.container = container;
        this.registerResize();
    }

    draw(renderable){
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

    drawImage(imgPath,srcPosX,srcPosY,srcWidth,srcHeight,destPosX,destPosY){
        this.ctx.drawImage(
            this.renderableCache[imgPath],
            srcPosX,
            srcPosY,
            srcWidth,
            srcHeight,
            destPosX,
            destPosY,
            srcWidth,
            srcHeight
        );
    }

    fillRect(x,y,w,h,color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x,y,w,h);
    }

    drawRect(x,y,w,h,color){
        throw 'not yet implemented';
    }

    setAlpha(a){
        this.ctx.globalAlpha = a;
    }

    lockRect(rect) {
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
        this.fillRect(0,0,this.game.width,this.game.height,`rgb(${color.r},${color.g},${color.b})`)
    }


    save() {
        this.ctx.save();
    }

    scale(x,y) {
        this.ctx.scale(x,y);
    }

    rotateZ(angleInRadians) {
        this.ctx.rotateZ(angleInRadians);
    }

    rotateY(angleInRadians) {
        throw 'rotateY not supported by canvasRenderer'
    }

    translate(x,y){
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

    loadTextureInfo(resourcePath,onLoad){
        let img = new Image();
        img.src = resourcePath;
        img.onload = ()=>{
            let c = document.createElement('canvas');
            c.setAttribute('width',img.width);
            c.setAttribute('height',img.height);
            let ctx = c.getContext('2d');
            ctx.drawImage(img,0,0);
            this.renderableCache[resourcePath] = c;
            onLoad();
        }
    }

}