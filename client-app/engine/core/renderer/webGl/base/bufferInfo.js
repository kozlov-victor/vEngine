
import VertexBuffer from "./vertexBuffer";
import IndexBuffer from "./indexBuffer";

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

export default class BufferInfo {

    gl;

    posVertexBuffer = null;
    posIndexBuffer = null;
    texVertexBuffer = null;
    drawMethod = null;

    constructor(gl,{posVertexInfo = null,posIndexInfo = null,texVertexInfo = null,drawMethod}){
        // todo array info validation
        this.gl = gl;
        this.drawMethod = drawMethod;
        if (posVertexInfo) {
            this.posVertexBuffer = new VertexBuffer(gl);
            this.posVertexBuffer.setData(posVertexInfo.array,posVertexInfo.type,posVertexInfo.size);
            this.posVertexBuffer.setAttrName(posVertexInfo.attrName);
        }
        if (posIndexInfo) {
            this.posIndexBuffer = new IndexBuffer(gl);
            this.posIndexBuffer.setData(posIndexInfo.array);
        }
        if (texVertexInfo) {
            this.texVertexBuffer = new VertexBuffer(gl);
            this.texVertexBuffer.setData(texVertexInfo.array,texVertexInfo.type,texVertexInfo.size);
            this.texVertexBuffer.setAttrName(texVertexInfo.attrName);
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

    _getBufferLength(drawMethod){
        switch (drawMethod) {
            case this.gl.LINE_STRIP:
            case this.gl.TRIANGLE_FAN:
                return this.posVertexBuffer.getBufferLength() / 2;
                break;
            default:
                throw `unknown draw method`;
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
                this._getBufferLength(this.drawMethod) // todo precalculate
            );
        }
    }


}