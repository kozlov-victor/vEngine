
declare const IN_EDITOR:boolean,DEBUG:boolean;

import ShaderProgram from "./shaderProgram";

export default class VertexBuffer {

    private gl:WebGLRenderingContext;
    private buffer:WebGLBuffer;
    private bufferItemSize:number = null;
    private bufferItemType:number = null;
    private dataLength:number = null;
    private attrName:string = null;

    constructor(gl:WebGLRenderingContext){
        if (DEBUG && !gl) throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (DEBUG && !this.buffer) throw `can not allocate memory for vertex buffer`;
        this.bufferItemSize = 0;
        this.bufferItemType = 0;
        this.dataLength = 0;
        this.attrName = null;
    }

    setData(bufferData:Array<number>, itemType:number, itemSize:number){
        if (DEBUG) {
            if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
            if (!itemType) throw 'can not set data to buffer: itemType not specified';
            if (!itemSize) throw 'can not set data to buffer: itemSize not specified';
        }
        const gl:WebGLRenderingContext = this.gl;

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        // gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(bufferSubData));
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW); // DYNAMIC_DRAW, STREAM_DRAW
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this.bufferItemSize = itemSize;
        this.bufferItemType = itemType; // BYTE, FLOAT, INT, UNSIGNED_SHORT ...
        this.dataLength = bufferData.length;
    }

    setAttrName(attrName:string){
        this.attrName = attrName;
    }

    bind(program:ShaderProgram){
        if (DEBUG && !program) throw "can not bind VertexBuffer, program not specified";
        if (DEBUG && !this.attrName) throw "can not bind VertexBuffer, attribute name not specified";
        program.bindBuffer(this,this.attrName);
    }

    unbind(){
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }

    destroy(){
        this.gl.deleteBuffer(this.buffer);
    }

    getGlBuffer():WebGLBuffer{
        return this.buffer;
    }

    getItemSize():number{
        return this.bufferItemSize;
    }

    getItemType():number{
        return this.bufferItemType;
    }

    getBufferLength():number{
        return this.dataLength;
    }

}
