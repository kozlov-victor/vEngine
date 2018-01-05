/*global DEBUG:true*/

import FrameBuffer from "./frameBuffer";

const isPowerOf2 = function(value) {
    return (value & (value - 1)) === 0;
};

// array of two frameBuffer for filters to apply
class TextureFilterBuffer {

    gl = null;
    parent = null;
    buffers = null; // lazy initialized

    constructor(parent){
        this.parent = parent;
    }

    instantiate(gl){
        this.gl = gl;
        this.buffers = [];
        const buffSize = 2;
        for (let i=0;i<buffSize;i++){
            this.buffers.push(new FrameBuffer(gl,this.parent.size.width,this.parent.size.height));
        }
    }

    flip(){
        let tmp = this.buffers[0];
        this.buffers[0] = this.buffers[1];
        this.buffers[1] = tmp;
    }

    getSourceBuffer(){
        return this.buffers[0];
    }

    getDestBuffer(){
        return this.buffers[1];
    }

}

export default class Texture {

    gl;
    tex = null;
    size = null;
    isPowerOfTwo = false;
    _texFilterBuff = null;

    static currInstances = {};

    constructor(gl){
        if (DEBUG && !gl) throw "can not create Texture, gl context not passed to constructor, expected: Texture(gl)";
        this.gl = gl;

        this.tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        // Fill the texture with a 1x1 blue pixel.
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 255, 255]));
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        this._texFilterBuff = new TextureFilterBuffer(this);
    }


    // gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true); for bitmap textures
    // gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    /**
     * @param img - if image is null, width and height must be specified
     * @param width -unused if image specified
     * @param height -unused if image specified
     */
    setImage(img,width,height){
        if (DEBUG) {
            if (!(img || width || height)) throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
        }

        const gl = this.gl;
        if (img) this.size = {width:img.width,height:img.height};
        else this.size = {width,height};
        this.bind();
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        this.isPowerOfTwo = img && isPowerOf2(img.width) && isPowerOf2(img.height);
        // Check if the image is a power of 2 in both dimensions.
        if (this.isPowerOfTwo) {
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); // NEAREST,LINEAR
        }
        gl.bindTexture(gl.TEXTURE_2D, null);

    }

    applyFilters(filters){
        let len = filters.length;
        if (len===0) return this;
        if (this._texFilterBuff.buffers===null)
            this._texFilterBuff.instantiate(this.gl);
        let filter = filters[0];
        filter.doFilter(this,this._texFilterBuff.getDestBuffer());
        for (let i=1;i<len;i++){
            this._texFilterBuff.flip();
            filters[i].doFilter(
                this._texFilterBuff.getSourceBuffer().texture,
                this._texFilterBuff.getDestBuffer()
            );
        }
        this._texFilterBuff.flip();
        return this._texFilterBuff.getSourceBuffer().texture;
    }

    bind(i = 0) { // uniform eq to 0 by default
        // to define max texture units supported gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        if (Texture.currInstances[i]===this) return;
        //gl.activeTexture(gl.TEXTURE0+i);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex);
        // gl.uniform1i(uLoc, i);
        Texture.currInstances[i] = this;
    }

    unbind(i) {
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    }

    getSize (){
        return this.size;
    }

    getGlTexture() {
        return this.tex;
    }

}


