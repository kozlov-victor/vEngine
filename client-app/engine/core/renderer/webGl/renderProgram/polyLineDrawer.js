
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'

import basicVertexShader from '../shaders/basic/vertex.vert'
import colorShader from '../shaders/color/fragment.frag'
import AbstractDrawer from "./abstractDrawer";

export default class PolyLineDrawer extends AbstractDrawer {

    constructor(gl,game){
        super(gl,game);
        this.program = new ShaderProgram(gl, [
            basicVertexShader,
            colorShader
        ]);

        this.posVertexBuffer = new VertexBuffer(gl);
    }

    bind(vertexData){
        super.bind();
        this.program.bind();
        this.posVertexBuffer.setData(vertexData,this.gl.FLOAT,2);
        this.program.bindBuffer(this.posVertexBuffer,'a_position');
    }

    draw(){
        this.gl.drawArrays(
            this.gl.LINE_STRIP, 0,
            this.posVertexBuffer.getBufferLength()/2
        );
    }

}