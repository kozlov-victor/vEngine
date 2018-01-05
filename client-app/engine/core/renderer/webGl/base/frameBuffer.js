/*global DEBUG:true*/

import Texture from './texture'

export default class FrameBuffer {

    static currInstance = null;

    constructor(gl,width,height){
        if (DEBUG && !gl) throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";

        this.gl = gl;
        this.width = width;
        this.height = height;

        this.texture = new Texture(gl);
        this.texture.setImage(null,width,height);
        this._init(gl,width,height);
    }

    _init(gl,width,height){
        // Init Render Buffer
        this.glRenderBuffer = gl.createRenderbuffer();
        if (DEBUG && !this.glRenderBuffer) throw `can not allocate memory for glRenderBuffer`;
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        // Init Frame Buffer
        this.glFrameBuffer = gl.createFramebuffer();
        if (DEBUG && !this.glRenderBuffer) throw `can not allocate memory for glFrameBuffer`;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.glRenderBuffer);
        // Clean up
        this.texture.unbind();
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    bind(){
        if (FrameBuffer.currInstance===this) return;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.glFrameBuffer);
        this.gl.viewport(0, 0, this.width,this.height);
        FrameBuffer.currInstance = this;
    }

    unbind(){
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    getTexture(){
        return this.texture;
    }

}