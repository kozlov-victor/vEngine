
export class ShaderGenerator {

    private vertexUniforms:Array<any> = [];
    private fragmentUniforms:Array<any> = [];
    private attributes:Array<any> = [];
    private varyings:Array<any> = [];
    private appendedFragCodeBlocks:Array<any> = [];
    private appendedVertexCodeBlocks:Array<any> = [];
    private prependedVertexCodeBlocks:Array<any> = [];
    private prependedFragCodeBlocks:Array<any> = [];
    private vertexMainFn:string = '';
    private fragmentMainFn:string = '';

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

    appendVertexCodeBlock(code){
        this.appendedVertexCodeBlocks.push(code);
    }

    appendFragmentCodeBlock(code){
        this.appendedFragCodeBlocks.push(code);
    }

    prependVertexCodeBlock(code){
        this.prependedVertexCodeBlocks.push(code);
    }

    prependFragmentCodeBlock(code){
        this.prependedFragCodeBlocks.push(code);
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
            ${this.prependedVertexCodeBlocks.map(v=>`${v}`).join('\n')}
            
            ${this.vertexUniforms.map(  u=>`uniform   ${u.type} ${u.name};`).join('\n')}
            ${this.attributes.map(      u=>`attribute ${u.type} ${u.name};`).join('\n')}
            ${this.varyings.map(        u=>`varying   ${u.type} ${u.name};`).join('\n')}
            ${this.appendedVertexCodeBlocks.map(v=>`${v}`).join('\n')}
           
            ${this.vertexMainFn}
            
            `.replace(/\t/g, '')
        )
    }

    getFragmentSource():string{
        return (
            // lowp, mediump, highp
            `
            precision mediump float;
            
            ${this.prependedFragCodeBlocks.map(v=>`${v}`).join('\n')}
            
            ${this.fragmentUniforms.map(u=>`uniform ${u.type} ${u.name};`).join('\n')}
            ${this.varyings.map(        u=>`varying ${u.type} ${u.name};`).join('\n')}
            ${this.appendedFragCodeBlocks.map(v=>`${v}`).join('\n')}
            
            ${this.fragmentMainFn}
            
            `.replace(/\t/g, '')
        )
    }

    debug(){
        console.log(this.getVertexSource());
        console.log(this.getFragmentSource());
    }

}
