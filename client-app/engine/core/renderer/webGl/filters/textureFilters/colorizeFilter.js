


import AbstractFilter from "../abstract/abstractFilter";

export default class ColorizeFilter extends AbstractFilter{

    constructor(gl){
        super(gl);
    }

    prepare(programGen){
        programGen.setFragmentMainFn(`
            vec4 col = texture2D(texture, v_texCoord);
            col.g = 0.9;
            gl_FragColor = col;
        `);
    }

}