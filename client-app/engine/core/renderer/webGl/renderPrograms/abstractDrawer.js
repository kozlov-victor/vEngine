
export default class AbstractDrawer {

    static currentDrawer = null;
    program = null;
    uniformCache = {};
    posVertexBuffer = null;
    posIndexBuffer = null;
    texVertexBuffer = null;

    constructor(gl,game){
        this.gl = gl;
        this.game = game;
    }

    bind(){
        if (
            AbstractDrawer.currentDrawer!==null &&
            AbstractDrawer.currentDrawer!==this)
        {
            AbstractDrawer.currentDrawer.unbind();
        }
        AbstractDrawer.currentDrawer = this;
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