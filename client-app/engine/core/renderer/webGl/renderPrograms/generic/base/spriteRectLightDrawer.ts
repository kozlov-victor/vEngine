
import SpriteRectDrawer from "./spriteRectDrawer";
import TexShaderGenerator from "../../../shaders/generators/generic/texShaderGenerator";
import ShaderProgram from "../../../base/shaderProgram";
import {GL_TYPE} from "../../../base/shaderProgramUtils";
import Texture from "../../../base/texture";


export default class SpriteRectLightDrawer extends SpriteRectDrawer {

    constructor(gl){
        let gen = new TexShaderGenerator();
        gen.prependFragmentCodeBlock(`
            struct PointLight {
                vec2 pos;
                vec4 color;
                float radius;
            };
            struct AmbientLight {
                vec4 color;
            };
        `);
        gen.addFragmentUniform("PointLight",'u_pointLight');
        gen.addFragmentUniform(GL_TYPE.FLOAT_VEC4,'u_lightColor');
        gen.addFragmentUniform("AmbientLight",'u_ambientLight');

        gen.setFragmentMainFn(`
            vec4 texColor = texture2D(texture, v_texCoord);
            vec4 lightResult = u_ambientLight.color;
            float dist = length(u_pointLight.pos.xy-gl_FragCoord.xy);
            //float attenuation = 0.8;
            if (dist<u_pointLight.radius) {
                lightResult+=u_pointLight.color;
            }
            lightResult*=texColor;
            gl_FragColor = lightResult;
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