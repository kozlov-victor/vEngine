precision mediump float; // lowp, mediump, highp

uniform float u_alpha;
uniform vec4 u_rgba;

void main() {
    gl_FragColor = u_rgba;
}