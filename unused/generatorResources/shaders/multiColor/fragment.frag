precision mediump float;

varying vec4 v_color;

uniform sampler2D texture;
uniform float u_alpha;
uniform vec4 u_rgba;

void main() {
    gl_FragColor = v_color;
}