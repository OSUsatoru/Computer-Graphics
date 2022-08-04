# Animate a Helicopter
To animate a helicopter and look at it in two different 3D views.
![](../Gifs/project(2).gif)

## Instruction

* Draw a helicopter. (Don't worry -- this won't be as hard as it sounds.)
* The helicopter's 2 blades must be scaled properly.
* The helicopter's 2 blades must be oriented properly.
* The helicopter's 2 blades must be rotating properly.
* Allow two views: an "Outside" view of the entire scene and an "Inside" view from the helicopter cockpit. Toggle between them with a pop-up menu. (You can also use keyboard hits, but in-addition-to, not instead-of.) For each view, use a different call to gluLookAt( ) to position the eye. A good eye poition for your Inside View is (-0.4, 1.8, -4.9) . A good look-at position for your Inside View is (-0.4, 1.8, -10.) .
* Keep the same Xrot, Yrot, and Scale features as we've used before, but only in the Outside View. Do not use Xrot, Yrot, and Scale in the Inside View.
* Use gluPerspective( ), not glOrtho( ).
* Put some sort of 3D scene for your Inside Eye to see, looking outside the helicopter (off in the -Z direction). One or more GLUT wireframe objects might work well. Or, whatever you did in the first project. Or some sort of colored grid. Or, all of these things.
* Use the graphics programming strategy where the Display( ) function looks at a collection of global variables and draws the scene correctly. The other parts of the program simply set the global variables and post a redisplay.
* The code for creating the helicopter geometry is shown below in the Geometry section. The helicopter body extends along the Z axis. The heicopter cockpit points in -Z.
* There must be two blades drawn on the helicopter body: a large blade on the roof, oriented in the X-Z plane, and a small one on the tail, oriented in the Y-Z plane. Create a single blade display list and then transform and instance it twice to get the two blades in the scene. The code for creating the single blade geometry is shown below in the Geometry section. The single blade is in the X-Y plane, centered at (0.,0.,0.), with a radius of 1.0.
* The top helicopter blade is to have a final radius of 5.0 and be attached at: (0.,2.9,-2.).
* The rear helicopter blade is to have a final radius of 3.0 and be attached at: (.5,2.5,9.).
* Both blades need to rotate. The rotation rate is up to you, but the smaller one must rotate 2X as fast as the larger one. That is, for whatever amount you advance the rotation the large blade's rotation angle, advance the small blade's rotation angle 2X that amount.
* Pay close attention to the overall transformation sequence. You can re-use some of the transformations that you have already created by using glPushMatrix( ) and glPopMatrix( ).
* Parameterize your scene as much as you can with #define's or const's, It makes it easier to make changes later.
* Use GLUT pop-up menus for all options.