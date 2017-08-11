
const Texture = require('texture');

const FrameBuffer = function(gl,width,height){

    let texture;
    let glRenderBuffer;
    let glFrameBuffer;

    this.bind = function(){
        gl.bindFramebuffer(gl.FRAMEBUFFER, glFrameBuffer);
        gl.viewport(0, 0, width,height);
    };

    this.unbind = function(){
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };

    this.getTexture = function(){
        return texture;
    };


    (function(){
        //<code>{{#if opts.debug}}
        if (!gl) throw "can not create frameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";
        //<code>{{/if}}

        //1. Init Color Texture
        texture = new Texture(gl);
        texture.setImage(null,width,height);
        //2. Init Render Buffer
        glRenderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        //3. Init Frame Buffer
        glFrameBuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, glRenderBuffer);
        //4. Clean up
        texture.unbind();
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);


    })();

};

module.exports = FrameBuffer;