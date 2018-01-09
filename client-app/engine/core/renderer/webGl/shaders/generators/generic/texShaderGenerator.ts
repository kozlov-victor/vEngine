
import {GL_TYPE} from '../../../base/shaderProgramUtils'
import ShaderGenerator from '../shaderGenerator'

//position and texture
export default class TexShaderGenerator extends ShaderGenerator{

    constructor(){
        super();
        this.addAttribute(GL_TYPE.FLOAT_VEC4,'a_position');
        this.addAttribute(GL_TYPE.FLOAT_VEC2,'a_texCoord');
        this.addVertexUniform(GL_TYPE.FLOAT_MAT4,'u_vertexMatrix');
        this.addVertexUniform(GL_TYPE.FLOAT_MAT4,'u_textureMatrix');
        this.addVarying(GL_TYPE.FLOAT_VEC2,'v_texCoord');
        this.setVertexMainFn(`
            gl_Position = u_vertexMatrix * a_position;
            v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy; 
        `);
        this.addFragmentUniform(GL_TYPE.SAMPLER_2D,'texture');
        this.addFragmentUniform(GL_TYPE.FLOAT,'u_alpha');
        this.setFragmentMainFn(`
            gl_FragColor = texture2D(texture, v_texCoord);
            gl_FragColor.a *= u_alpha;
        `);
    }

}