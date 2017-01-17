

var bundle = require('bundle');
var ShaderProgram = require('shaderProgram');

var VertexBuffer = require('vertexBuffer');
var IndexBuffer = require('indexBuffer');

var MultiColorRectDrawer = function(gl){

    var program, posVertexBuffer, posIndexBuffer, vertexColorBuffer;

    this.bind = function(){
        vertexColorBuffer.setData([
            Math.random(), 0, 0, 0.5,
            0, 1, Math.random(), 1,
            Math.random(), Math.random(), 1, 1,
            Math.random(), Math.random(), Math.random(), Math.random()
        ],gl.FLOAT,4);
        program.bindBuffer(vertexColorBuffer,'a_color');
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
        gl.drawElements(gl.TRIANGLE_STRIP, posIndexBuffer.getBufferLength(), gl.UNSIGNED_SHORT,0);
    };

    (function(){
        program = new ShaderProgram(gl, [
            bundle.shaders.basic['vertex.vert'],
            bundle.shaders.multiColor['fragment.frag']
        ]);

        posVertexBuffer = new VertexBuffer(gl);
        posVertexBuffer.setData([
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ],gl.FLOAT,2);
        program.bindBuffer(posVertexBuffer,'a_position');


        vertexColorBuffer = new VertexBuffer(gl);
        vertexColorBuffer.setData([
            1, 0, 0, 0.5,
            0, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1
        ],gl.FLOAT,4);
        program.bindBuffer(vertexColorBuffer,'a_color');

        posIndexBuffer = new IndexBuffer(gl);
        posIndexBuffer.setData([
            0,1,2,3
        ]);

    })();

};

module.exports = MultiColorRectDrawer;