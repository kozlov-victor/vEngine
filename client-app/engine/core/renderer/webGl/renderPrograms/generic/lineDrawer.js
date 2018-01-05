
import Line from '../../primitives/line'
import ShaderProgram from '../../base/shaderProgram'
import BufferInfo from "../../base/bufferInfo";

import AbstractDrawer from "../abstract/abstractDrawer";
import {simpleColorShaderGen as gen} from "../../shaders/shaderGenerator"

export default class LineDrawer extends AbstractDrawer {

    constructor(gl){
        super(gl);
        this.program = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );
        this.line = new Line();

        this.bufferInfo = new BufferInfo(gl,{
            posVertexInfo:{array: this.line.vertexArr,type:gl.FLOAT,size:2,attrName:'a_position'},
            drawMethod: this.gl.LINE_STRIP
        });
    }

}