
const bundle = require('bundle');
const ShaderProgram = require('shaderProgram');

const VertexBuffer = require('vertexBuffer');

const PolyLineDrawer = function(gl){

    let program, posVertexBuffer;

    this.bind = function(vertexData){
        program.bind();
        posVertexBuffer.setData(vertexData,gl.FLOAT,2);
        program.bindBuffer(posVertexBuffer,'a_position');
    };

    this.unbind = function(){

    };

    this.setUniform = function(name,value){
        program.setUniform(name,value);
    };

    this.draw = function(){
        gl.drawArrays(gl.LINE_STRIP, 0,posVertexBuffer.getBufferLength()/2);
    };

    (function(){
        program = new ShaderProgram(gl, [
            bundle.shaders.basic['vertex.vert'],
            bundle.shaders.color['fragment.frag']
        ]);

        posVertexBuffer = new VertexBuffer(gl);

    })();

};

module.exports = PolyLineDrawer;