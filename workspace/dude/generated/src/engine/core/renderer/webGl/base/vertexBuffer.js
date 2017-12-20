/*global DEBUG:true*/

export default class VertexBuffer {

    constructor(gl){
        if (DEBUG && !gl) throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        this.bufferItemSize = null;
        this.bufferItemType = null;
        this.dataLength = null;
    }

    setData(bufferData, itemType, itemSize){
        if (DEBUG) {
            if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
            if (!itemType) throw 'can not set data to buffer: itemType not specified';
            if (!itemSize) throw 'can not set data to buffer: itemSize not specified';
        }
        const gl = this.gl;

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW); // DYNAMIC
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this.bufferItemSize = itemSize;
        this.bufferItemType = itemType; // BYTE, FLOAT, INT, UNSIGNED_SHORT ...
        this.dataLength = bufferData.length;
    }

    bind(program,attrName){
        if (DEBUG && !program) throw "can not bind VertexBuffer, program not specified";
        if (DEBUG && !attrName) throw "can not bind VertexBuffer, attribute name not specified";
        program.bindBuffer(this,attrName);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.getGlBuffer());
    }

    unbind(){
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }

    getGlBuffer(){
        return this.buffer;
    }

    getItemSize(){
        return this.bufferItemSize;
    }

    getItemType(){
        return this.bufferItemType;
    }

    getBufferLength(){
        return this.dataLength;
    }

}