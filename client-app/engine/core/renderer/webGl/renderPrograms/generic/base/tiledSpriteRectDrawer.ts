
import Plane from '../../../primitives/plane'
import ShaderProgram from '../../../base/shaderProgram'
import BufferInfo, {BufferInfoDescription} from "../../../base/bufferInfo";
import AbstractDrawer from "../../abstract/abstractDrawer";
import {GL_TYPE} from "../../../base/shaderProgramUtils";
import TexShaderGenerator from "../../../shaders/generators/generic/texShaderGenerator";


export default class TiledSpriteRectDrawer extends AbstractDrawer {

    constructor(gl:WebGLRenderingContext){
        super(gl);
        this.primitive = new Plane();
        let gen = new TexShaderGenerator();
        gen.addFragmentUniform(GL_TYPE.FLOAT_VEC2,'u_offsetCoords');
        gen.addFragmentUniform(GL_TYPE.FLOAT_VEC4,'u_frameCoords');
        //language=GLSL
        gen.setFragmentMainFn(`
            void main(){
                vec2 localTextCoord = mod(
                    v_texCoord + fract(u_offsetCoords),
                    u_frameCoords.zw
                ) + u_frameCoords.xy;
                gl_FragColor = texture2D(texture, localTextCoord);
                gl_FragColor.a *= u_alpha;
            }
        `);
        this.program = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );

        this.bufferInfo = new BufferInfo(gl, {
            posVertexInfo: {array: this.primitive.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position'},
            posIndexInfo: {array: this.primitive.indexArr},
            texVertexInfo: {array: this.primitive.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord'},
            drawMethod: this.gl.TRIANGLE_STRIP
        } as BufferInfoDescription);

    }

}