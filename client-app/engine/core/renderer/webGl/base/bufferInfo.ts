
import VertexBuffer from "./vertexBuffer";
import IndexBuffer from "./indexBuffer";
import {DEBUG} from "../../../../declarations";
import ShaderProgram from "./shaderProgram";

export interface ArrayInfo {
    array:Array<number>,
    type:number,
    size:number,
    attrName:string

}

export interface BufferInfoDescription {
    posVertexInfo:ArrayInfo,
    posIndexInfo?:ArrayInfo,
    texVertexInfo?:ArrayInfo,
    drawMethod:number
}

export default class BufferInfo {

    gl:WebGLRenderingContext;

    posVertexBuffer:VertexBuffer = null;
    posIndexBuffer:IndexBuffer = null;
    texVertexBuffer:VertexBuffer = null;
    drawMethod:number = null;
    numOfElementsToDraw:number = 0;

    constructor(gl:WebGLRenderingContext,description:BufferInfoDescription){
        this.gl = gl;

        if (this.drawMethod===undefined)
            throw `can not create BufferInfo: drawMethod not defined`;
        this.drawMethod = description.drawMethod;

        if (DEBUG && !description.posVertexInfo)
            throw `can not create BufferInfo: posVertexInfo is mandatory`;
        this.posVertexBuffer = new VertexBuffer(gl);
        this.posVertexBuffer.setData(
            description.posVertexInfo.array,
            description.posVertexInfo.type,
            description.posVertexInfo.size
        );
        this.posVertexBuffer.setAttrName(description.posVertexInfo.attrName);

        if (description.posIndexInfo) {
            this.posIndexBuffer = new IndexBuffer(gl);
            this.posIndexBuffer.setData(description.posIndexInfo.array);
        } else this.numOfElementsToDraw = this._getNumOfElementsToDraw(this.drawMethod);

        if (description.texVertexInfo) {
            this.texVertexBuffer = new VertexBuffer(gl);
            this.texVertexBuffer.setData(
                description.texVertexInfo.array,
                description.texVertexInfo.type,
                description.texVertexInfo.size);
            this.texVertexBuffer.setAttrName(description.texVertexInfo.attrName);
        }
    }

    bind(program:ShaderProgram){
        program.bind();
        if (this.posIndexBuffer) this.posIndexBuffer.bind();
        if (this.posVertexBuffer) this.posVertexBuffer.bind(program);
        if (this.texVertexBuffer) this.texVertexBuffer.bind(program);
    }

    unbind(){
        if (this.posIndexBuffer) this.posIndexBuffer.unbind();
        if (this.posVertexBuffer) this.posVertexBuffer.unbind();
        if (this.texVertexBuffer) this.texVertexBuffer.unbind();
    }

    _getNumOfElementsToDraw(drawMethod:number){
        switch (drawMethod) {
            case this.gl.LINE_STRIP:
            case this.gl.TRIANGLE_FAN:
                return this.posVertexBuffer.getBufferLength() / 2;
            default:
                throw `unknown draw method: ${drawMethod}`;
        }
    }

    draw(){
        if (this.posIndexBuffer!==null){
            this.gl.drawElements(
                this.drawMethod,
                this.posIndexBuffer.getBufferLength(),
                this.gl.UNSIGNED_SHORT,0
            );
        } else {
            this.gl.drawArrays(
                this.drawMethod,0,
                this.numOfElementsToDraw
            );
        }
    }


}