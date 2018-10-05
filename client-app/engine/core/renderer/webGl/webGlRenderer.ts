

import {DebugError} from "../../../debugError";
import {SpriteRectLightDrawer} from "./renderPrograms/impl/base/spriteRectLightDrawer";
import {SpriteRectDrawer} from "./renderPrograms/impl/base/spriteRectDrawer";
import {TiledSpriteRectDrawer} from "./renderPrograms/impl/base/tiledSpriteRectDrawer";
import {AbstractDrawer, TextureInfo} from "./renderPrograms/abstract/abstractDrawer";
import {LineDrawer} from "./renderPrograms/impl/base/lineDrawer";
import {ShapeDrawer} from "./renderPrograms/impl/base/shapeDrawer";
import {FrameBuffer} from "./base/frameBuffer";
import {MatrixStack} from "./base/matrixStack";
import * as mat4 from "../../geometry/mat4";
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
import { ModelDrawer } from './renderPrograms/impl/base/modelDrawer';
import {GameObject3d} from "../../../model/impl/gameObject3d";
import {Ellipse} from "../../../model/impl/ui/drawable/ellipse";
import {Rectangle} from "../../../model/impl/ui/drawable/rectangle";
import {Image} from "../../../model/impl/ui/drawable/image";
import {SHAPE_TYPE, FILL_TYPE} from "./renderPrograms/impl/base/shapeDrawer.frag";

