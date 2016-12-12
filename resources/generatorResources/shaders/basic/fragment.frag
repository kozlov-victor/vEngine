precision mediump float;

varying vec2 v_texcoord;

uniform sampler2D texture;
uniform float u_alpha;
//uniform vec4 u_rgb;

void main() {
    gl_FragColor = texture2D(texture, v_texcoord);
    gl_FragColor.a *= u_alpha;
}