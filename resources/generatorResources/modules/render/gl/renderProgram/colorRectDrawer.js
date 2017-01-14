
var bundle = require('bundle');
var ShaderProgram = require('shaderProgram');

var VertexBuffer = require('vertexBuffer');
var IndexBuffer = require('indexBuffer');

var ColorRectDrawer = function(gl){

    var program, posVertexBuffer, posIndexBuffer, texVertexBuffer;

    this.bind = function(){
        posIndexBuffer.bind();
        program.bind();
    };

    this.unbind = function(){
        posIndexBuffer.unbind();
    };

    this.setUniform = function(name,value){
        program.setUniform(name,value);
    };

    this.draw = function(){
        gl.drawElements(gl.TRIANGLES, posIndexBuffer.getBufferLength(), gl.UNSIGNED_SHORT,0);
    };

    (function(){
        program = new ShaderProgram(gl, [
            bundle.shaders.basic['vertex.vert'],
            bundle.shaders.color['fragment.frag']
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
            0,1,2,2,1,3
        ]);

    })();

};

module.exports = ColorRectDrawer;