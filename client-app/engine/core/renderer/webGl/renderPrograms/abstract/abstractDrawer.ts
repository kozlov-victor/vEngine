import AbstractPrimitive from "../../primitives/abstractPrimitive";

declare const DEBUG:boolean;

import ShaderProgram from "../../base/shaderProgram";
import Texture from "../../base/texture";
import BufferInfo from "../../base/bufferInfo";
import FrameBuffer from "../../base/frameBuffer";
import {IDrawer} from "../interface/iDrawer";
import {UniformsInfo} from "../interface/uniformsInfo";


let isEqual = (a,b):boolean=>{
    if (a===undefined) return false;
    if (a.splice) return false; // skip array checking for now
    return a===b;
};

export interface TextureInfo {
    texture:Texture,
    name:string
}

export default abstract class AbstractDrawer implements IDrawer{

    static currentInstance:AbstractDrawer = null;

    protected gl:WebGLRenderingContext;
    protected program:ShaderProgram = null;
    protected uniformCache:any = {};
    protected primitive:AbstractPrimitive;

    protected bufferInfo:BufferInfo;

    private static instances:Array<AbstractDrawer> = [];

    constructor(gl:WebGLRenderingContext){
        this.gl = gl;
        AbstractDrawer.instances.push(this);
    }

    bind(){
        if (
            AbstractDrawer.currentInstance!==null &&
            AbstractDrawer.currentInstance!==this)
        {
            AbstractDrawer.currentInstance.unbind();
        }
        AbstractDrawer.currentInstance = this;
        this.bufferInfo.bind(this.program);
    }

    unbind(){
        this.bufferInfo.unbind();
    }

    destroy(){
        this.bufferInfo.destroy();
        this.program.destroy();
    }
    static destroyAll(){
        AbstractDrawer.instances.forEach((it:AbstractDrawer)=>{
            it.destroy();
        });
    }

    setUniform(name:string,value:any){
        if (isEqual(this.uniformCache[name],value)) return;
        this.program.setUniform(name,value);
        this.uniformCache[name]=value;
    }

    drawElements(){
        this.bufferInfo.draw();
    }

    draw(textureInfos:Array<TextureInfo>,uniforms:UniformsInfo,unused:FrameBuffer|null){
        this.bind();
        Object.keys(uniforms).forEach(name=>this.setUniform(name,uniforms[name]));
        if (textureInfos) {
            textureInfos.forEach((t,i)=>{
                t.texture.bind(t.name,i,this.program);
            });
        }
        this.drawElements();
    }

}