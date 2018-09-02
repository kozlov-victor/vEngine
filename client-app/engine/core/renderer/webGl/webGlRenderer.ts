import {DebugError} from "../../../debugError";


declare const IN_EDITOR:boolean,DEBUG:boolean;

import {SpriteRectLightDrawer} from "./renderPrograms/impl/base/spriteRectLightDrawer";
import {SpriteRectDrawer} from "./renderPrograms/impl/base/spriteRectDrawer";
import {TiledSpriteRectDrawer} from "./renderPrograms/impl/base/tiledSpriteRectDrawer";
import {ColorRectDrawer} from "./renderPrograms/impl/base/colorRectDrawer";
import {AbstractDrawer, TextureInfo} from "./renderPrograms/abstract/abstractDrawer";
import {LineDrawer} from "./renderPrograms/impl/base/lineDrawer";
import {CircleDrawer} from "./renderPrograms/impl/base/circleDrawer";
import {FrameBuffer} from "./base/frameBuffer";
import {MatrixStack} from "./base/matrixStack";
import * as mat4 from "../../geometry/mat4";
import * as matEx from "../../mathEx";
import {Texture} from "./base/texture";
import {AddBlendDrawer} from "./renderPrograms/impl/blend/addBlendDrawer";
import {Rect} from "../../geometry/rect";
import {Game} from "../../game";
import {GameObjectProto} from "../../../model/impl/gameObjectProto";
import {Point2d} from "../../geometry/point2d";
import {AbstractCanvasRenderer} from "../abstract/abstractCanvasRenderer";
import {Color} from "../../color";
import {ShaderMaterial} from "../../light/shaderMaterial";
import {DrawableInfo} from "./renderPrograms/interface/drawableInfo";
import {IDrawer} from "./renderPrograms/interface/iDrawer";
import {UniformsInfo} from "./renderPrograms/interface/uniformsInfo";
import {Size} from "../../geometry/size";
import {AbstractFilter} from "./filters/abstract/abstractFilter";
import { ModelDrawer } from './renderPrograms/impl/base/modelDrawer';
import {GameObject3d} from "../../../model/impl/gameObject3d";

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

const makePositionMatrix = function(rect:Rect,viewSize:Size){
    // proj * modelView
    let zToWMatrix = mat4.makeZToWMatrix(1);
    let projectionMatrix = mat4.ortho(0,viewSize.width,0,viewSize.height,-SCENE_DEPTH,SCENE_DEPTH);
    let scaleMatrix = mat4.makeScale(rect.width, rect.height, 1);
    let translationMatrix = mat4.makeTranslation(rect.x, rect.y, 0);

    let matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
    matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
    matrix = mat4.matrixMultiply(matrix, projectionMatrix);
    matrix = mat4.matrixMultiply(matrix, zToWMatrix);
    return matrix;
};

const makeTextureMatrix = function(srcRect:Rect,texSize:Size){

    let texScaleMatrix = mat4.makeScale(srcRect.width / texSize.width, srcRect.height / texSize.height, 1);
    let texTranslationMatrix = mat4.makeTranslation(srcRect.x / texSize.width, srcRect.y / texSize.height, 0);
    return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
};

const FRAME_TO_SCREEN_MATRIX =
    new MatrixStack().
        scale(1,-1,1).
        translate(-1,-1,0).
        scale(2,2,1).
        getCurrentMatrix();

//  gl.enable(gl.CULL_FACE);
//  gl.enable(gl.DEPTH_TEST);
export class WebGlRenderer extends AbstractCanvasRenderer {

    private gl:WebGLRenderingContext;
    private matrixStack:MatrixStack;
    private circleDrawer:CircleDrawer;
    private spriteRectDrawer:SpriteRectDrawer;
    private spriteRectLightDrawer:SpriteRectLightDrawer;
    private tiledSpriteRectDrawer:TiledSpriteRectDrawer;
    private colorRectDrawer:ColorRectDrawer;
    private modelDrawer:ModelDrawer;
    private lineDrawer:LineDrawer;
    private addBlendDrawer:AddBlendDrawer;
    private frameBuffer:FrameBuffer;

    constructor(game:Game){
        super(game);
        this.matrixStack = matrixStack;
        this.registerResize();
        this._init();
    }

    private _init(){
    	let gl = getCtx(this.container);
    	this.gl = gl;

        this.circleDrawer = new CircleDrawer(gl);
        this.spriteRectDrawer = new SpriteRectDrawer(gl);
        this.spriteRectLightDrawer = new SpriteRectLightDrawer(gl);
        this.tiledSpriteRectDrawer = new TiledSpriteRectDrawer(gl);
        this.colorRectDrawer = new ColorRectDrawer(gl);
        this.lineDrawer = new LineDrawer(gl);
        this.modelDrawer = new ModelDrawer(gl);
        this.addBlendDrawer = new AddBlendDrawer(gl);

        this.frameBuffer = new FrameBuffer(gl,this.game.width,this.game.height);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        // gl.depthFunc(gl.LEQUAL);
    }

