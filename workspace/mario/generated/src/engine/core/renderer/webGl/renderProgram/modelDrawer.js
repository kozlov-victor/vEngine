

import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'

import basicVertexShader from '../shaders/basic/vertex2.vert'
import textureShader from '../shaders/texture/fragment2.frag'

export default class ModelDrawer {

    constructor(gl,game){
        this.gl = gl;
        this.program = new ShaderProgram(gl, [
            basicVertexShader,
            textureShader
        ]);

        this.posVertexBuffer = new VertexBuffer(gl);
        this.texVertexBuffer = new VertexBuffer(gl);
        this.normalBuffer = new VertexBuffer(gl);
        this.posIndexBuffer = new IndexBuffer(gl);

        this.program.bind();
    }

    bind(model){
        this.program.bind();
        let gl = this.gl;
        let program = this.program;

        this.posVertexBuffer.setData(model.vertexArr,gl.FLOAT,3);
        program.bindBuffer(this.posVertexBuffer,'a_position');

        this.texVertexBuffer.setData(model.texCoordArr,gl.FLOAT,2);
        program.bindBuffer(this.texVertexBuffer,'a_texcoord');

        this.normalBuffer.setData(model.normalArr,gl.FLOAT,3);
        program.bindBuffer(this.normalBuffer,'a_normal');

        this.posIndexBuffer.setData(model.indexArr);
        this.posIndexBuffer.bind();
    }

    unbind(){
        this.posIndexBuffer.unbind();
    }

    setUniform(name,value){
        this.program.setUniform(name,value);
    }

    draw(){
        this.gl.drawElements(
            this.gl.TRIANGLES, 
            this.posIndexBuffer.getBufferLength(), 
            this.gl.UNSIGNED_SHORT,0
        );
    }

}