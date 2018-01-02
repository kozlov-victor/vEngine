


import AbstractFilter from "../abstract/abstractFilter";

export default class BlackWhiteFilter extends AbstractFilter{

    constructor(gl){
        super(gl);
    }

    prepare(){
        this.programGen.setFragmentMainFn(`
            gl_FragColor = texture2D(texture, v_texCoord)*0.3;
        `);
    }

    doFilter(srcTexture,destFrameBuffer){

    }

}