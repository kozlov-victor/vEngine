

import Plane from '../../../primitives/plane'
import ShaderProgram from '../../../base/shaderProgram'
import AbstractDrawer from "../../abstract/abstractDrawer";
import BufferInfo from "../../../base/bufferInfo";
import TexShaderGenerator from "../../../shaders/generators/generic/texShaderGenerator";

export default class SpriteRectDrawer extends AbstractDrawer {

    private plane:Plane;

    constructor(gl,program?:ShaderProgram) {
        super(gl);
        let gen = new TexShaderGenerator();
        this.plane = new Plane();
        this.program = program || new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        this.bufferInfo = new BufferInfo(gl, {
            posVertexInfo: {array: this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position'},
            posIndexInfo: {array: this.plane.indexArr},
            texVertexInfo: {array: this.plane.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord'},
            drawMethod: this.gl.TRIANGLE_STRIP
        });
    }

    // draw(texture,uniforms){
    //     texture.bind();
    //     super.draw(uniforms);
    // }

}