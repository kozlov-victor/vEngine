
import SpriteRectDrawer from "./spriteRectDrawer";
import TexShaderGenerator from "../../../shaders/generators/generic/texShaderGenerator";
import ShaderProgram from "../../../base/shaderProgram";
import {GL_TYPE} from "../../../base/shaderProgramUtils";
import Texture from "../../../base/texture";


export default class SpriteRectLightDrawer extends SpriteRectDrawer {

    constructor(gl){
        let gen = new TexShaderGenerator();
        //language=GLSL
        gen.prependFragmentCodeBlock(`
            struct PointLight {
                vec2 pos;
                vec4 color;
                float nearRadius;
                float farRadius;
                bool isOn;
            };
            struct AmbientLight {
                vec4 color;
            };
            vec4 lightEffect(PointLight lgt){
                vec4 result = vec4(0);
                float atten = 0.0;
                float dist = length(lgt.pos - gl_FragCoord.xy);
                if (dist<=lgt.farRadius) {
                    if (dist<=lgt.nearRadius) atten = 1.0;
                    else {
                        float n = dist - lgt.nearRadius;
                        float d = lgt.farRadius - lgt.nearRadius;
                        atten = smoothstep(0.0,1.0,1.0 - (n*n)/(d*d));
                    }
                }
                result = atten * lgt.color; // * lgt.intensity
                return result;
            }
        `);
        gen.addFragmentUniform("PointLight",'u_pointLight');
        gen.addFragmentUniform("AmbientLight",'u_ambientLight');

        gen.setFragmentMainFn(`
            vec4 texColor = texture2D(texture, v_texCoord);
            vec4 lightResult = u_ambientLight.color;
            
            if (u_pointLight.isOn) lightResult+=lightEffect(u_pointLight);
            
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