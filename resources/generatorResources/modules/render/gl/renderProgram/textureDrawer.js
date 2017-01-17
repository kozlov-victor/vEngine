
var bundle = require('bundle');
var ShaderProgram = require('shaderProgram');

var VertexBuffer = require('vertexBuffer');
var IndexBuffer = require('indexBuffer');

var CommonTextureDrawer = function(gl){

    var self = this;

    var program, posVertexBuffer, posIndexBuffer, texVertexBuffer;

    this.bind = function(){
        program.bind();
        program.bindBuffer(posVertexBuffer,'a_position');
        posIndexBuffer.bind();
    };

    this.unbind  = function(){
        posIndexBuffer.unbind();
    };

    this.setUniform = function(name,value){
        program.setUniform(name,value);
    };

    this.draw = function(){
        gl.drawElements(gl.TRIANGLE_STRIP, posIndexBuffer.getBufferLength(), gl.UNSIGNED_SHORT,0);
    };

    (function(){
        program = new ShaderProgram(gl, [
            bundle.shaders.basic['vertex.vert'],
            bundle.shaders.texture['fragment.frag']
        ]);

        posVertexBuffer = new VertexBuffer(gl);
        posVertexBuffer.setData([
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ],gl.FLOAT,2);
        program.bindBuffer(posVertexBuffer,'a_position');

        posIndexBuffer = new IndexBuffer(gl);
        posIndexBuffer.setData([
            0,1,2,3
        ]);

        texVertexBuffer = new VertexBuffer(gl);
        texVertexBuffer.setData([
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ],gl.FLOAT,2);
        program.bindBuffer(texVertexBuffer,'a_texcoord');

        self.bind();
        self.setUniform('u_alpha',1);

    })();

};

module.exports = CommonTextureDrawer;