
import Line from '../primitives/line'
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'

import AbstractDrawer from "./abstractDrawer";
import {simpleColorShaderGen as gen} from "../shaders/shaderGenerator"

export default class LineDrawer extends AbstractDrawer {

    constructor(gl,game){
        super(gl,game);
        this.program = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        this.line = new Line();

        this.posVertexBuffer = new VertexBuffer(gl);
        this.posIndexBuffer = new IndexBuffer(gl); // todo remove

        this.posVertexBuffer.setData(this.line.vertexArr,this.gl.FLOAT,2);
    }

    bind(){
        super.bind();
        this.program.bind();
        this.posVertexBuffer.bind(this.program,'a_position');
    }

    draw(){
        this.gl.drawArrays(
            this.gl.LINE_STRIP, 0,
            this.posVertexBuffer.getBufferLength()/2
        );
    }

}