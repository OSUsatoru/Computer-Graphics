# Texture Mapping
To map a texture (your choice) to an object (your choice) and then distort it in some way. What you do here is up to you, but make it more than trivial. But, whatever you do, make it so that you could not do the same thing with a texture transformation. That is, no rigid body rotates, scales, or translates. That is, the distortion must be different all over the object.

![](../Gifs/project(3).gif)

## Instruction

* Read in a texture image. The choice of image is up to you. You can use the BmpToTexture( ) function if you want, but you don't have to. (Chose the image wisely. Some older graphics cards require the dimensions of this image be powers of two.)
* Create a 3D object that has texture coordinates (s,t) at the vertices, specified by glTexCoord2f( ) calls before each call to glVertex3f( ). Since you will be modifying the creation of the (s,t) texture coordinates, this needs to be an object that you have source-code control over. A cube would work, but is boring. Whatever you did for Project #1 might work. A sphere would work.
* Under control of your GLUT Idle Function, animate the texture distortion.
* Under control of a right-mouse-button menu option, allow the object to be displayed:
* With no texture -- just an unlit blob-ish color.
* With your texture image GL_REPLACE'ed on it.
* With some distortion of the texture-image GL_REPLACE'ed on it.
* The distortion should be done by re-drawing the object with a distorted texture coordinate pattern.