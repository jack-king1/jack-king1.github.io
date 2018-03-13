---
layout: post
title:  "Breakout/Arkanoid Game - Assignment"
date:   2018-03-13
excerpt: "Breakout"
tag:
- blog
- c++
- low level programming
- Breakout
- Arkanoid
- Game Programming
comments: true
published: true
---
**Breakout Game** The game Arkanoid/Breakout. This is a single player break the block game. The balls collide with the blocks at the top of the screen. The player gets points every time the player removes a block by colliding the ball with blocks.<br/>


#### What techniques did i use?
- Vectors
- Bounding Boxes
- Collision Detection (Registers when the ball hits another ball/paddle.)
<br/>


#### How do we check the click is within ball hits the bounding box?
I used AABB bounding boxes to check the collision of two objects. I would pass the position of two objects into a boolean function. If the objects are inside each other the function would return true and run the appropriate c e.g. change direction.


#### How do we reset position?
When the ball goes of the screen the ball will be reset with reversed vectors in the centre of the screen.

Some screenshot examples...
<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/img/Breakout_Mainmenu.PNG?token=AexHWypdD7b3SGvejYnzZ_SXzH6CkNNlks5asUqVwA%3D%3D"></a>
</figure>

<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/img/Breakout_Gameplay.PNG?token=AexHWzi557-AipORMxx3NsV7BFpWyur-ks5asVTVwA%3D%3D"></a>
</figure>

<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/img/Breakout_LoseState.PNG?token=AexHW2oEC1yxDPJ-lkfKzOjN1n6pLbcSks5asUvHwA%3D%3D"></a>
</figure>

