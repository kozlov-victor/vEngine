
/*global Image:true*/

import AbstractRenderer from '../abstract/abstractRenderer'
import SpriteRectDrawer from './renderProgram/spriteRectDrawer'
import ColorRectDrawer from './renderProgram/colorRectDrawer'
import AbstractDrawer from './renderProgram/abstractDrawer'
import LineDrawer from './renderProgram/lineDrawer'
import CircleDrawer from './renderProgram/circleDrawer'
import ModelDrawer from './renderProgram/modelDrawer'
import FrameBuffer from './base/frameBuffer'
import MatrixStack from './base/matrixStack'
import mat4 from '../../mat4'
import matEx from '../../mathEx'
import Texture from './base/texture'

let stop = 0;

const getCtx = el=>{
    return (
        el.getContext("webgl",{alpha: false}) ||
        el.getContext('experimental-webgl',{alpha: false}) ||
        el.getContext('webkit-3d',{alpha: false}) ||
        el.getContext('moz-webgl',{alpha: false})
    );
};
const SCENE_DEPTH = 1000;
const matrixStack = new MatrixStack();

const makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight,viewWidth,viewHeight,scaleX,scaleY){

    let zToWMatrix = mat4.makeZToWMatrix(1);
    let projectionMatrix = mat4.ortho(0,viewWidth,0,viewHeight,-SCENE_DEPTH,SCENE_DEPTH);

    let scaleMatrix = mat4.makeScale(dstWidth*scaleX, dstHeight*scaleY, 1);
    let translationMatrix = mat4.makeTranslation(dstX*scaleX, dstY*scaleY, 0);

    let matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
    matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
    matrix = mat4.matrixMultiply(matrix, projectionMatrix);
    matrix = mat4.matrixMultiply(matrix, zToWMatrix);
    return matrix;
};

const makeTextureMatrix = function(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight){

    let texScaleMatrix = mat4.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
    let texTranslationMatrix = mat4.makeTranslation(srcX / texWidth, srcY / texHeight, 0);

    return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
};

export default class WebGlRenderer extends AbstractRenderer {

    constructor(game){
        super(game);
        // todo DRY
        let container = document.createElement('canvas');
        document.body.appendChild(container);
        container.setAttribute('width',game.width);
        container.setAttribute('height',game.height);
        this.container = container;
        this.matrixStack = matrixStack;
        this.registerResize();
        this.currTex = null;
        this._init();
    }

    _init(){
    	let gl = getCtx(this.container);
    	this.gl = gl;

        this.circleDrawer = new CircleDrawer(gl);
        this.spriteRectDrawer = new SpriteRectDrawer(gl);
        this.colorRectDrawer = new ColorRectDrawer(gl);
        this.lineDrawer = new LineDrawer(gl);
        this.modelDrawer = new ModelDrawer(gl);

        this.frameBuffer = new FrameBuffer(gl,this.game.width,this.game.height);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    }

    draw(renderable){

        if (stop) return;

        if (!matEx.overlapTest(this.game.camera.getRect(),renderable.getRect())) return;
        this.save();
        // todo check if angle neq 0
        let halfV = renderable.width /2;
        let halfH = renderable.height/2;
        this.translate(renderable.pos.x + halfV,renderable.pos.y + halfH);
        this.scale(renderable.scale.x,renderable.scale.y);
        this.rotateZ(renderable.angle);
        //ctx.rotateY(a);
        this.translate(-halfV, -halfH);

        this.drawImage(
            renderable.spriteSheet.resourcePath,
            renderable._sprPosX,
            renderable._sprPosY,
            renderable.width,
            renderable.height,
            0,
            0,
            renderable.width,
            renderable.height
        );
        this.restore();
    }

    drawImage(texturePath,
              srcX, srcY, srcWidth, srcHeight,
              dstX, dstY){

        if (stop) return;
        //if (!matEx.overlapTest(this.game.camera.getRect(),{x,y,width,height})) return; todo

        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        let texture = this.renderableCache[texturePath];
        let texWidth = texture.getSize().width;
        let texHeight = texture.getSize().height;

        if (dstX === undefined) {
            dstX = srcX;
        }
        if (dstY === undefined) {
            dstY = srcY;
        }
        if (srcWidth === undefined) {
            srcWidth = texWidth;
        }
        if (srcHeight === undefined) {
            srcHeight = texHeight;
        }

        if (this.currTex!==texture){
            texture.bind();
            this.currTex = texture;
        }

        this.spriteRectDrawer.bind();
        this.spriteRectDrawer.setUniform("u_textureMatrix",makeTextureMatrix(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight));
        this.spriteRectDrawer.setUniform("u_matrix",makePositionMatrix(
            dstX,dstY,srcWidth,srcHeight,
            this.game.width,this.game.height,1,1 // gameProps.width,gameProps.height
            )
        );
        this.spriteRectDrawer.setUniform('u_alpha',1); // alpha
        this.spriteRectDrawer.draw();

    }

