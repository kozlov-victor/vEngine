
import SpriteRectDrawer from "./spriteRectDrawer";
import TexShaderGenerator from "../../../shaders/generators/generic/texShaderGenerator";
import ShaderProgram from "../../../base/shaderProgram";
import {GL_TYPE} from "../../../base/shaderProgramUtils";
import Texture from "../../../base/texture";
import LightArray from "../../../../../light/lightArray";


export default class SpriteRectLightDrawer extends SpriteRectDrawer {

    constructor(gl){
        let gen = new TexShaderGenerator();
        //language=GLSL
        gen.prependFragmentCodeBlock(`
            #define NUM_OF_LIGHT_IN_VIEW ${LightArray.NUM_OF_LIGHT_IN_VIEW}
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
            vec4 lightEffect(PointLight lgt, vec4 normal){
                vec4 result = vec4(0);
                float atten = 0.0;
                vec3 l = vec3(lgt.pos.xy,0) - gl_FragCoord.xyz; // todo optimize
                float dist = length(lgt.pos - gl_FragCoord.xy);
                if (dist<=lgt.farRadius) {
                    if (dist<=lgt.nearRadius) atten = 1.0;
                    else {
                        float n = dist - lgt.nearRadius;
                        float d = lgt.farRadius - lgt.nearRadius;
                        atten = smoothstep(0.0,1.0,1.0 - (n*n)/(d*d));
                    }
                    if (normal.a>0.0) {
                        vec4 normalMap = (2.*normal) - 1.;
                        vec3 N = normalize(normalMap.xyz);
                        l = l / dist;
                        float nDotL = max(0.,dot(N,l));
                        atten*=nDotL;
                    }
                }
                result = atten * lgt.color; // * lgt.intensity
                return result;
            }
        `);
        // program normal map gen 2 * (color - vec3(0.5))
        gen.addFragmentUniform("PointLight",'u_pointLights[NUM_OF_LIGHT_IN_VIEW]');
        gen.addFragmentUniform("AmbientLight",'u_ambientLight');
        gen.addFragmentUniform(GL_TYPE.SAMPLER_2D,'normalTexture');
        gen.addFragmentUniform(GL_TYPE.BOOL,'u_useNormalMap');
        //language=GLSL
        gen.setFragmentMainFn(`
            void main(){
                vec4 texColor = texture2D(texture, v_texCoord); // todo u_texture
                vec4 normal = u_useNormalMap?
                    texture2D(normalTexture,v_texCoord):
                    vec4(0);
                
                vec4 lightResult = u_ambientLight.color; // * u_ambientLight.intensity
                
                // chech .a
                for (int i=0;i<NUM_OF_LIGHT_IN_VIEW;i++) {
                    if (u_pointLights[i].isOn) lightResult+=lightEffect(u_pointLights[i], normal);
                }
                
                lightResult*=texColor;
                gl_FragColor = lightResult;
                gl_FragColor.a *= u_alpha;
            }
        `);
        let program:ShaderProgram = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        super(gl,program);
    }
}