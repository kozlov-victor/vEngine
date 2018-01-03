
export default class AbstractDrawer {

    static currentInstance = null;
    program = null;
    uniformCache = {};
    posVertexBuffer = null;
    posIndexBuffer = null;
    texVertexBuffer = null;

    constructor(gl){
        this.gl = gl;
    }

    bind(){
        if (
            AbstractDrawer.currentInstance!==null &&
            AbstractDrawer.currentInstance!==this)
        {
            AbstractDrawer.currentInstance.unbind();
        }
        AbstractDrawer.currentInstance = this;
    }

    unbind(){
        this.posVertexBuffer.unbind();
        if (this.posIndexBuffer) this.posIndexBuffer.unbind();
        if (this.texVertexBuffer) this.texVertexBuffer.unbind();
    }

    setUniform(name,value){
        if (this.uniformCache[name]===value) return;
        this.program.setUniform(name,value);
        this.uniformCache[name]=value;
    }

}