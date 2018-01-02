


import AbstractFilter from "../abstract/abstractFilter";

export default class BlackWhiteFilter extends AbstractFilter{

    constructor(gl){
        super(gl);
    }

    prepare(programGen){
        programGen.setFragmentMainFn(`
            vec4 col = texture2D(texture, v_texCoord);
            float avg = (col.r+col.g+col.b)/3.0;
            gl_FragColor = vec4(vec3(avg),1.0);
        `);
    }

}