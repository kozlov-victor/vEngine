
import AbstractBlendDrawer from "../../abstract/abstractBlendDrawer";

export default class MultBlendDrawer extends AbstractBlendDrawer{

    constructor(gl){
        super(gl);
    }

    prepare(programGen){
        programGen.setFragmentMainFn(`
            vec4 srcColor =  texture2D(texture, v_texCoord)*2.0;
            srcColor.a *= u_alpha;
            vec4 destColor = texture2D(destTexture, v_destTexCoord.xy);
            vec4 res = min(srcColor + destColor,vec4(1.0));
            gl_FragColor = res;
        `);
    }


}