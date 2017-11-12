precision highp float;

varying vec2 v_texcoord;
varying vec3 v_normal;

uniform sampler2D texture;
uniform float u_alpha;
uniform mat4 u_modelMatrix;


void main() {

    vec3 lightDirection = normalize(vec3(-1,-1,1));
    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);
    float lightFactor = max(0.5,dot(lightDirection,normalized));
    gl_FragColor = texture2D(texture, v_texcoord);
    gl_FragColor.rgb *= lightFactor;
    gl_FragColor.a *= u_alpha;
}