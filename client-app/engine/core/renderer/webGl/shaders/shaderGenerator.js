
import {GL_TYPE} from '../base/shaderProgramUtils'

let _cloneArray = arr=>{
    return arr.map(item=>item);
};

export default class ShaderGenerator {

    vertexUniforms = [];
    fragmentUniforms = [];
    attributes = [];
    varyings = [];
    vertexMainFn = '';
    fragmentMainFn = '';

    constructor(){}

    addVertexUniform(type,name){
        this.vertexUniforms.push({type,name});
        return this;
    }

    addFragmentUniform(type,name){
        this.fragmentUniforms.push({type,name});
        return this;
    }

    addAttribute(type,name){
        this.attributes.push({type,name});
        return this;
    }

    addVarying(type,name){
        this.varyings.push({type,name});
        return this;
    }

    setVertexMainFn(fnCode){
        this.vertexMainFn = fnCode;
        return this;
    }

    setFragmentMainFn(fnCode){
        this.fragmentMainFn = fnCode;
        return this;
    }

    getVertexSource(){
        return (
            `
            ${this.vertexUniforms.map(u=>`uniform   ${u.type} ${u.name};`).join('\n')}
            ${this.attributes.map(    u=>`attribute ${u.type} ${u.name};`).join('\n')}
            ${this.varyings.map(      u=>`varying   ${u.type} ${u.name};`).join('\n')}
            void main() {
               ${this.vertexMainFn}
            }
            `.replace(/\s{2,}/,' ').replace(/\t/,'')
        )
    }

    getFragmentSource(){
        return (
            // lowp, mediump, highp
            `
            precision mediump float;
            ${this.fragmentUniforms.map(u=>`uniform ${u.type} ${u.name};`).join('\n')}
            ${this.varyings.map(        u=>`varying ${u.type} ${u.name};`).join('\n')}
            void main() {
               ${this.fragmentMainFn}
            }
            `.replace(/\s{2,}/,' ').replace(/\t/,'')
        )
    }

    debug(){
        console.log(this.getVertexSource());
        console.log(this.getFragmentSource());
    }

    clone(){
        let cloned = new ShaderGenerator();
        cloned.vertexUniforms = _cloneArray(this.vertexUniforms);
        cloned.fragmentUniforms = _cloneArray(this.fragmentUniforms);
        cloned.attributes = _cloneArray(this.attributes);
        cloned.varyings = _cloneArray(this.varyings);
        cloned.vertexMainFn = this.vertexMainFn;
        cloned.fragmentMainFn = this.fragmentMainFn;
        return cloned;
    }

}


//position and color
let colShdr = new ShaderGenerator();
colShdr.addAttribute(GL_TYPE.FLOAT_VEC4,'a_position');
colShdr.addVertexUniform(GL_TYPE.FLOAT_MAT4,'u_vertexMatrix');
colShdr.setVertexMainFn(`
    gl_Position = u_vertexMatrix * a_position;
`);
colShdr.addFragmentUniform(GL_TYPE.FLOAT,'u_alpha');
colShdr.addFragmentUniform(GL_TYPE.FLOAT_VEC4,'u_rgba');
colShdr.setFragmentMainFn(`
    gl_FragColor = u_rgba;
`);


//position and texture
let texShdr = new ShaderGenerator();
texShdr.addAttribute(GL_TYPE.FLOAT_VEC4,'a_position');
texShdr.addAttribute(GL_TYPE.FLOAT_VEC2,'a_texCoord');
texShdr.addVertexUniform(GL_TYPE.FLOAT_MAT4,'u_vertexMatrix');
texShdr.addVertexUniform(GL_TYPE.FLOAT_MAT4,'u_textureMatrix');
texShdr.addVarying(GL_TYPE.FLOAT_VEC2,'v_texCoord');
texShdr.setVertexMainFn(`
    gl_Position = u_vertexMatrix * a_position;
    v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy; 
`);
texShdr.addFragmentUniform(GL_TYPE.SAMPLER_2D,'texture');
texShdr.addFragmentUniform(GL_TYPE.FLOAT,'u_alpha');
texShdr.setFragmentMainFn(`
    gl_FragColor = texture2D(texture, v_texCoord);
    gl_FragColor.a *= u_alpha;
`);

export let simpleColorShaderGen = colShdr;
export let textureShaderGen = texShdr;