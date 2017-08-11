
const Plane = require('plane');

const bundle = require('bundle');
const ShaderProgram = require('shaderProgram');

const VertexBuffer = require('vertexBuffer');
const IndexBuffer = require('indexBuffer');

const ColorRectDrawer = function(gl){

    let program, posVertexBuffer, posIndexBuffer, texVertexBuffer;
    let plane = new Plane();

    this.bind = function(){
        program.bind();

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
            bundle.shaders.color['fragment.frag']
        ]);

        posVertexBuffer = new VertexBuffer(gl);
        posIndexBuffer = new IndexBuffer(gl);

    })();

};

module.exports = ColorRectDrawer;