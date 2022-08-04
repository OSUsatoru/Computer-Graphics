#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
out vec2  	vST;		// texture coords

out vec3 vN; // normal vector
out vec3 vL; // vector from point to light
out vec3 vE; // vector from point to eye

uniform bool uImUsingTheVertexShader;
uniform float uR;

const float PI = 	3.14159265;
const float AMP = 	1.;		// amplitude
const float W = 	3.;		// frequency

const vec3 LIGHTPOSITION = vec3( 8., 8., 0. );

void
main( )
{
	vST = gl_MultiTexCoord0.st;
	vec3 vert = gl_Vertex.xyz;


	vec4 ECposition = gl_ModelViewMatrix * gl_Vertex; // eye coordinate position
	vN = normalize( gl_NormalMatrix * gl_Normal ); // normal vector
	vL = LIGHTPOSITION - ECposition.xyz; // vector from the point to the light position
	vE = vec3( 0., 0., 0. ) - ECposition.xyz; // vector from the point to the eye position

	if(uImUsingTheVertexShader){
		// +-r (time 0 to 1) -> cos0 to cos1
		// x -> +-AMP -> x < AMP
		vert.x += AMP*cos(PI*2*uTime+vert.y*W);
		vert.y *= (vert.x/AMP);
		vert.z += sin(PI*2*uTime + vert.x+vert.y);
	}


	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}