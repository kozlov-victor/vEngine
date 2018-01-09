
import Plane from '../../../primitives/plane'
import ShaderProgram from '../../../base/shaderProgram'
import BufferInfo from "../../../base/bufferInfo";
import AbstractDrawer from "../../abstract/abstractDrawer";
import ColorShaderGenerator from "../../../shaders/generators/generic/colorShaderGenerator";

export default class ColorRectDrawer extends AbstractDrawer{

    private plane:Plane;

    constructor(gl){
        super(gl);
        this.plane = new Plane();
        let gen = new ColorShaderGenerator();
        this.program = new ShaderProgram(
            gl,
            gen.getVertexSource(),
            gen.getFragmentSource()
        );

        this.bufferInfo = new BufferInfo(gl,{
            posVertexInfo:{array: this.plane.vertexArr,type:gl.FLOAT,size:2,attrName:'a_position'},
            posIndexInfo: {array: this.plane.indexArr},
            drawMethod: this.gl.TRIANGLE_STRIP
        });
    }

}