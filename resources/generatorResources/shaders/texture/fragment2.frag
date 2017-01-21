precision mediump float;

varying vec2 v_texcoord;
//varying float v_directionLightFactor;

uniform sampler2D texture;
uniform float u_alpha;


void main() {
    gl_FragColor = texture2D(texture, v_texcoord);
    //gl_FragColor.r = v_directionLightFactor;
    gl_FragColor.a *= u_alpha;
}