

// import ShaderProgram from '../../../base/shaderProgram'
// import VertexBuffer from '../../../base/vertexBuffer'
// import IndexBuffer from '../../../base/indexBuffer'

// import basicVertexShader from '../../../shaders/_unused/basic/vertex2.vert'
// import textureShader from '../../../shaders/_unused/texture/fragment2.frag'
import {AbstractDrawer} from "./../../abstract/abstractDrawer";
import {BufferInfo} from "../../../base/bufferInfo";

export class ModelDrawer extends AbstractDrawer {

    // constructor(gl){
    //     super(gl);
    //     this.program = new ShaderProgram(
    //         gl,
    //         //basicVertexShader,
    //         //textureShader
    //     );
    //
    //     this.posVertexBuffer = new VertexBuffer(gl);
    //     this.texVertexBuffer = new VertexBuffer(gl);
    //     this.normalBuffer = new VertexBuffer(gl);
    //     this.posIndexBuffer = new IndexBuffer(gl);
    //
    //     this.program.bind();
    // }
    //
    // bind(model){
    //     super.bind();
    //     this.program.bind();
    //     let gl = this.gl;
    //     let program = this.program;
    //
    //     this.posVertexBuffer.setData(model.vertexArr,gl.FLOAT,3);
    //     program.bindBuffer(this.posVertexBuffer,'a_position');
    //
    //     this.texVertexBuffer.setData(model.texCoordArr,gl.FLOAT,2);
    //     program.bindBuffer(this.texVertexBuffer,'a_texCoord');
    //
    //     this.normalBuffer.setData(model.normalArr,gl.FLOAT,3);
    //     program.bindBuffer(this.normalBuffer,'a_normal');
    //
    //     this.posIndexBuffer.setData(model.indexArr);
    //     this.posIndexBuffer.bind();
    // }
    //
    //
    //
    // draw(){
    //     this.gl.drawElements(
    //         this.gl.TRIANGLES,
    //         this.posIndexBuffer.getBufferLength(),
    //         this.gl.UNSIGNED_SHORT,0
    //     );
    // }

}