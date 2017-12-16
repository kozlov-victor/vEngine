

import Plane from '../primitives/plane'
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'

import basicVertexShader from '../shaders/basic/vertex.vert'
import colorShader from '../shaders/multiColor/fragment.frag'
import AbstractDrawer from "./abstractDrawer";

export default class MultiColorRectDrawer extends AbstractDrawer {

    constructor(gl,game){
        super(gl,game);
        this.plane = new Plane();
        this.program = new ShaderProgram(gl, [
            basicVertexShader,
            colorShader
        ]);

        this.posVertexBuffer = new VertexBuffer(gl);
        this.vertexColorBuffer = new VertexBuffer(gl);
        this.posIndexBuffer = new IndexBuffer(gl);
    }

    bind(colors){
        super.bind();
        this.program.bind();
        let gl = this.gl;

        this.vertexColorBuffer.setData(colors,gl.FLOAT,4);
        this.program.bindBuffer(this.vertexColorBuffer,'a_color');

        this.posVertexBuffer.setData(plane.vertexArr,gl.FLOAT,2);
        program.bindBuffer(this.posVertexBuffer,'a_position');

        this.posIndexBuffer.setData(this.plane.indexArr);
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