declare const IN_EDITOR:boolean,DEBUG:boolean;



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
    private shapeDrawer:ShapeDrawer;
    private spriteRectDrawer:SpriteRectDrawer;
    private spriteRectLightDrawer:SpriteRectLightDrawer;
    private tiledSpriteRectDrawer:TiledSpriteRectDrawer;
    private modelDrawer:ModelDrawer;
    private lineDrawer:LineDrawer;
    private addBlendDrawer:AddBlendDrawer;
    private frameBuffer:FrameBuffer;
    private nullTexture:Texture;

    constructor(game:Game){
        super(game);
        this.matrixStack = matrixStack;
        this.registerResize();
        this._init();
    }

    private _init(){
    	let gl = getCtx(this.container);
    	this.gl = gl;

    	this.nullTexture = new Texture(gl);

        this.shapeDrawer = new ShapeDrawer(gl);
        this.spriteRectDrawer = new SpriteRectDrawer(gl);
        this.spriteRectLightDrawer = new SpriteRectLightDrawer(gl);
        this.tiledSpriteRectDrawer = new TiledSpriteRectDrawer(gl);
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
            acceptLight:renderable.acceptLight,
            alpha: renderable.alpha
        };
        this.drawTextureInfo(
            texInfo,
            drawableInfo,
            renderable.shaderMaterial,
            renderable.getFrameRect(),
            Rect.fromPool().setXYWH(0,0,renderable.getFrameRect().width,renderable.getFrameRect().height)
        );
    }


    drawImage(img:Image){
        let texturePath = img.getDefaultResourcePath();
        if (DEBUG && !this.renderableCache[texturePath]) {
            throw new DebugError(`can not find texture with path ${texturePath}`);
        }
        let texture:Texture = this.renderableCache[texturePath].texture;
        texture = texture.applyFilters(img.filters,this.frameBuffer);
        let texInfo:TextureInfo[] = [{texture,name:'texture'}];
        //this.game.debug2(img);
        //let texInfo:TextureInfo[] = [{texture:this.nullTexture,name:'texture'}];
        //this.drawTextureInfo(texInfo,img.getDrawableInfo(),ShaderMaterial.DEFAULT,img.srcRect, img.getRect());

        let rw:number = img.getRect().width;
        let rh:number = img.getRect().height;
        let maxSize:number = Math.max(rw,rh);
        let offsetX:number = 0,offsetY:number = 0;
        let uniforms = {};
        if (maxSize==rw) {
            uniforms['u_width'] = 1;
            uniforms['u_height'] = rh/rw;
            offsetY = (maxSize - rh)/2;
            uniforms['u_rectOffsetLeft'] = 0;
            uniforms['u_rectOffsetTop'] = offsetY/maxSize;
        } else {
            uniforms['u_height'] = 1;
            uniforms['u_width'] = rw/rh;
            offsetX = (maxSize - rw)/2;
            uniforms['u_rectOffsetLeft'] = offsetX/maxSize;
            uniforms['u_rectOffsetTop'] = 0;
        }
        uniforms['u_vertexMatrix'] = makePositionMatrix(
            Rect.fromPool().setXYWH( -offsetX, -offsetY,maxSize,maxSize),
            Size.fromPool().setWH(this.game.width,this.game.height));
        uniforms['u_lineWidth'] = Math.min(img.lineWidth/maxSize,1);
        uniforms['u_borderRadius'] = Math.min(img.borderRadius/maxSize,1);
        uniforms['u_color'] = img.color.asGL();
        uniforms['u_fillColor'] = img.fillColor.asGL();
        uniforms['u_shapeType'] = SHAPE_TYPE.RECT;
        uniforms['u_fillType'] = FILL_TYPE.TEXTURE;

        uniforms['u_texRect'] =
            [
                img.srcRect.x/texture.getSize().width,
                img.srcRect.y/texture.getSize().height,
                img.srcRect.width/texture.getSize().width,
                img.srcRect.height/texture.getSize().height
            ];


        this.shapeDrawer.draw(texInfo,uniforms,null);
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

        let scene = this.game.getCurrScene();

        let drawer:IDrawer;
        let uniforms:UniformsInfo = {
            u_textureMatrix: makeTextureMatrix(srcRect,texInfo[0].texture.getSize()),
            u_vertexMatrix: makePositionMatrix(dstRect, Size.fromPool().setWH(this.game.width,this.game.height)), // todo
            u_alpha: drawableInfo.alpha
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
        drawer.draw(texInfo,uniforms,this.frameBuffer); // todo remove uniforms variable
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

    drawRectangle(rectangle:Rectangle){
        let rw:number = rectangle.width;
        let rh:number = rectangle.height;
        let maxSize:number = Math.max(rw,rh);
        let offsetX:number = 0,offsetY:number = 0;
        let uniforms = {};
        if (maxSize==rw) {
            uniforms['u_width'] = 1;
            uniforms['u_height'] = rh/rw;
            offsetY = (maxSize - rh)/2;
        } else {
            uniforms['u_height'] = 1;
            uniforms['u_width'] = rw/rh;
            offsetX = (maxSize - rw)/2;
        }
        uniforms['u_vertexMatrix'] = makePositionMatrix(
            Rect.fromPool().setXYWH( -offsetX, -offsetY,maxSize,maxSize),
            Size.fromPool().setWH(this.game.width,this.game.height));
        uniforms['u_lineWidth'] = Math.min(rectangle.lineWidth/maxSize,1);
        uniforms['u_borderRadius'] = Math.min(rectangle.borderRadius/maxSize,1);
        uniforms['u_color'] = rectangle.color.asGL();
        uniforms['u_fillColor'] = rectangle.fillColor.asGL();
        uniforms['u_shapeType'] = SHAPE_TYPE.RECT;
        uniforms['u_fillType'] = FILL_TYPE.COLOR;
        let texInfo:TextureInfo[] = [{texture:this.nullTexture,name:'texture'}];
        this.shapeDrawer.draw(texInfo,uniforms,null);
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


    drawEllipse(ellipse:Ellipse){
        let maxR = Math.max(ellipse.radiusX,ellipse.radiusY);
        let maxR2 = maxR*2;

        let uniforms:UniformsInfo = {} as UniformsInfo;
        uniforms['u_vertexMatrix'] = makePositionMatrix(
            Rect.fromPool().setXYWH(ellipse.pos.x,ellipse.pos.y,maxR2,maxR2),
            Size.fromPool().setWH(this.game.width,this.game.height)
        );
        uniforms['u_lineWidth'] = Math.min(ellipse.lineWidth/maxR,1);
        if (maxR==ellipse.radiusX) {
            uniforms['u_rx'] = 0.5;
            uniforms['u_ry'] = ellipse.radiusY/ellipse.radiusX*0.5;
        } else {
            uniforms['u_ry'] = 0.5;
            uniforms['u_rx'] = ellipse.radiusX/ellipse.radiusY*0.5;
        }
        uniforms['u_color'] = ellipse.color.asGL();
        uniforms['u_fillColor'] = ellipse.fillColor.asGL();
        uniforms['u_shapeType'] = SHAPE_TYPE.ELLIPSE;
        uniforms['u_fillType'] = FILL_TYPE.COLOR;
        let texInfo:TextureInfo[] = [{texture:this.nullTexture,name:'texture'}];
        this.shapeDrawer.draw(texInfo,uniforms,null);
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
        let arr:number[] = color.asGL();
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
        if (this.renderableCache[resourcePath]) {
            onLoad();
            return;
        }
        let img:HTMLImageElement = new (window as any).Image() as HTMLImageElement;
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
