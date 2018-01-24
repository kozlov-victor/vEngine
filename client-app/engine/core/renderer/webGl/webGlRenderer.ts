import SpriteRectLightDrawer from "./renderPrograms/impl/base/spriteRectLightDrawer";

declare const IN_EDITOR:boolean,DEBUG:boolean;

import SpriteRectDrawer from './renderPrograms/impl/base/spriteRectDrawer'
import TiledSpriteRectDrawer from './renderPrograms/impl/base/tiledSpriteRectDrawer'
import ColorRectDrawer from './renderPrograms/impl/base/colorRectDrawer'
import AbstractDrawer, {TextureInfo} from './renderPrograms/abstract/abstractDrawer'
import LineDrawer from './renderPrograms/impl/base/lineDrawer'
import CircleDrawer from './renderPrograms/impl/base/circleDrawer'
import ModelDrawer from './renderPrograms/impl/base/modelDrawer'
import FrameBuffer from './base/frameBuffer'
import MatrixStack from './base/matrixStack'
import * as mat4 from '../../geometry/mat4'
import * as matEx from '../../mathEx'
import Texture from './base/texture'
import MultBlendDrawer from "./renderPrograms/impl/blend/multBlendDrawer";
import Rect from "../../geometry/rect";
import Game from "../../game";
import GameObjectProto from '../../../model/impl/gameObjectProto';
import Point2d from "../../geometry/point2d";
import AbstractCanvasRenderer from "../abstract/abstractCanvasRenderer";
import Color from "../../color";
import OpticMaterial from "../../light/opticMaterial";


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

const makeTextureMatrix = function(srcRect:Rect,texWidth,texHeight){

    let texScaleMatrix = mat4.makeScale(srcRect.width / texWidth, srcRect.height / texHeight, 1);
    let texTranslationMatrix = mat4.makeTranslation(srcRect.x / texWidth, srcRect.y / texHeight, 0);
    return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
};
//  gl.enable(gl.CULL_FACE);
//   gl.enable(gl.DEPTH_TEST);
export default class WebGlRenderer extends AbstractCanvasRenderer {

    private gl:WebGLRenderingContext;
    private matrixStack:MatrixStack;
    private circleDrawer:CircleDrawer;
    private spriteRectDrawer:SpriteRectDrawer;
    private spriteRectLightDrawer:SpriteRectLightDrawer;
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
        this.spriteRectLightDrawer = new SpriteRectLightDrawer(gl);
        this.tiledSpriteRectDrawer = new TiledSpriteRectDrawer(gl);
        this.colorRectDrawer = new ColorRectDrawer(gl);
        this.lineDrawer = new LineDrawer(gl);
        //this.modelDrawer = new ModelDrawer(gl);
        this.multBlendDrawer = new MultBlendDrawer(gl);

        this.frameBuffer = new FrameBuffer(gl,this.game.width,this.game.height);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        // gl.depthFunc(gl.LEQUAL);
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

