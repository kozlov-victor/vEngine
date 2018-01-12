
import {Image} from "../../../../declarations";

declare const IN_EDITOR:boolean,DEBUG:boolean;

import FrameBuffer from "./frameBuffer";
import AbstractFilter from "../filters/abstract/abstractFilter";
import Rect from "../../../geometry/rect";
import Size from "../../../geometry/size";

const isPowerOf2 = function(value) {
    return (value & (value - 1)) === 0;
};

// array of two frameBuffer for filters to apply
class TextureFilterBuffer {

    gl:WebGLRenderingContext = null;
    buffers:Array<FrameBuffer> = null; // lazy initialized
    parent:Texture;

    constructor(parent:Texture){
        this.parent = parent;
    }

    instantiate(gl:WebGLRenderingContext){
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

    getSourceBuffer():FrameBuffer{
        return this.buffers[0];
    }

    getDestBuffer():FrameBuffer{
        return this.buffers[1];
    }

    destroy(){
        if (this.buffers) this.buffers.forEach((b:FrameBuffer)=>b.destroy());
    }

}

export default class Texture {

    gl:WebGLRenderingContext;
    tex:WebGLTexture = null;
    size:Size = new Size(0,0);
    isPowerOfTwo:boolean = false;
    _texFilterBuff:TextureFilterBuffer = null;

    static currInstances = {};

    constructor(gl:WebGLRenderingContext){
        if (DEBUG && !gl) throw "can not create Texture, gl context not passed to constructor, expected: Texture(gl)";
        this.gl = gl;

        this.tex = gl.createTexture();
        if (DEBUG && !this.tex) throw `can not allocate memory for texture`;
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
    setImage(img:Image,width?:number,height?:number){
        if (DEBUG) {
            if (!(img || width || height)) throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
        }

        const gl = this.gl;
        if (img) this.size.setWH(img.width,img.height);
        else this.size.setWH(width,height);
        this.bind();
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img as HTMLImageElement);
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

    applyFilters(filters:Array<AbstractFilter>,frameBuffer:FrameBuffer){
        if (DEBUG && frameBuffer===undefined)
            throw `can not apply filters. frameBuffer must be explicitly passed. Pass null if no frame buffer needs to bind after filtering`;
        let len = filters.length;
        if (len===0) return this;
        if (this._texFilterBuff.buffers===null)
            this._texFilterBuff.instantiate(this.gl);
        let filter:AbstractFilter = filters[0];
        filter.doFilter(this,this._texFilterBuff.getDestBuffer());
        for (let i=1;i<len;i++){
            this._texFilterBuff.flip();
            filters[i].doFilter(
                this._texFilterBuff.getSourceBuffer().texture,
                this._texFilterBuff.getDestBuffer()
            );
        }
        this._texFilterBuff.flip();
        if (frameBuffer!==null) frameBuffer.bind();
        return this._texFilterBuff.getSourceBuffer().texture;
    }

    bind(i:number = 0) { // uniform eq to 0 by default
        // to define max texture units supported gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        if (Texture.currInstances[i]===this) return;
        let gl = this.gl;
        gl.activeTexture(gl.TEXTURE0+i);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        Texture.currInstances[i] = this;
    }

    unbind(i:number = 0) {
        let gl:WebGLRenderingContext = this.gl;
        gl.activeTexture(gl.TEXTURE0+i);
        gl.bindTexture(gl.TEXTURE_2D, null);
        Texture.currInstances[i] = null;
    }

    destroy(){
        if (this._texFilterBuff) this._texFilterBuff.destroy();
        this.gl.deleteTexture(this.tex);
    }

    getSize (){
        return this.size;
    }

    getGlTexture() {
        return this.tex;
    }

}


