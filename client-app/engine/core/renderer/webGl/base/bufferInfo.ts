/*global DEBUG:true*/

import VertexBuffer from "./vertexBuffer";
import IndexBuffer from "./indexBuffer";

declare const DEBUG:boolean;

export class ArrayInfo {

    array = null;
    type = null;
    size = 0;
    attrName = null;

    constructor({array,type,size,attrName}){
        this.array = array;
        this.type = type;
        this.size = size;
        this.attrName = attrName;
    }

}

interface BufferDescription {
    posVertexInfo, // todo strong interface
    posIndexInfo?,
    texVertexInfo?,
    drawMethod
}

export default class BufferInfo {

    gl;

    posVertexBuffer = null;
    posIndexBuffer = null;
    texVertexBuffer = null;
    drawMethod = null;
    numOfElementsToDraw = 0;

    constructor(gl,description:BufferDescription){
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

    bind(program){
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

    _getNumOfElementsToDraw(drawMethod){
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