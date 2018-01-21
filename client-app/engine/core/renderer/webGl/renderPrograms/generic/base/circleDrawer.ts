
import Circle from "../../../primitives/circle"
import ShaderProgram from "../../../base/shaderProgram"
import AbstractDrawer from "./../../abstract/abstractDrawer"
import BufferInfo from "../../../base/bufferInfo";
import ColorShaderGenerator from "../../../shaders/generators/generic/colorShaderGenerator";

export default class CircleDrawer extends AbstractDrawer {

    constructor(gl:WebGLRenderingContext){
        super(gl);
        let gen = new ColorShaderGenerator();
        this.program = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        this.primitive = new Circle();

        this.bufferInfo = new BufferInfo(gl,{
            posVertexInfo:{array: this.primitive.vertexArr,type:gl.FLOAT,size:2,attrName:'a_position'},
            drawMethod: this.gl.TRIANGLE_FAN
        });
    }



}
