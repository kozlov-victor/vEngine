// texture and color

precision mediump float;

varying vec2 v_texcoord;

uniform sampler2D texture;
uniform float u_alpha;
uniform vec2 u_offsetCoords;
uniform vec4 u_frameCoords;

void main() {
    vec2 localTextCoord = mod(
        v_texcoord + fract(u_offsetCoords),
        u_frameCoords.zw
    ) + u_frameCoords.xy;
    gl_FragColor = texture2D(texture, localTextCoord);
    gl_FragColor.a *= u_alpha;

}


// vec2 localTextCoord = mod(v_texcoord + fract(u_offsetCoords),vec2(1,1));