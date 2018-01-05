
import Circle from "../../primitives/circle"
import ShaderProgram from "../../base/shaderProgram"
import VertexBuffer from "../../base/vertexBuffer"
import AbstractDrawer from "./../abstract/abstractDrawer"
import {simpleColorShaderGen as gen} from "../../shaders/shaderGenerator"
import BufferInfo from "../../base/bufferInfo";

export default class CircleDrawer extends AbstractDrawer {

    constructor(gl){
        super(gl);
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
