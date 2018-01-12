/*global DEBUG:true*/

declare const IN_EDITOR:boolean,DEBUG:boolean;

import {compileShader, createProgram, extractUniforms} from "./shaderProgramUtils";
import VertexBuffer from "./vertexBuffer";

export default class ShaderProgram {

    static currentProgram:ShaderProgram = null;

    _attrLocationCache = {};

    private program:WebGLProgram;
    private uniforms;
    private gl:WebGLRenderingContext;


    constructor(gl:WebGLRenderingContext,vertexSource:string,fragmentSource:string) {
        let vShader = compileShader(gl, vertexSource, gl.VERTEX_SHADER);
        let fShader = compileShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
        this.program = createProgram(gl, vShader, fShader);
        gl.deleteShader(vShader);
        gl.deleteShader(fShader);
        this.uniforms = extractUniforms(gl, this.program);
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
        if (DEBUG && !uniform) throw `no uniform with name ${name} found!`;
        uniform.setter(this.gl, uniform.location, value);
        // if setter does not fit (ie uniform structure), invoke native gl setter,
        // ie shader:
        // struct SomeStruct {
        //      bool active;
        //      vec2 someVec2;
        // }
        // uniform SomeStruct u_someThing;
        // js:
        // gl.getUniformLocation(program,'u_someThing.active')
        // gl.getUniformLocation(program,'u_someThing.someVec2')
    }

    bindBuffer(buffer:VertexBuffer, attrLocationName:string) {
        if (DEBUG) {
            if (!attrLocationName) throw `can not found attribute location: attrLocationName not defined`;
        }

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.getGlBuffer());
        let attrLocation =
            this._attrLocationCache[attrLocationName] ||
            this.gl.getAttribLocation(this.program, attrLocationName);

        if (DEBUG) {
            if (attrLocation < 0) {
                console.log(this);
                throw `can not found attribute location for  ${attrLocationName}`;
            }
        }

        this.gl.enableVertexAttribArray(attrLocation);
        this.gl.vertexAttribPointer(
            attrLocation,
            buffer.getItemSize(),
            buffer.getItemType(), // type of data
            false,  // if the content is normalized [0..1] vectors
            0,      // number of bytes to skip in between elements
            0       // offsets to the first element
        );
        this._attrLocationCache[attrLocationName] = attrLocation;
    }

    destroy(){
        this.gl.deleteProgram(this.program);
    }

}