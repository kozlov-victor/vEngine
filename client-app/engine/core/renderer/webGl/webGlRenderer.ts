

import AbstractRenderer from '../abstract/abstractRenderer'
import SpriteRectDrawer from './renderPrograms/generic/base/spriteRectDrawer'
import TiledSpriteRectDrawer from './renderPrograms/generic/base/tiledSpriteRectDrawer'
import ColorRectDrawer from './renderPrograms/generic/base/colorRectDrawer'
import AbstractDrawer from './renderPrograms/abstract/abstractDrawer'
import LineDrawer from './renderPrograms/generic/base/lineDrawer'
import CircleDrawer from './renderPrograms/generic/base/circleDrawer'
import ModelDrawer from './renderPrograms/generic/base/modelDrawer'
import FrameBuffer from './base/frameBuffer'
import MatrixStack from './base/matrixStack'
import * as mat4 from '../../geometry/mat4'
import * as matEx from '../../mathEx'
import Texture from './base/texture'
import MultBlendDrawer from "./renderPrograms/generic/blend/multBlendDrawer";
import Rect from "../../geometry/rect";
import Game from "../../game";
import GameObjectProto from '../../../model/generic/gameObjectProto';

declare const DEBUG:boolean;
declare const Image:any;

const getCtx = el=>{
    return (
        el.getContext("webgl",{alpha: false}) ||
        el.getContext('experimental-webgl',{alpha: false}) ||
        el.getContext('webkit-3d',{alpha: false}) ||
        el.getContext('moz-webgl',{alpha: false})
    );
};
const SCENE_DEPTH:number = 1000;
const matrixStack:MatrixStack = new MatrixStack();

const makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight,viewWidth,viewHeight){
    // proj * modelView
    let zToWMatrix = mat4.makeZToWMatrix(1);
    let projectionMatrix = mat4.ortho(0,viewWidth,0,viewHeight,-SCENE_DEPTH,SCENE_DEPTH);
    let scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    let translationMatrix = mat4.makeTranslation(dstX, dstY, 0);

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
//  gl.enable(gl.CULL_FACE);
//   gl.enable(gl.DEPTH_TEST);
export default class WebGlRenderer extends AbstractRenderer {

    private gl:WebGLRenderingContext;
    private matrixStack:MatrixStack;
    private circleDrawer:CircleDrawer;
    private spriteRectDrawer:SpriteRectDrawer;
    private tiledSpriteRectDrawer:TiledSpriteRectDrawer;
    private colorRectDrawer:ColorRectDrawer;
    private lineDrawer:LineDrawer;
    private multBlendDrawer:MultBlendDrawer;
    private frameBuffer:FrameBuffer;

    constructor(game:Game){
        super(game);
        // todo DRY
        let container = document.createElement('canvas');
        document.body.appendChild(container);
        container.setAttribute('width',game.width.toString());
        container.setAttribute('height',game.height.toString());
        this.container = container;
        this.matrixStack = matrixStack;
        this.registerResize();
        this._init();
    }

    _init(){
    	let gl = getCtx(this.container);
    	this.gl = gl;

        this.circleDrawer = new CircleDrawer(gl);
        this.spriteRectDrawer = new SpriteRectDrawer(gl);
        this.tiledSpriteRectDrawer = new TiledSpriteRectDrawer(gl);
        this.colorRectDrawer = new ColorRectDrawer(gl);
        this.lineDrawer = new LineDrawer(gl);
        //this.modelDrawer = new ModelDrawer(gl);
        this.multBlendDrawer = new MultBlendDrawer(gl);

        this.frameBuffer = new FrameBuffer(gl,this.game.width,this.game.height);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    }

    draw(renderable:GameObjectProto){

        if (!matEx.overlapTest(this.game.camera.getRectScaled(),renderable.getRect())) return;

        let texToDraw = this.renderableCache[renderable.spriteSheet.resourcePath];
        texToDraw = texToDraw.applyFilters(renderable.filters,this.frameBuffer);

        this.save();
        this.translate(renderable.pos.x,renderable.pos.y);
        if (!(renderable.angle===0 && renderable.scale.equal(1))) {
            let halfV = renderable.width /2;
            let halfH = renderable.height/2;
            this.translate(halfV,halfH);
            this.scale(renderable.scale.x,renderable.scale.y);
            this.rotateZ(renderable.angle);
            //ctx.rotateY(a);
            this.translate(-halfV, -halfH);
        }

        this.drawTexture(
            texToDraw,
            renderable.getFrameRect(),
            0,
            0
        );
        this.restore();
    }

    drawImage(texturePath:string,
              srcX:number, srcY:number, srcWidth:number, srcHeight:number,
              dstX:number, dstY:number){

        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        let texture = this.renderableCache[texturePath];
        if (DEBUG && !texture) {
            if (!texturePath) throw `no texture path provided`;
            else throw `can not find texture with path ${texturePath}`;
        }
        this.drawTexture(texture,new Rect(srcX, srcY, srcWidth, srcHeight), dstX, dstY);
    }

    drawTexture(texture:Texture,
                srcRect:Rect,
                dstX:number, dstY:number){

        let camRectScaled:Rect = this.game.camera.getRectScaled();
        if (!matEx.overlapTest(
            camRectScaled,
            new Rect(camRectScaled.x+srcRect.x,camRectScaled.y+srcRect.y,srcRect.width,srcRect.height))
        ) return;

        let texWidth = texture.getSize().width;
        let texHeight = texture.getSize().height;

        let uniforms = {
            u_textureMatrix: makeTextureMatrix(srcRect.x,srcRect.y,srcRect.width,srcRect.height,texWidth,texHeight),
            u_vertexMatrix: makePositionMatrix(dstX,dstY,srcRect.width,srcRect.height, this.game.width,this.game.height),
            u_alpha: 1
        };

        if (srcRect.width===120 || srcRect.width===174) {
            this.multBlendDrawer.draw(texture,this.frameBuffer,uniforms);
        }
        else this.spriteRectDrawer.draw(texture,uniforms);
    }

    drawTiledImage(texturePath:string,
                   srcX:number,srcY:number,srcWidth:number,srcHeight:number,
                   dstX:number, dstY:number, dstWidth:number, dstHeight:number,
                   offsetX:number,offsetY:number){

        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        let texture:Texture = this.renderableCache[texturePath];
        if (DEBUG && !texture) {
            if (!texturePath) throw `no texture path provided`;
            else throw `can not find texture with path ${texturePath}`;
        }
        let texWidth = texture.getSize().width;
        let texHeight = texture.getSize().height;

        let uniforms:any = {};
        uniforms.u_textureMatrix = makeTextureMatrix(
            0,0,dstWidth, dstHeight,
            texWidth,texHeight
        );
        uniforms.u_vertexMatrix = makePositionMatrix(
            dstX,dstY,dstWidth, dstHeight,
            this.game.width,this.game.height
        );
        uniforms.u_frameCoords = [srcX/texWidth,srcY/texHeight,srcWidth/texWidth,srcHeight/texHeight];
        uniforms.u_offsetCoords = [offsetX/srcWidth,offsetY/srcHeight];
        uniforms.u_alpha = 1;
        this.tiledSpriteRectDrawer.draw(texture,uniforms);

    }

    fillRect(x:number, y:number, width:number, height:number, color){ // todo rect

        if (!matEx.overlapTest(this.game.camera.getRectScaled(),new Rect(x,y,width,height))) return;
        let uniforms = {
            u_vertexMatrix: makePositionMatrix(
                x,y,width,height,
                this.game.width,this.game.height),
            u_rgba: color
        };
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.colorRectDrawer.draw(null,uniforms);
    }

    drawRect(x:number,y:number,w:number,h:number,color){ // todo rect
        this.fillRect(x, y, w, 1, color);
        this.fillRect(x, y + h, w, 1, color);
        this.fillRect(x, y, 1, h, color);
        this.fillRect(x + w, y, 1, h, color);
    }

    drawLine(x1:number,y1:number,x2:number,y2:number,color){

        let dx = x2-x1,dy = y2-y1;
        if (!matEx.overlapTest(this.game.camera.getRectScaled(),new Rect(x1,y1,dx,dy))) return;
        let uniforms:any = {};
        uniforms.u_vertexMatrix = makePositionMatrix(
            x1,y1,dx,dy,
            this.game.width,this.game.height
        );
        uniforms.u_rgba = color;
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.lineDrawer.draw(null,uniforms);
    }

    fillCircle(x:number,y:number,r:number,color){
        let r2 = r*2;
        if (!matEx.overlapTest(this.game.camera.getRectScaled(),new Rect(x-r,y-r,r2,r2))) return;
        let uniforms:any = {};
        uniforms.u_vertexMatrix = makePositionMatrix(
            x-r,y-r,r2,r2,
            this.game.width,this.game.height
        );
        uniforms.u_rgba = color;
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.circleDrawer.draw(null,uniforms);
    }

    setAlpha(a:number){
        throw 'not implemented';
    }

    save() {
        this.matrixStack.save();
    }

    scale(x:number,y:number) {
        this.matrixStack.scale(x,y);
    }

    rotateZ(angleInRadians:number) {
        this.matrixStack.rotateZ(angleInRadians);
    }

    rotateY(angleInRadians:number) {
        this.matrixStack.rotateY(angleInRadians);
    }

    translate(x:number,y:number){
        this.matrixStack.translate(x,y);
    }

    restore(){
        this.matrixStack.restore();
    }

    lockRect(rect:Rect) {

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
        this.frameBuffer.bind();
    }


    // gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    flipFrameBuffer(filters){

        let fullScreen = this.fullScreenSize;
        this.restore();
        this.save();
        this.translate(0,fullScreen.h);
        this.scale(1,-1);

        let texToDraw = this.frameBuffer.getTexture().applyFilters(filters,null);
        this.frameBuffer.unbind();
        this.gl.viewport(0, 0, fullScreen.w,fullScreen.h);

        let uniforms = {
            u_vertexMatrix: makePositionMatrix(
                0,0,
                this.game.width*fullScreen.scaleFactor, this.game.height*fullScreen.scaleFactor,
                fullScreen.w,fullScreen.h
            ),
            u_textureMatrix: makeTextureMatrix(
                0,0,fullScreen.w,fullScreen.h,
                fullScreen.w,fullScreen.h
            ),
            u_alpha: 1
        };
        this.spriteRectDrawer.draw(texToDraw,uniforms);
        //this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.restore();
    };

    getError(){
        if (!DEBUG) return 0;
        let err = this.gl.getError();
        err=err===this.gl.NO_ERROR?0:err;
        if (err) {
            console.log(AbstractDrawer.currentInstance);
        }
        return err;
    }

    loadTextureInfo(resourcePath:string,onLoad:Function){
        let img = new Image();
        img.src = resourcePath;
        img.onload = ()=>{
            let texture = new Texture(this.gl);
            texture.setImage(img);
            this.renderableCache[resourcePath] = texture;
            onLoad();
        };
        if (DEBUG) {
            img.onerror = ()=>{
                throw `Resource loading error: can not load resource "${resourcePath}"`;
            }
        }
    }

}
