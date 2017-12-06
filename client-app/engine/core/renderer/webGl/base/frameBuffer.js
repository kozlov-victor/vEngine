/*global DEBUG:true*/

import Texture from './texture'

export default class FrameBuffer {

    constructor(gl,width,height){
        if (DEBUG && !gl) throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";

        this.gl = gl;
        this.width = width;
        this.height = height;

        //1. Init Color Texture
        this.texture = new Texture(gl);
        this.texture.setImage(null,width,height);
        //2. Init Render Buffer
        this.glRenderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        //3. Init Frame Buffer
        this.glFrameBuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.glRenderBuffer);
        //4. Clean up
        this.texture.unbind();
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    bind(){
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.glFrameBuffer);
        this.gl.viewport(0, 0, this.width,this.height);
    }

    unbind(){
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    getTexture(){
        return this.texture;
    }

}