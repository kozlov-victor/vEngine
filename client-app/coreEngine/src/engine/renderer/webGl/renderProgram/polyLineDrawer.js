
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'

import basicVertexShader from '../shaders/basic/vertex.vert'
import colorShader from '../shaders/color/fragment.frag'

export default class PolyLineDrawer {

    constructor(gl){
        this.gl = gl;
        this.program = new ShaderProgram(gl, [
            basicVertexShader,
            colorShader
        ]);

        this.posVertexBuffer = new VertexBuffer(gl);
    }

    bind(vertexData){
        this.program.bind();
        this.posVertexBuffer.setData(vertexData,this.gl.FLOAT,2);
        this.program.bindBuffer(this.posVertexBuffer,'a_position');
    }

    unbind(){

    }

    setUniform(name,value){
        this.program.setUniform(name,value);
    }

    draw(){
        this.gl.drawArrays(
            this.gl.LINE_STRIP, 0,
            this.posVertexBuffer.getBufferLength()/2
        );
    }

}