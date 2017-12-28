
import Circle from '../primitives/circle'
import Plane from '../primitives/plane'
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'

import basicVertexShader from '../shaders/basic/vertex3.vert'
import colorShader from '../shaders/color/fragment.frag'
import AbstractDrawer from "./abstractDrawer";

export default class CircleDrawer extends AbstractDrawer {

    constructor(gl,game){
        super(gl,game);
        this.program = new ShaderProgram(gl, [
            basicVertexShader,
            colorShader
        ]);
        this.circle = new Circle();

        this.posVertexBuffer = new VertexBuffer(gl);

        this.posVertexBuffer.setData(this.circle.vertexArr,this.gl.FLOAT,2);
    }

    bind(){
        super.bind();
        this.program.bind();
        this.posVertexBuffer.bind(this.program,'a_position');
    }

    draw(){
        this.gl.drawArrays(
            this.gl.TRIANGLE_FAN,0, // gl.STREAM_DRAW
            this.posVertexBuffer.getBufferLength()/2
        );
    }

}
