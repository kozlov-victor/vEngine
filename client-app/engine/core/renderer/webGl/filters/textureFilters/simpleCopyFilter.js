
// this filter needs to copy texture to framebuffer

import AbstractFilter from "../abstract/abstractFilter";

export default class SimpleCopyFilter extends AbstractFilter{

    constructor(gl){
        super(gl);
    }

    prepare(programGen){
        programGen.addFragmentUniform('float','u_mixFactor');
        programGen.setFragmentMainFn(`
            gl_FragColor = texture2D(texture, v_texCoord); 
        `);
    }

}