

import Plane from '../primitives/plane'
import ShaderProgram from '../base/shaderProgram'
import VertexBuffer from '../base/vertexBuffer'
import IndexBuffer from '../base/indexBuffer'
import AbstractDrawer from "./abstractDrawer";
import ShaderGenerator from "../shaders/shaderGenerator";

/*

attribute vec4 a_position;
attribute vec4 a_color;
attribute vec2 a_texcoord;

uniform mat4 u_PositionMatrix;
uniform mat4 u_textureMatrix;

varying vec2 v_texcoord;
varying vec4 v_color;

void main() {
   gl_Position = u_PositionMatrix * a_position;
   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;
   v_color = a_color;
}

---

precision mediump float;

varying vec2 v_texcoord;

uniform sampler2D texture;
uniform float u_alpha;


void main() {
    gl_FragColor = texture2D(texture, v_texcoord);
    gl_FragColor.a *= u_alpha;
}

 */

// position, color and texture
let gen = new ShaderGenerator();
gen.addAttribute('vec4','a_position');
//gen.addAttribute('vec4','a_color');
gen.addAttribute('vec2','a_texCoord');
gen.addVertexUniform('mat4','u_vertexMatrix');
gen.addVertexUniform('mat4','u_textureMatrix');
gen.addVarying('vec2','v_texCoord');
//gen.addVarying('vec4','v_color');
gen.setVertexMainFn(`
    gl_Position = u_vertexMatrix * a_position;
    v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy; 
    //v_color = a_color;
`);
gen.addFragmentUniform('sampler2D','texture');
gen.addFragmentUniform('float','u_alpha');
gen.setFragmentMainFn(`
    gl_FragColor = texture2D(texture, v_texCoord);
    gl_FragColor.a *= u_alpha;
`);
export let textureShaderGen = gen;

export default class SpriteRectDrawer extends AbstractDrawer {

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