
import Plane from '../primitives/plane'
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'

import basicVertexShader from '../shaders/basic/vertex.vert'
import colorShader from '../shaders/color/fragment.frag'

export default class ColorRectDrawer {

    constructor(gl,game){
        this.gl = gl;
        this.plane = new Plane();
        this.program = new ShaderProgram(gl, [
            basicVertexShader,
            colorShader
        ]);

        this.posVertexBuffer = new VertexBuffer(gl);
        this.posIndexBuffer = new IndexBuffer(gl);
    }


    bind(){
        this.program.bind();

        this.posVertexBuffer.setData(this.plane.vertexArr,this.gl.FLOAT,2);
        this.program.bindBuffer(this.posVertexBuffer,'a_position');

        this.posIndexBuffer.setData(this.plane.indexArr);
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
            this.gl.TRIANGLE_STRIP, 
            this.posIndexBuffer.getBufferLength(), 
            this.gl.UNSIGNED_SHORT,0
        );
    }

}