    draw(renderable:GameObjectProto){

        let texToDraw:Texture = this.renderableCache[renderable.spriteSheet.getDefaultResourcePath()].texture;
        texToDraw = texToDraw.applyFilters(renderable.filters,this.frameBuffer);


        let texInfo:TextureInfo[] = [{texture:texToDraw,name:'texture'}];
        if (renderable.spriteSheet.hasResourceWithName('normalMap')) {
            texInfo.push({
                texture:this.renderableCache[renderable.spriteSheet.getResourcePathByName('normalMap')].texture,
                name: 'normalTexture'
            });
        }
        let drawableInfo:DrawableInfo = { // todo move to renderable
            blendMode:renderable.blendMode,
            acceptLight:renderable.acceptLight
        };
        this.drawTextureInfo(
            texInfo,
            drawableInfo,
            renderable.shaderMaterial,
            renderable.getFrameRect(),
            Rect.fromPool().setXYWH(0,0,renderable.getFrameRect().width,renderable.getFrameRect().height)
        );
    }


    drawImage(texturePath:string,
              srcRect:Rect,
              dstRect:Rect){

        let texture:Texture = this.renderableCache[texturePath].texture;
        if (DEBUG && !texture) {
            if (!texturePath) throw new DebugError(`no texture path provided`);
            else throw new DebugError(`can not find texture with path ${texturePath}`);
        }
        let texInfo:TextureInfo[] = [{texture,name:'texture'}];
        let drawableInfo:DrawableInfo = {blendMode:'normal',acceptLight:false};
        this.drawTextureInfo(texInfo,drawableInfo,ShaderMaterial.DEFAULT,srcRect, dstRect);
    }