        let texInfo:Array<TextureInfo> = [{texture:texToDraw,name:'texture'}];
        if (renderable.spriteSheet.normalMapPath) {
            texInfo.push({
                texture:this.renderableCache[renderable.spriteSheet.normalMapPath],
                name: 'normalTexture'
            });
        }
        this.drawTextureInfo(
            texInfo,
            renderable.getFrameRect(),
            new Point2d(0,0)
        );
        this.restore();
    }

    drawImage(texturePath:string,
              srcRect:Rect,
              dstPoint:Point2d){

        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        let texture = this.renderableCache[texturePath];
        if (DEBUG && !texture) {
            if (!texturePath) throw `no texture path provided`;
            else throw `can not find texture with path ${texturePath}`;
        }
        let texInfo:Array<TextureInfo> = [{texture,name:'texture'}];
        this.drawTextureInfo(texInfo,srcRect, dstPoint);
    }

    private drawTextureInfo(texInfo:Array<TextureInfo>,
                            srcRect:Rect,
                            dstPoint:Point2d){

        let camRectScaled:Rect = this.game.camera.getRectScaled();
        if (!matEx.overlapTest(
            camRectScaled,
            Rect.fromPool().set(camRectScaled.x+srcRect.x,camRectScaled.y+srcRect.y,srcRect.width,srcRect.height))
        ) return;

        let texWidth = texInfo[0].texture.getSize().width;
        let texHeight = texInfo[0].texture.getSize().height;

        let scene = this.game.getCurrScene();

        if (srcRect.width===120 || srcRect.width===174) {

            let uniforms = {
                u_textureMatrix: makeTextureMatrix(srcRect,texWidth,texHeight),
                u_vertexMatrix: makePositionMatrix(dstPoint.x,dstPoint.y,srcRect.width,srcRect.height, this.game.width,this.game.height),
                u_alpha: 1
            };
            this.multBlendDrawer.draw(texInfo,this.frameBuffer,uniforms);
        }
        else {
            let uniforms = {
                u_textureMatrix: makeTextureMatrix(srcRect,texWidth,texHeight),
                u_vertexMatrix: makePositionMatrix(dstPoint.x,dstPoint.y,srcRect.width,srcRect.height, this.game.width,this.game.height),
                u_alpha: 1,
                u_useNormalMap: texInfo.length>1
            };
            scene.ambientLight.setUniforms(uniforms);
            this.game.lightArray.setUniforms(uniforms);
            new OpticMaterial().setUniforms(uniforms);
            //if (1) throw uniforms;
            this.spriteRectLightDrawer.draw(texInfo,uniforms);
        }
    }

    drawTiledImage(texturePath:string,
                   srcRect:Rect,
                   dstRect:Rect,
                   offset:Point2d){

        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        let texture:Texture = this.renderableCache[texturePath];
        if (DEBUG && !texture) {
            if (!texturePath) throw `no texture path provided`;
            else throw `can not find texture with path ${texturePath}`;
        }
        let texWidth = texture.getSize().width;
        let texHeight = texture.getSize().height;

        let uniforms:any = {
            u_textureMatrix: makeTextureMatrix(
                Rect.fromPool().set(0,0,dstRect.width, dstRect.height),
                texWidth,texHeight
            ),
            u_vertexMatrix: makePositionMatrix(
                dstRect.x,dstRect.y,dstRect.width, dstRect.height,
                this.game.width,this.game.height
            ),
            u_frameCoords: [srcRect.x/texWidth,srcRect.y/texHeight,srcRect.width/texWidth,srcRect.height/texHeight],
            u_offsetCoords:[offset.x/srcRect.width,offset.y/srcRect.height],
            u_alpha: 1
        };
        let texInfo:Array<TextureInfo> = [{texture,name:'texture'}];
        this.tiledSpriteRectDrawer.draw(texInfo,uniforms);

    }

    fillRect(rect:Rect, color:Color){

        if (!matEx.overlapTest(this.game.camera.getRectScaled(),rect)) return;
        let uniforms = {
            u_vertexMatrix: makePositionMatrix(
                rect.x,rect.y,rect.width,rect.height,
                this.game.width,this.game.height),
            u_rgba: color.asGL()
        };
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.colorRectDrawer.draw(null,uniforms);
    }

    drawRect(rect:Rect,color:Color){
        let r:Rect = Rect.fromPool();
        let [x,y,w,h] = [r.x,r.y,r.width,r.height];
        this.fillRect(r.set(x, y, w, 1), color);
        this.fillRect(r.set(x, y + h, w, 1), color);
        this.fillRect(r.set(x, y, 1, h), color);
        this.fillRect(r.set(x + w, y, 1, h), color);
    }

    drawLine(x1:number,y1:number,x2:number,y2:number,color:Color){

        let dx = x2-x1,dy = y2-y1;
        //if (!matEx.overlapTest(this.game.camera.getRectScaled(),new Rect(x1,y1,dx,dy))) return;
        let uniforms:any = {};
        uniforms.u_vertexMatrix = makePositionMatrix(
            x1,y1,dx,dy,
            this.game.width,this.game.height
        );
        uniforms.u_rgba = color.asGL();
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.lineDrawer.draw(null,uniforms);
    }

    fillCircle(x:number,y:number,r:number,color:Color){
        let r2 = r*2;
        if (!matEx.overlapTest(this.game.camera.getRectScaled(),Rect.fromPool().set(x-r,y-r,r2,r2))) return;
        let uniforms:any = {};
        uniforms.u_vertexMatrix = makePositionMatrix(
            x-r,y-r,r2,r2,
            this.game.width,this.game.height
        );
        uniforms.u_rgba = color.asGL();
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
        //this.gl.clearDepth(1.);
    }

    clearColor(color:Color){
        let arr:Array<number> = color.asGL();
        this.gl.clearColor(arr[0],arr[1],arr[2],arr[3]);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }

    beginFrameBuffer(){
        this.save();
        this.frameBuffer.bind();
    }


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
                Rect.fromPool().set(0,0,fullScreen.w,fullScreen.h),
                fullScreen.w,fullScreen.h
            ),
            u_alpha: 1
        };
        let texInfo:Array<TextureInfo> = [{texture:texToDraw,name:'texture'}]; // todo now to make this array reusable?
        this.spriteRectDrawer.draw(texInfo,uniforms);
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

    loadTextureInfo(resourcePath:string,onLoad:()=>void){
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

    destroy(){
        super.destroy();
        this.frameBuffer.destroy();
        AbstractDrawer.destroyAll();
        Object.keys(this.renderableCache).forEach(key=>{
            let t:Texture = this.renderableCache[key] as Texture;
            t.destroy();
        });
    }

}
