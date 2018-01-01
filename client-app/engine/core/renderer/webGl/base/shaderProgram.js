/*global DEBUG:true*/

import {compileShader, createProgram, extractUniforms} from "./shaderProgramUtils";

export default class ShaderProgram {

    static currentProgram = null;

    _attrLocationCache = {};

    constructor(gl,sources) {
        let vShader = compileShader(gl, sources[0], gl.VERTEX_SHADER);
        let fShader = compileShader(gl, sources[1], gl.FRAGMENT_SHADER);
        this.program = createProgram(gl, [vShader, fShader]);
        this.uniforms = extractUniforms(gl, this.program);
        this.gl = gl;
    }

    getProgram () {
        return this.program;
    }

    bind(){
        this.gl.useProgram(this.program);
        ShaderProgram.currentProgram = this;
    }

    setUniform(name, value) {
        let uniform = this.uniforms[name];
        if (DEBUG && !uniform) throw `no uniform with name ${name} found!`;
        uniform.setter(this.gl, uniform.location, value);
    }

    bindBuffer(buffer, attrLocationName) {
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

}