


import AbstractFilter from "../abstract/abstractFilter";
import ShaderGenerator from "../../shaders/generators/shaderGenerator";

export default class ColorizeFilter extends AbstractFilter{

    constructor(gl:WebGLRenderingContext){
        super(gl);
    }

    prepare(programGen:ShaderGenerator){
        programGen.setFragmentMainFn(`
            vec4 col = texture2D(texture, v_texCoord);
            col.g = 0.9;
            gl_FragColor = col;
        `);
    }

}