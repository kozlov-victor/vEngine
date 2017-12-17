
export default class AbstractDrawer {

    static currentDrawer = null;
    program = null;
    uniformCache = {};

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
        this.posIndexBuffer.unbind();
    }

    setUniform(name,value){
        if (this.uniformCache[name]===value) return;
        this.program.setUniform(name,value);
        this.uniformCache[name]=value;
    }



}