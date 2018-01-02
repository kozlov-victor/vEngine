
import Plane from '../primitives/plane'
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'

import AbstractDrawer from "./abstractDrawer";
import {simpleColorShaderGen as gen} from "../shaders/shaderGenerator"

export default class ColorRectDrawer extends AbstractDrawer{

    constructor(gl,game){
        super(gl,game);
        this.plane = new Plane();
        this.program = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );

        this.posVertexBuffer = new VertexBuffer(gl);
        this.posIndexBuffer = new IndexBuffer(gl);

        this.posVertexBuffer.setData(this.plane.vertexArr,this.gl.FLOAT,2);
        this.posIndexBuffer.setData(this.plane.indexArr);
    }


    bind(){
        super.bind();
        this.program.bind();
        this.posVertexBuffer.bind(this.program,'a_position');
        this.posIndexBuffer.bind();
    }

    draw(){
        this.gl.drawElements(
            this.gl.TRIANGLE_STRIP, 
            this.posIndexBuffer.getBufferLength(), 
            this.gl.UNSIGNED_SHORT,0
        );
    }

}