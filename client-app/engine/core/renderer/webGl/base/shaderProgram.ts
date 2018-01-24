/*global DEBUG:true*/

declare const IN_EDITOR:boolean,DEBUG:boolean;

import {
    AttributesMap, compileShader, createProgram, extractAttributes, extractUniforms,
    UniformsMap
} from "./shaderProgramUtils";
import VertexBuffer from "./vertexBuffer";

export default class ShaderProgram {

    static currentProgram:ShaderProgram = null;

    private program:WebGLProgram;
    private uniforms:UniformsMap;
    private attributes:AttributesMap;
    private gl:WebGLRenderingContext;


    constructor(gl:WebGLRenderingContext,vertexSource:string,fragmentSource:string) {
        let vShader = compileShader(gl, vertexSource, gl.VERTEX_SHADER);
        let fShader = compileShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
        this.program = createProgram(gl, vShader, fShader);
        gl.deleteShader(vShader);
        gl.deleteShader(fShader);
        this.uniforms = extractUniforms(gl, this.program);
        this.attributes = extractAttributes(gl,this.program);
        this.gl = gl;
    }

    getProgram():WebGLProgram {
        return this.program;
    }

    bind(){
        this.gl.useProgram(this.program);
        ShaderProgram.currentProgram = this;
    }

    setUniform(name:string, value) {
        let uniform = this.uniforms[name];
        if (DEBUG && !uniform) {
            console.error(this);
            throw `no uniform with name ${name} found!`;
        }
        if (DEBUG) {
            if (ShaderProgram.currentProgram!==this) {
                console.error(this);
                throw `can not set uniform: target program is inactive`;
            }
        }
        uniform.setter(this.gl, uniform.location, value);
        // structure in shader:
        // struct SomeStruct {
        //      bool active;
        //      vec2 someVec2;
        // }
        // uniform SomeStruct u_someThing;
        // js:
        // gl.getUniformLocation(program,'u_someThing.active')
        // gl.getUniformLocation(program,'u_someThing.someVec2')
    }

    bindBuffer(buffer:VertexBuffer, attrName:string) {
        if (DEBUG) {
            if (!attrName) throw `can not found attribute location: attrLocationName not defined`;
            if (this.attributes[attrName]===undefined) {
                console.log(this);
                throw `can not found attribute location for  ${attrName}`;
            }
        }

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.getGlBuffer());
        let attrLocation:number = this.attributes[attrName];
        this.gl.enableVertexAttribArray(attrLocation);
        this.gl.vertexAttribPointer(
            attrLocation,
            buffer.getItemSize(),
            buffer.getItemType(), // type of data
            false,  // if the content is normalized [0..1] vectors
            0,      // number of bytes to skip in between elements
            0       // offsets to the first element
        );
    }

    destroy(){
        this.gl.deleteProgram(this.program);
    }

}