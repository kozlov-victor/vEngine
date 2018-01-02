/*global DEBUG:true*/

import ShaderProgram from "../../base/shaderProgram";
import {textureShaderGen} from "../../shaders/shaderGenerator";

export default class AbstractFilter {

    programGen;
    program = null;

    constructor(gl){
        if (DEBUG && !gl) throw "can not create Filter, gl context not passed to constructor, expected: Filter(gl)";
        this.gl = gl;
        this.programGen = textureShaderGen.clone();
    }

    prepare(){}

    afterPrepare(){
        this.program = new ShaderProgram(
            this.gl,
            this.programGen.getVertexSource(),
            this.programGen.getFragmentSource()
        );
    }
}