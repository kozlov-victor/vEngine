declare const DEBUG:boolean;

import ShaderProgram from "../../base/shaderProgram";
import Texture from "../../base/texture";
import BufferInfo from "../../base/bufferInfo";


let isEqual = (a,b):boolean=>{
    if (a===undefined) return false;
    if (a.splice) return false; // skip array checking for now
    return a===b;
};

export default abstract class AbstractDrawer {

    static currentInstance:AbstractDrawer = null;

    gl:WebGLRenderingContext;
    program:ShaderProgram = null;
    uniformCache:any = {};

    bufferInfo:BufferInfo;

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

    draw(texture:Texture,uniforms){
        if (texture!==null) texture.bind();
        this.bind();
        Object.keys(uniforms).forEach(name=>this.setUniform(name,uniforms[name]));
        this.drawElements();
    }

}