

import {ShaderProgram} from '../../../base/shaderProgram'
import {VertexBuffer} from '../../../base/vertexBuffer'
import {IndexBuffer} from '../../../base/indexBuffer'
import {AbstractDrawer} from "./../../abstract/abstractDrawer";
import {BufferInfo} from "../../../base/bufferInfo";


const vertexShader:string = `

attribute vec4 a_position;
attribute vec2 a_texcoord;
attribute vec3 a_normal;

uniform mat4 u_modelMatrix;
uniform mat4 u_projectionMatrix;

varying vec2 v_texcoord;
varying vec3 v_normal;

void main() {

  gl_Position = u_projectionMatrix * u_modelMatrix * a_position;
  v_texcoord = a_texcoord;
  v_normal = a_normal;
}
`;

const textureShader:string = `

precision highp float;

varying vec2 v_texcoord;
varying vec3 v_normal;

uniform sampler2D u_texture;
uniform float u_alpha;
uniform mat4 u_modelMatrix;


void main() {

    vec3 lightDirection = normalize(vec3(-1,-1,1));
    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);
    float lightFactor = max(0.5,dot(lightDirection,normalized));
    gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor.rgb *= lightFactor;
    gl_FragColor.a *= u_alpha;
}

`;


export class ModelDrawer extends AbstractDrawer {

    posVertexBuffer: VertexBuffer;
    texVertexBuffer: VertexBuffer;
    normalBuffer: VertexBuffer;
    posIndexBuffer: IndexBuffer;
    private model;


    constructor(gl:WebGLRenderingContext){
        super(gl);
        this.program = new ShaderProgram(
            gl,
            vertexShader,
            textureShader
        );
    
        this.posVertexBuffer = new VertexBuffer(gl);
        this.texVertexBuffer = new VertexBuffer(gl);
        this.normalBuffer = new VertexBuffer(gl);
        this.posIndexBuffer = new IndexBuffer(gl);
    
        this.program.bind();
    }
    

    setModel(model){
        this.model = model;
    }

    bind(){
        //super.bind();
        this.program.bind();
        let gl = this.gl;
        let program = this.program;
    
        this.posVertexBuffer.setData(this.model.vertexArr,gl.FLOAT,3);
        program.bindBuffer(this.posVertexBuffer,'a_position');
    
        this.texVertexBuffer.setData(this.model.texCoordArr,gl.FLOAT,2);
        if (this.texVertexBuffer) program.bindBuffer(this.texVertexBuffer,'a_texcoord');
    
        this.normalBuffer.setData(this.model.normalArr,gl.FLOAT,3);
        if (this.normalBuffer) program.bindBuffer(this.normalBuffer,'a_normal');
    
        this.posIndexBuffer.setData(this.model.indexArr);
        this.posIndexBuffer.bind();
    }

    unbind(){
        this.posVertexBuffer.unbind();
        this.normalBuffer.unbind();
        this.posIndexBuffer.unbind();
    }
    
    
    
    draw(){
        this.gl.drawElements(
            this.gl.TRIANGLES,
            this.posIndexBuffer.getBufferLength(),
            this.gl.UNSIGNED_SHORT,0
        );
    }

}