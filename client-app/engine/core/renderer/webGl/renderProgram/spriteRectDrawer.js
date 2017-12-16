

import Plane from '../primitives/plane'
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'

import basicVertexShader from '../shaders/basic/vertex.vert'
import textureShader from '../shaders/texture/fragment.frag'
import AbstractDrawer from "./abstractDrawer";

export default class SpriteRectDrawer extends AbstractDrawer {

    constructor(gl,game){
        super(gl,game);
        this.id = 2;
        this.plane = new Plane();
        this.program = new ShaderProgram(gl, [
            basicVertexShader,
            textureShader
        ]);

        this.posVertexBuffer = new VertexBuffer(gl);
        this.posIndexBuffer = new IndexBuffer(gl);
        this.texVertexBuffer = new VertexBuffer(gl);

        this.posIndexBuffer.setData(this.plane.indexArr);
        this.posVertexBuffer.setData(this.plane.vertexArr,gl.FLOAT,2);
        this.texVertexBuffer.setData(this.plane.texCoordArr,gl.FLOAT,2);

        this.bind();
        this.setUniform('u_alpha',1);
    }


    bind(){
        super.bind();
        let gl = this.gl;
        this.program.bind();

        //this.posIndexBuffer.setData(this.plane.indexArr);
        this.posIndexBuffer.bind();

        //this.posVertexBuffer.setData(this.plane.vertexArr,gl.FLOAT,2);
        this.program.bindBuffer(this.posVertexBuffer,'a_position');

        //this.texVertexBuffer.setData(this.plane.texCoordArr,gl.FLOAT,2);
        this.program.bindBuffer(this.texVertexBuffer,'a_texcoord');
    }


    draw(){
        this.gl.drawElements(
            this.gl.TRIANGLE_STRIP, 
            this.posIndexBuffer.getBufferLength(), 
            this.gl.UNSIGNED_SHORT,0
        );
    }

}