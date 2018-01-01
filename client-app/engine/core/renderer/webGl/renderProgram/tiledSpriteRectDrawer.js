
import Plane from '../primitives/plane'
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'
import AbstractDrawer from "./abstractDrawer";
import {textureShaderGen} from "./spriteRectDrawer";
import {GL_TYPE} from "../base/shaderProgramUtils";

let gen = textureShaderGen.clone();
gen.addFragmentUniform(GL_TYPE.FLOAT_VEC2,'u_offsetCoords');
gen.addFragmentUniform(GL_TYPE.FLOAT_VEC4,'u_frameCoords');
gen.setFragmentMainFn(`
    vec2 localTextCoord = mod(
        v_texCoord + fract(u_offsetCoords),
        u_frameCoords.zw
    ) + u_frameCoords.xy;
    gl_FragColor = texture2D(texture, localTextCoord);
    gl_FragColor.a *= u_alpha;
`);

export default class TiledSpriteRectDrawer extends AbstractDrawer {

    constructor(gl,game){
        super(gl,game);
        this.plane = new Plane();
        this.program = new ShaderProgram(gl, [
            gen.getVertexSource(),
            gen.getFragmentSource()
        ]);

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