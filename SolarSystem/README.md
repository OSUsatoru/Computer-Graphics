# Solar System

![](../Gifs/project(7).gif)

## Instruction
1. If you scale everything accurately, you will see nothing on the screen. Space really is mostly empty space.
1. Therefore you have to exaggerate one, and maybe both of:
    * Planet diameter
    * Planet orbital radius
1. When you exaggerate, keep everything to scale, except, possibly the Sun's diameter. If Planet A's diameter is twice as big as Planet B's in real life, make sure it is still twice as big in your scaled-life. And so on.
1. You need to follow Kepler's Third law of planetary motion:
1. Orbital Period is proportional to OrbitalRadius<sup>3/2</sup> = pow( OrbitalRadius, 3./2. )
1. Get this right!
1. But, you will also need to scale the orbital periods, or the outer planets will not appear to move at all. Again, keep the orbital periods proportional. If Planet A's orbital period is twice as long as Planet B's in Kepler's Third Law, make sure it is still twice as long in your scaled-life.
1. Even though the planets' orbits are really elliptical, you may treat them as circular. (They are only elliptical by a little bit.)
1. Be careful of Temporal Aliasing (the wagon-wheel-spokes-rotating-backwards effect) on the fast-orbiting inner planets. This is part of what makes this project interesting. Pick an orbital period scale factor where the inner planets do not move too quickly, but the outer planets do not move too slowly.
1. Find good textures or good coloring for the sun and all the planets. NASA has some at: https://nasa3d.arc.nasa.gov/images.
1. Have a good outside viewing option where we can see everything.
1. Do point-light lighting from the Sun. Throw a little ambient in there too.
1. Do not call the OsuSphere( ) function directly from inside of your Display( ) callback. You would end up paying for all those sine and cosine calls each display update, which would ruin your graphics performance. Instead, put each planet into its own Display List and then glCallList( ) it from within Display( ).
1. NASA has some really good 3D overall resources here: https://nasa3d.arc.nasa.gov/ and here: https://svs.gsfc.nasa.gov/ You can find a good Moon texture here: https://svs.gsfc.nasa.gov/4720
1. There are also some great things here: https://www.solarsystemscope.com/textures/