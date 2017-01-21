
var Plane = require('plane');

var bundle = require('bundle');
var ShaderProgram = require('shaderProgram');

var VertexBuffer = require('vertexBuffer');
var IndexBuffer = require('indexBuffer');

var SpriteRectDrawer = function(gl){

    var self = this;

    var program, posVertexBuffer, posIndexBuffer, texVertexBuffer;
    var plane = new Plane();

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
        posVertexBuffer.setData(plane.vertexArr,gl.FLOAT,2);
        program.bindBuffer(posVertexBuffer,'a_position');

        posIndexBuffer = new IndexBuffer(gl);
        posIndexBuffer.setData(plane.indexArr);

        texVertexBuffer = new VertexBuffer(gl);
        texVertexBuffer.setData(plane.texCoordArr,gl.FLOAT,2);
        program.bindBuffer(texVertexBuffer,'a_texcoord');

        self.bind();
        self.setUniform('u_alpha',1);

    })();

};

module.exports = SpriteRectDrawer;