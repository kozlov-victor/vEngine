

const bundle = require('bundle');
const ShaderProgram = require('shaderProgram');

const VertexBuffer = require('vertexBuffer');
const IndexBuffer = require('indexBuffer');

const ModelDrawer = function(gl){

    let self = this;

    let program, posVertexBuffer, posIndexBuffer, texVertexBuffer, normalBuffer;

    this.bind = function(model){
        program.bind();

        posVertexBuffer.setData(model.vertexArr,gl.FLOAT,3);
        program.bindBuffer(posVertexBuffer,'a_position');

        texVertexBuffer.setData(model.texCoordArr,gl.FLOAT,2);
        program.bindBuffer(texVertexBuffer,'a_texcoord');

        normalBuffer.setData(model.normalArr,gl.FLOAT,3);
        program.bindBuffer(normalBuffer,'a_normal');

        posIndexBuffer.setData(model.indexArr);
        posIndexBuffer.bind();
    };

    this.unbind  = function(){
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
            bundle.shaders.basic['vertex2.vert'],
            bundle.shaders.texture['fragment2.frag']
        ]);

        posVertexBuffer = new VertexBuffer(gl);
        texVertexBuffer = new VertexBuffer(gl);
        normalBuffer = new VertexBuffer(gl);
        posIndexBuffer = new IndexBuffer(gl);

        program.bind();
        //self.setUniform('u_alpha',1);

    })();

};

module.exports = ModelDrawer;