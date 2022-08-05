# Lighting
Create a 3D animated scene that demonstrates dynamic OpenGL lighting.

![](../Gifs/project(4).gif)

## Instruction
1. Create a 3D scene consisting of at least 3 objects and at least 3 light sources:

    | Category | Minimum number | Minimum number |
    | -------- | -------------- | -------------- |
    | Light motion |	2 stationary|	1 moving|
    | Light types |	1 point|	1 spotlight|
    | Light colors |	1 white|	1 colored|
    | Object material |	1 shiny|	1 dull|
    | Object glShadeModel |	1 GL_FLAT|	1 GL_SMOOTH|
    | Object motion | 1 stationary|	1 moving|
    | Object texture |	1 lighted and textured| 1 lighted, not textured|

1. Notice that there really only needs to be 3 light sources total. Clearly you can be double-dipping with the motion, types, and colors.
1. Be sure to spread things out enough that we can see the effect of the 3 lights.
1. Use RGB color for each object's GL_FRONT.
   Use a shade of gray for each object's GL_BACK.
1. Put small spheres at the light source locations so that you and I can see where they are. Make each sphere the same color as the light source it is representing. Don't use lighting on the light-source spheres. Just make them glColor3f blobs with lighting disabled.
1. Feel free to use the OsuSphere, the GLUT solids, or OBJ files for your objects.
1. However, I recommend you use all OsuSphere objects at first, get the lighting working, then experiment with other objects.
1. If you use OBJ files, they will need to have per-vertex surface normal vectors. Edit the .obj file and look for lines that begin with the letters vn to see if it does.
1. If you use OBJ files for the textured object, that file will need to have per-vertex texture coordinates to see if it does. Edit the .obj file and look for lines that begin with the letters vt.
1. For the textured and lighted object, remember to use a texture environment of GL_MODULATE.
1. Warning: among the GLUT solids, only the sphere and teapot have texture coordinates built into them.
1. Remember that light positions automatically get transformed by the GL_MODELVIEW transformation as it exists at the moment you specify the light position. You can't prevent this from happening. You can only control the GL_MODELVIEW matrix to be what you need it to be at the time and control where in your code you specify the light source positions.
1. Enable the following keys:

    | Key | Description |
    | --- | ----------- |
    | '0' |	Toggle light #0 off/on |
    | '1' |	Toggle light #1 off/on |
    | '2' |	Toggle light #2 off/on |
    | 'f' |	Freeze/un-freeze the animation |

    Even if you weren't required to turn lights off and on, you would want to do it anyway. This really helps debug lighting programs.
1. You can do anything with the attenuation that you'd like.
1. Feel free to use the "Shortcut" functions from the Lighting notes.
1. Help us get the grading right! Even though you have lots of flexibility about how to create the scene, you must make it obvious to us that it is handling the lighting correctly! Narrating the video will help a lot.