    fillRect(x, y, width, height, color){
        if (stop) return;
        if (!matEx.overlapTest(this.game.camera.getRect(),{x,y,width,height})) return;
        let colorRectDrawer = this.colorRectDrawer;
        let gl = this.gl;
        colorRectDrawer.bind();
        colorRectDrawer.setUniform("u_matrix",makePositionMatrix(
                x,y,width,height,
                this.game.width,this.game.height,1,1
            )
        );
        colorRectDrawer.setUniform("u_rgba",color);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        colorRectDrawer.draw();
    }

    drawRect(x,y,w,h,color){
        this.fillRect(x, y, w, 1, color);
        this.fillRect(x, y + h, w, 1, color);
        this.fillRect(x, y, 1, h, color);
        this.fillRect(x + w, y, 1, h, color);
    }

    drawLine(x1,y1,x2,y2,color){
        if (stop) return;
        let dx = x2-x1,dy = y2-y1;
        if (!matEx.overlapTest(this.game.camera.getRect(),{x:x1,y:y1,width:dx,height:dy})) return;
        let gl = this.gl;
        let lineDrawer = this.lineDrawer;
        lineDrawer.bind();
        lineDrawer.setUniform("u_matrix",makePositionMatrix(
            x1,y1,dx,dy,
            this.game.width,this.game.height,1,1)
        );
        lineDrawer.setUniform("u_rgba",color);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        lineDrawer.draw();
    }

    fillCircle(x,y,r,color){
        let r2 = r*2;
        if (!matEx.overlapTest(this.game.camera.getRect(),{x:x-r,y:y-r,width:r2,height:r2})) return;
        let circleDrawer = this.circleDrawer;
        let gl = this.gl;
        circleDrawer.bind();
        circleDrawer.setUniform("u_matrix",makePositionMatrix(
            x-r,y-r,r2,r2,
            this.game.width,this.game.height,1,1)
        );
        circleDrawer.setUniform("u_rgba",color);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        circleDrawer.draw();
    }

    setAlpha(a){
        throw 'not implemented';
    }

    save() {
        this.matrixStack.save();
    }

    scale(x,y) {
        this.matrixStack.scale(x,y);
    }

    rotateZ(angleInRadians) {
        this.matrixStack.rotateZ(angleInRadians);
    }

    rotateY(angleInRadians) {
        this.matrixStack.rotateY(angleInRadians);
    }

    translate(x,y){
        this.matrixStack.translate(x,y);
    }

    restore(){
        this.matrixStack.restore();
    }

    lockRect(rect) {

    }

    unlockRect(){

    }

    clear(){
        this.gl.clearColor(1,1,1,1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }

    clearColor({r,g,b}){
        this.gl.clearColor(r/255.0,g/255.0,b/255.0,1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }

    beginFrameBuffer(){
        this.save();
        this.gl.viewport(0, 0, this.game.width, this.game.height);
        this.frameBuffer.bind();
    }


    flipFrameBuffer(){

        let fullScreen = this.fullScreenSize;
        this.currTex = null;
        this.restore();
        this.save();
        this.translate(0,fullScreen.h);
        this.scale(1,-1);
        this.frameBuffer.unbind();

        this.gl.viewport(0, 0, fullScreen.w,fullScreen.h); // gameProps.canvasWidth,gameProps.canvasHeight

        this.spriteRectDrawer.bind();
        this.frameBuffer.getTexture().bind();

        this.spriteRectDrawer.setUniform('u_matrix',
            makePositionMatrix(
                0,0,
                this.game.width, this.game.height,// gameProps.width, gameProps.height
                fullScreen.w,fullScreen.h, // gameProps.canvasWidth,gameProps.canvasHeight,
                fullScreen.scaleFactor,fullScreen.scaleFactor // mScaleX,mScaleY
            )
        );

        this.spriteRectDrawer.setUniform('u_textureMatrix',
            makeTextureMatrix(
                0,0,fullScreen.w,fullScreen.h, // gameProps.canvasWidth,gameProps.canvasHeight,
                fullScreen.w,fullScreen.h// gameProps.canvasWidth,gameProps.canvasHeight
            )
        );
        this.spriteRectDrawer.setUniform('u_alpha',1);

        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.spriteRectDrawer.draw();
        this.restore();
    };

    getError(){
        let err = this.gl.getError();
        err=err===this.gl.NO_ERROR?0:err;
        if (err) {
            console.log(AbstractDrawer.currentDrawer);
        }
        return err;
    }

    loadTextureInfo(resourcePath,onLoad){
        let img = new Image();
        img.src = resourcePath;
        img.onload = ()=>{
            let texture = new Texture(this.gl);
            texture.setImage(img);
            this.renderableCache[resourcePath] = texture;
            onLoad();
        }
    }

}