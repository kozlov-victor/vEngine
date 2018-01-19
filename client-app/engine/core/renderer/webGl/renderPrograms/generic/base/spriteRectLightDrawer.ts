
import SpriteRectDrawer from "./spriteRectDrawer";
import TexShaderGenerator from "../../../shaders/generators/generic/texShaderGenerator";
import ShaderProgram from "../../../base/shaderProgram";
import {GL_TYPE} from "../../../base/shaderProgramUtils";
import Texture from "../../../base/texture";


export default class SpriteRectLightDrawer extends SpriteRectDrawer {

    constructor(gl){
        let gen = new TexShaderGenerator();
        gen.addFragmentUniform(GL_TYPE.FLOAT_VEC2,'u_lightPos');
        gen.addFragmentUniform(GL_TYPE.FLOAT,'u_lightRadius');
        //gen.addFragmentUniform(GL_TYPE.FLOAT_VEC4,'u_spriteScreenRect');
        gen.setFragmentMainFn(`
            vec4 colResult = texture2D(texture, v_texCoord);
            float dist = length(u_lightPos.xy-gl_FragCoord.xy);
            float attenuation = 0.8;
            if (dist<u_lightRadius) {
                attenuation = 1.;
            }
            gl_FragColor = colResult*attenuation;
            gl_FragColor.a *= u_alpha;
        `);
        let program:ShaderProgram = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        super(gl,program);
    }
}