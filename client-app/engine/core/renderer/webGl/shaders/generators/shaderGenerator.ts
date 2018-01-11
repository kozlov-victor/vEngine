
export default class ShaderGenerator {

    vertexUniforms:Array<any> = [];
    fragmentUniforms:Array<any> = [];
    attributes:Array<any> = [];
    varyings:Array<any> = [];
    fragCodeBlocks:Array<any> = [];
    vertexCodeBlocks:Array<any> = [];
    vertexMainFn:string = '';
    fragmentMainFn:string = '';

    constructor(){}

    addVertexUniform(type:string,name:string){
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

    addVertexCodeBlock(code){
        this.vertexCodeBlocks.push(code);
    }

    addFragmentCodeBlock(code){
        this.fragCodeBlocks.push(code);
    }

    setVertexMainFn(fnCode){
        this.vertexMainFn = fnCode;
        return this;
    }

    setFragmentMainFn(fnCode){
        this.fragmentMainFn = fnCode;
        return this;
    }

    getVertexSource():string{
        return (
            `
            ${this.vertexUniforms.map(  u=>`uniform   ${u.type} ${u.name};`).join('\n')}
            ${this.attributes.map(      u=>`attribute ${u.type} ${u.name};`).join('\n')}
            ${this.varyings.map(        u=>`varying   ${u.type} ${u.name};`).join('\n')}
            ${this.vertexCodeBlocks.map(v=>`${v}`).join('\n')}
            void main() {
               ${this.vertexMainFn}
            }
            `.replace(/\s{2,}/,' ').replace(/\t/,'')
        )
    }

    getFragmentSource():string{
        return (
            // lowp, mediump, highp
            `
            precision mediump float;
            ${this.fragmentUniforms.map(u=>`uniform ${u.type} ${u.name};`).join('\n')}
            ${this.varyings.map(        u=>`varying ${u.type} ${u.name};`).join('\n')}
            ${this.fragCodeBlocks.map(  v=>`${v}`).join('\n')}
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

}