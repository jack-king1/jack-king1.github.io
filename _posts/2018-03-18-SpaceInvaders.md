---
layout: post
title:  "Space Invaders"
date:   2018-03-13
excerpt: "Space Invaders"
tag:
- blog
- c++
- low level programming
- Space Invaders
- Game Programming
comments: true
published: true
---
**Breakout Game** The game Space Invaders. This is a single player shoot-em game. The lasers are fired from the player ship at the bottom of the screen. The enemy or UFO shoot lasers back at the player and can be killed by the player lasers. Once all the UFPO have been shot, the UFO have fallen down the screen so they collide with the player or that the player is shot by an UFO laser the game ends.<br/>


#### What techniques did i use?
- Vectors
- Bounding Boxes 
- Collision Detection (Registers when the ball hits another ball/paddle.)
- Math - Sine, Quadratic, PI.
<br/>


#### How do we check that the laser is within a space invader?
I used AABB bounding boxes to check the collision of two objects. I would pass the position of two objects into a boolean function. If the objects are inside each other the function would return true and run the appropriate c e.g. change direction.


#### How do we reset position?
When the laser goes of the screen or collides with another laser the laser is set not-visible. This means the laser is therefore removed of the counter. The next laser that is shot will increment the laser_count variable.

Some screenshot examples...
<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/SpaceInvaders_Mainmenu.PNG?token=AexHW2f2cFAZIM4Nop4_hJdbnGZyRnCgks5asVDXwA%3D%3D"></a>
</figure>

<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/SpaceInvaders_GamePlay.PNG?token=AexHW5LXpLewaEgtDt7GW9I_471kCkaWks5asVG7wA%3D%3D"></a>
</figure>

<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/SpaceInvaders_LoseState.PNG?token=AexHW0oqrAyHwGHGh-fswVB_92PYsJ5iks5asVDpwA%3D%3D"></a>
</figure>
