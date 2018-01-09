
import {DEBUG} from "../../../../declarations";

export default class IndexBuffer {

    private gl:WebGLRenderingContext;
    private buffer:WebGLRenderbuffer;
    private dataLength:number;
    
    constructor(gl:WebGLRenderingContext){
        if (DEBUG && !gl) throw "can not create IndexBuffer, gl context not passed to constructor, expected: IndexBuffer(gl)";

        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (DEBUG && !this.buffer) throw `can not allocate memory for index buffer`;
        this.dataLength = null;
    }

    setData(bufferData:Array<number>){
        if (DEBUG) {
            if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
        }

        const gl = this.gl;

        this.dataLength = bufferData.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }

    getGlBuffer():WebGLRenderbuffer{
        return this.buffer;
    }

    bind(){
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    }

    unbind(){
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    }

    getBufferLength():number{
        return this.dataLength;
    }

}
