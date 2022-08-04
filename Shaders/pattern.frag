#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )

in vec2  	vST;		// texture coords

in vec3 vN; // normal vector
in vec3 vL; // vector from point to light
in vec3 vE; // vector from point to eye

uniform bool uImUsingTheFragmentShader;
uniform float uS0, uT0, uSize, uKa, uKd, uKs, uShininess;
uniform vec3 uSpecularColor; // light color

const float PI = 	3.14159265;
const float W = 	3.;		// frequency

void
main( )
{

	vec3 myColor;

	vec3 Normal = normalize(vN);
	vec3 Light = normalize(vL);
	vec3 Eye = normalize(vE);

	if( uImUsingTheFragmentShader )
	{
		// uSize/2 is constant, cos(PI*2*uTime) = +-1

		if( abs(uS0*cos(PI*2*uTime*W) - uSize/2.) <= vST.s || abs(uT0*sin(PI*2*uTime*W) - uSize/2.) <= vST.t  )
		{
			myColor = vec3( sin(PI*2*uTime), uTime, cos(PI*2*uTime));
		}else{
			myColor = vec3( .5, .5 , .5 );
		}

	}else{
		if( abs(uS0 - uSize/2.) <= vST.s && abs(uT0*sin(PI*2) - uSize/2.) <= vST.t  ){
			myColor = vec3(  1., 0 , .0);
		}else{
			myColor = vec3( .5, .5 , .5 );
		}


	}

	vec3 ambient = uKa * myColor;

	float d = max( dot(Normal,Light), 0. ); // only do diffuse if the light can see the point
	vec3 diffuse = uKd * d * myColor;

	float s = 0.;
	if( dot(Normal,Light) > 0. ) // only do specular if the light can see the point
	{
	vec3 ref = normalize( reflect( -Light, Normal ) );
	s = pow( max( dot(Eye,ref),0. ), uShininess );
	}
	vec3 specular = uKs * s * uSpecularColor;

	gl_FragColor = vec4( ambient + diffuse + specular, 1. );



}