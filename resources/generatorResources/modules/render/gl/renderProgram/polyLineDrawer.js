
var bundle = require('bundle');
var ShaderProgram = require('shaderProgram');

var VertexBuffer = require('vertexBuffer');

var PolyLineDrawer = function(gl){

    var program, posVertexBuffer;

    this.bind = function(vertexData){
        posVertexBuffer.setData(vertexData,gl.FLOAT,2);
        program.bindBuffer(posVertexBuffer,'a_position');
        program.bind();
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