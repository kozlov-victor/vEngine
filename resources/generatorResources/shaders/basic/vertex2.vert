attribute vec4 a_position;
attribute vec2 a_texcoord;
//attribute vec4 a_normal;

uniform mat4 u_matrix;

varying vec2 v_texcoord;
//varying float v_directionLightFactor;

void main() {

  gl_Position = u_matrix * a_position;
  v_texcoord = a_texcoord;
  //v_directionLightFactor = dot(a_normal,vec4(1.0,0,0,0));
}