    drawImageEx(texturePath:string,
                srcRect:Rect,
                dstRect:Rect,
                filters:AbstractFilter[],
                drawableInfo:DrawableInfo,
    ){
        //if (!matEx.overlapTest(this.game.camera.getRectScaled(),dstRect)) return;
        let texture:Texture = this.renderableCache[texturePath].texture;
        texture = texture.applyFilters(filters,this.frameBuffer);
        if (DEBUG && !texture) {
            if (!texturePath) throw new DebugError(`no texture path provided`);
            else throw new DebugError(`can not find texture with path ${texturePath}`);
        }
        let texInfo:TextureInfo[] = [{texture,name:'texture'}];
        this.drawTextureInfo(texInfo,drawableInfo,ShaderMaterial.DEFAULT,srcRect, dstRect);
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
        this.drawImageEx(texturePath,r,rDst,filters,drawableInfo);
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

    drawModel(g3d:GameObject3d){
        this.modelDrawer.bindModel(g3d);
        this.modelDrawer.bind();

        matrixStack.scale(1,-1,1);
        let matrix1 = matrixStack.getCurrentMatrix();

        let zToWMatrix = mat4.makeZToWMatrix(1);
        let projectionMatrix = mat4.ortho(0,this.game.width,0,this.game.height,-SCENE_DEPTH,SCENE_DEPTH);
        let matrix2 = mat4.matrixMultiply(projectionMatrix, zToWMatrix);

        let uniforms:UniformsInfo = {
            u_modelMatrix: matrix1,
            u_projectionMatrix: matrix2,
            u_alpha: 1
        };
        let texInfo:TextureInfo[] = [{texture:g3d.texture,name:'u_texture'}];

        this.gl.enable(this.gl.DEPTH_TEST);
        this.modelDrawer.draw(texInfo,uniforms);
        this.modelDrawer.unbind();
        this.gl.disable(this.gl.DEPTH_TEST);
    };


    private drawTextureInfo(texInfo:TextureInfo[],
                            drawableInfo:DrawableInfo,
                            shaderMaterial:ShaderMaterial,
                            srcRect:Rect,
                            dstRect:Rect){

        //let camRectScaled:Rect = this.game.camera.getRectScaled();
        // if (!matEx.overlapTest(
        //     camRectScaled,
        //     dstRect)
        // ) return;

        let scene = this.game.getCurrScene();

        let drawer:IDrawer;
        let uniforms:UniformsInfo = {
            u_textureMatrix: makeTextureMatrix(srcRect,texInfo[0].texture.getSize()),
            u_vertexMatrix: makePositionMatrix(dstRect, Size.fromPool().setWH(this.game.width,this.game.height)), // todo
            u_alpha: 1
        };

        if (drawableInfo.blendMode==='add') drawer = this.addBlendDrawer; // todo extract to separate class method
        else if (drawableInfo.acceptLight || texInfo.length>1) { // todo
            drawer = this.spriteRectLightDrawer;
            uniforms['u_useNormalMap'] = texInfo.length>1;
            scene.ambientLight.setUniforms(uniforms);
            this.game.lightArray.setUniforms(uniforms);
            shaderMaterial.setUniforms(uniforms);
        } else {
            drawer = this.spriteRectDrawer;
        }
        drawer.draw(texInfo,uniforms,this.frameBuffer);
    }

    drawTiledImage(texturePath:string,
                   srcRect:Rect,
                   dstRect:Rect,
                   offset:Point2d){

        let texture:Texture = this.renderableCache[texturePath].texture;
        if (DEBUG && !texture) {
            if (!texturePath) throw new DebugError(`no texture path provided`);
            else throw new DebugError(`can not find texture with path ${texturePath}`);
        }

        let uniforms:UniformsInfo = {
            u_textureMatrix: makeTextureMatrix(
                Rect.fromPool().setXYWH(0,0,dstRect.width, dstRect.height),
                texture.getSize()
            ),
            u_vertexMatrix: makePositionMatrix(
                dstRect,
                Size.fromPool().setWH(this.game.width,this.game.height)
            ),
            u_frameCoords: [
                srcRect.x/texture.size.width,
                srcRect.y/texture.size.height,
                srcRect.width/texture.size.width,
                srcRect.height/texture.size.height],
            u_offsetCoords:[offset.x/srcRect.width,offset.y/srcRect.height],
            u_alpha: 1
        };
        let texInfo:TextureInfo[] = [{texture,name:'texture'}];
        this.tiledSpriteRectDrawer.draw(texInfo,uniforms,null);

    }

    fillRect(rect:Rect, color:Color){

        //if (!matEx.overlapTest(this.game.camera.getRectScaled(),rect)) return;
        let uniforms = {
            u_vertexMatrix: makePositionMatrix(
                rect,
                Size.fromPool().setWH(this.game.width,this.game.height)),
            u_rgba: color.asGL()
        };
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.colorRectDrawer.draw(null,uniforms,null);
    }

    drawRect(rect:Rect,color:Color,lineWidth:number){
        let r:Rect = Rect.fromPool();
        let [x,y,w,h] = [rect.x,rect.y,rect.width,rect.height];
        this.fillRect(r.setXYWH(x, y, w, lineWidth), color);
        this.fillRect(r.setXYWH(x, y + h - lineWidth, w, lineWidth), color);
        this.fillRect(r.setXYWH(x , y, lineWidth, h - lineWidth), color);
        this.fillRect(r.setXYWH(x + w, y, lineWidth, h), color);
    }

    drawLine(x1:number,y1:number,x2:number,y2:number,color:Color){

        let dx = x2-x1,dy = y2-y1;
        let uniforms:any = {};
        uniforms.u_vertexMatrix = makePositionMatrix(
            Rect.fromPool().setXYWH(x1,y1,dx,dy),
            Size.fromPool().setWH(this.game.width,this.game.height)
        );
        uniforms.u_rgba = color.asGL();
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.lineDrawer.draw(null,uniforms,null);
    }

    fillCircle(x:number,y:number,r:number,color:Color){
        let r2 = r*2;
        //if (!matEx.overlapTest(this.game.camera.getRectScaled(),Rect.fromPool().setXYWH(x-r,y-r,r2,r2))) return;
        let uniforms:UniformsInfo = {} as UniformsInfo;
        uniforms['u_vertexMatrix'] = makePositionMatrix(
            new Rect(x-r,y-r,r2,r2),
            new Size(this.game.width,this.game.height) // tofo
        );
        uniforms['u_rgba'] = color.asGL();
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.circleDrawer.draw(null,uniforms,null);
    }

    setAlpha(a:number){
        if (DEBUG) throw new DebugError('not implemented');
    }

    save() {
        this.matrixStack.save();
    }

    scale(x:number,y:number) {
        this.matrixStack.scale(x,y);
    }

    resetTransform(){
        this.matrixStack.resetTransform();
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
        this.gl.enable(this.gl.SCISSOR_TEST);
        this.gl.scissor(rect.x,rect.y,rect.width,rect.height);
    }

    unlockRect(){
        this.gl.disable(this.gl.SCISSOR_TEST);
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
        this.translate(0,this.game.height);
        this.scale(1,-1);

        let texToDraw = this.frameBuffer.getTexture().applyFilters(filters,null);
        this.frameBuffer.unbind();
        this.gl.viewport(0, 0, fullScreen.width,fullScreen.height);


        let uniforms:UniformsInfo = {
            u_vertexMatrix: FRAME_TO_SCREEN_MATRIX,
            u_textureMatrix: mat4.IDENTITY,
            u_alpha: 1
        };
        let texInfo:TextureInfo[] = [{texture:texToDraw,name:'texture'}]; // todo now to make this array reusable?
        this.spriteRectDrawer.draw(texInfo,uniforms,null);
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
        let resource = this.getResource(resourcePath);
        if (DEBUG && !resource) throw new DebugError(`can not find resource with path ${resourcePath}`);
        img.src = resource;
        img.onload = ()=>{
            let texture = new Texture(this.gl);
            texture.setImage(img);
            this.renderableCache[resourcePath] = {texture,size:texture.size,name:undefined};
            onLoad();
        };
        if (DEBUG) {
            img.onerror = ()=>{
                throw new DebugError(`Resource loading error: can not load resource "${resourcePath}"`);
            }
        }
    }

    destroy(){
        super.destroy();
        this.frameBuffer.destroy();
        AbstractDrawer.destroyAll();
        Object.keys(this.renderableCache).forEach((key:string)=>{
            let t:Texture = this.renderableCache[key].texture;
            t.destroy();
        });
    }

}
