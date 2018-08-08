//position and color

attribute vec4 a_position;
attribute vec4 a_color;

uniform mat4 u_PositionMatrix;

varying vec4 v_color;

void main() {
   gl_Position = u_PositionMatrix * a_position;
   v_color = a_color;
}