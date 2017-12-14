precision mediump float;

varying vec2 v_texcoord;

uniform sampler2D texture;
uniform float u_alpha;
uniform vec4 u_rgba;

void main() {
    gl_FragColor = u_rgba;
}