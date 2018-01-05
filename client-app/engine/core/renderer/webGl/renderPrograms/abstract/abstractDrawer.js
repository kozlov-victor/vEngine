
export default class AbstractDrawer {

    static currentInstance = null;
    program = null;
    uniformCache = {};
    posVertexBuffer = null; // todo remove
    posIndexBuffer = null;
    texVertexBuffer = null;

    bufferInfo;

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
        if (this.bufferInfo) this.bufferInfo.bind(this.program);
    }

    unbind(){
        if (this.posVertexBuffer) this.posVertexBuffer.unbind();
        if (this.posIndexBuffer) this.posIndexBuffer.unbind();
        if (this.texVertexBuffer) this.texVertexBuffer.unbind();
        if (this.bufferInfo) this.bufferInfo.unbind();
    }

    setUniform(name,value){
        if (this.uniformCache[name]===value) return;
        this.program.setUniform(name,value);
        this.uniformCache[name]=value;
    }

    draw(){
        this.bufferInfo.draw();
    }

}