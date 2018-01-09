
import Circle from "../../../primitives/circle"
import ShaderProgram from "../../../base/shaderProgram"
import AbstractDrawer from "./../../abstract/abstractDrawer"
import BufferInfo from "../../../base/bufferInfo";
import ColorShaderGenerator from "../../../shaders/generators/generic/colorShaderGenerator";

export default class CircleDrawer extends AbstractDrawer {

    private circle:Circle; // todo move to parent as abstract shape

    constructor(gl:WebGLRenderingContext){
        super(gl);
        let gen = new ColorShaderGenerator();
        this.program = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        this.circle = new Circle();

        this.bufferInfo = new BufferInfo(gl,{
            posVertexInfo:{array: this.circle.vertexArr,type:gl.FLOAT,size:2,attrName:'a_position'},
            drawMethod: this.gl.TRIANGLE_FAN
        });
    }



}
