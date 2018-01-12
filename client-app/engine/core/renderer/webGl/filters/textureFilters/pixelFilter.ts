
// http://www.geeks3d.com/20101029/shader-library-pixelation-post-processing-effect-glsl/
// adopted to webGl ES

import AbstractFilter from "../abstract/abstractFilter";
import ShaderGenerator from "../../shaders/generators/shaderGenerator";
import {GL_TYPE} from "../../base/shaderProgramUtils";
import Texture from "../../base/texture";
import FrameBuffer from "../../base/frameBuffer";

export default class PixelFilter extends AbstractFilter {

    constructor(gl: WebGLRenderingContext) {
        super(gl);
    }

    prepare(programGen:ShaderGenerator){
        programGen.addFragmentUniform(GL_TYPE.FLOAT,' rt_w'); // render target width
        programGen.addFragmentUniform(GL_TYPE.FLOAT,' rt_h'); // render target height
        programGen.addFragmentUniform(GL_TYPE.FLOAT,' pixel_w');
        programGen.addFragmentUniform(GL_TYPE.FLOAT,' pixel_h');
        programGen.setFragmentMainFn(`
            vec2 uv = v_texCoord.xy;
            vec3 tc = vec3(1.0, 0.0, 0.0);
            float dx = pixel_w*(1./rt_w);
            float dy = pixel_h*(1./rt_h);
            vec2 coord = vec2(dx*floor(uv.x/dx),
                              dy*floor(uv.y/dy));
            tc = texture2D(texture, coord).rgb;
            gl_FragColor = vec4(tc, 1.0);
            `
        );
        this.setParam('pixel_w',5);
        this.setParam('pixel_h',5);
    }

    doFilter(srcTexture:Texture,destFrameBuffer:FrameBuffer){
        this.setParam('rt_w',srcTexture.size.width);
        this.setParam('rt_h',srcTexture.size.height);
        super.doFilter(srcTexture,destFrameBuffer);
    }

}