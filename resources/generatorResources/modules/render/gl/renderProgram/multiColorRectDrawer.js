
var Plane = require('plane');

var bundle = require('bundle');
var ShaderProgram = require('shaderProgram');

var VertexBuffer = require('vertexBuffer');
var IndexBuffer = require('indexBuffer');

var MultiColorRectDrawer = function(gl){

    var program, posVertexBuffer, posIndexBuffer, vertexColorBuffer;
    var plane = new Plane();

    this.bind = function(colors){
        program.bind();

        vertexColorBuffer.setData(colors,gl.FLOAT,4);
        program.bindBuffer(vertexColorBuffer,'a_color');

        posVertexBuffer.setData(plane.vertexArr,gl.FLOAT,2);
        program.bindBuffer(posVertexBuffer,'a_position');

        posIndexBuffer.setData(plane.indexArr);
        posIndexBuffer.bind();
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
        vertexColorBuffer = new VertexBuffer(gl);
        posIndexBuffer = new IndexBuffer(gl);

    })();

};

module.exports = MultiColorRectDrawer;