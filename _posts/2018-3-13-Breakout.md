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
- Game Programming
comments: true
published: true
---
**Breakout Game** The game Galaga/Breakout. This is a single player break the block game. The balls collide with the blocks at the top of the screen. The player gets points every time the player removes a block by colliding the ball with blocks.<br/>


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
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/img/pong_main_menu.PNG?token=AexHW6RXCyC29X9acH569SGx-J6QkR0Mks5asTcNwA%3D%3D"></a>
</figure>

<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/img/Pong_GamePlay.PNG?token=AexHW_cfvohQNErX0w6zaH5Cnq7zCCYTks5asTjAwA%3D%3D"></a>
</figure>

<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/img/Pong_LoseState.PNG?token=AexHW8WcZ28lMGTOF63wdoIfFejyDbjHks5asUJNwA%3D%3D"></a>
</figure>

