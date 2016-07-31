//vertex shader

attribute vec3 aVertexPosition;
attribute vec3 aVertexColor;

uniform mat4 uPMatrix;
uniform mat4 uMMatrix;
uniform mat4 uVMatrix;

varying vec3 vColor;

void main(void){
gl_Position = uPMatrix*uVMatrix*uMMatrix* vec4(aVertexPosition,1.0);
vColor = aVertexColor;
}
