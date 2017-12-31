
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

/*

attribute vec4 a_position;
attribute vec4 a_color;

uniform mat4 u_PositionMatrix;

varying vec4 v_color;

void main() {
   gl_Position = u_PositionMatrix * a_position;
   v_color = a_color;
}

----

precision mediump float;

uniform float u_alpha;
uniform vec4 u_rgba;

void main() {
    gl_FragColor = u_rgba;
}

 */
//position and color

let gen = new ShaderGenerator();
gen.addAttribute('vec4','a_position');
//gen.addAttribute('vec4','a_color');
gen.addVertexUniform('mat4','u_vertexMatrix');
//gen.addVarying('vec4','v_color');
gen.setVertexMainFn(`
    gl_Position = u_vertexMatrix * a_position;
    //v_color = a_color;
`);
gen.addFragmentUniform('float','u_alpha');
gen.addFragmentUniform('vec4','u_rgba');
gen.setFragmentMainFn(`
    gl_FragColor = u_rgba;
`);
export let simpleColorShaderGen = gen;