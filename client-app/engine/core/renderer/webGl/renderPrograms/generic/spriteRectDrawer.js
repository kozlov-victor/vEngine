

import Plane from '../../primitives/plane'
import ShaderProgram from '../../base/shaderProgram'
import VertexBuffer from '../../base/vertexBuffer'
import IndexBuffer from '../../base/indexBuffer'
import AbstractDrawer from "../abstract/abstractDrawer";
import {textureShaderGen} from "../../shaders/shaderGenerator";

export default class SpriteRectDrawer extends AbstractDrawer {

    constructor(gl,program){
        super(gl);
        let gen = textureShaderGen.clone();
        this.plane = new Plane();
        this.program = program || new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );

        this.posVertexBuffer = new VertexBuffer(gl);
        this.posIndexBuffer = new IndexBuffer(gl);
        this.texVertexBuffer = new VertexBuffer(gl);

        this.posIndexBuffer.setData(this.plane.indexArr);
        this.posVertexBuffer.setData(this.plane.vertexArr,gl.FLOAT,2);
        this.texVertexBuffer.setData(this.plane.texCoordArr,gl.FLOAT,2);

    }


    bind(){
        super.bind();
        this.program.bind();
        this.posIndexBuffer.bind();
        this.posVertexBuffer.bind(this.program,'a_position');
        this.texVertexBuffer.bind(this.program,'a_texCoord');
    }


    draw(){
        this.gl.drawElements(
            this.gl.TRIANGLE_STRIP,
            this.posIndexBuffer.getBufferLength(),
            this.gl.UNSIGNED_SHORT,0
        );
    }

}