


import AbstractFilter from "../abstract/abstractFilter";
import ShaderGenerator from "../../shaders/generators/shaderGenerator";

export default class ColorizeFilter extends AbstractFilter{

    constructor(gl:WebGLRenderingContext){
        super(gl);
    }
    //language=GLSL
    prepare(programGen:ShaderGenerator){
        programGen.setFragmentMainFn(`
            void main(){
                vec4 col = texture2D(texture, v_texCoord);
                col.g = 0.9;
                gl_FragColor = col;
            }
        `);
    }

}