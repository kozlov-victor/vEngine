

import Plane from '../../primitives/plane'
import ShaderProgram from '../../base/shaderProgram'
import AbstractDrawer from "../abstract/abstractDrawer";
import {textureShaderGen} from "../../shaders/shaderGenerator";
import BufferInfo from "../../base/bufferInfo";

export default class SpriteRectDrawer extends AbstractDrawer {

    constructor(gl,program) {
        super(gl);
        let gen = textureShaderGen.clone();
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

    draw(texture,uniforms){
        texture.bind();
        super.draw(uniforms);
    }

}