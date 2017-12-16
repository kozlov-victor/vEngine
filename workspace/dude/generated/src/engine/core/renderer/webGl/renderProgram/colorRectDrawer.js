
import Plane from '../primitives/plane'
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'

import basicVertexShader from '../shaders/basic/vertex.vert'
import colorShader from '../shaders/color/fragment.frag'
import AbstractDrawer from "./abstractDrawer";

export default class ColorRectDrawer extends AbstractDrawer{

    constructor(gl,game){
        super(gl,game);
        this.id = 1;
        this.plane = new Plane();
        this.program = new ShaderProgram(gl, [
            basicVertexShader,
            colorShader
        ]);

        this.posVertexBuffer = new VertexBuffer(gl);
        this.posIndexBuffer = new IndexBuffer(gl);

        this.posVertexBuffer.setData(this.plane.vertexArr,this.gl.FLOAT,2);
        this.posIndexBuffer.setData(this.plane.indexArr);
    }


    bind(){
        super.bind();
        this.program.bind();

        this.program.bindBuffer(this.posVertexBuffer,'a_position');
        // this.posVertexBuffer.setData(this.plane.vertexArr,this.gl.FLOAT,2);
        // this.posIndexBuffer.setData(this.plane.indexArr);
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