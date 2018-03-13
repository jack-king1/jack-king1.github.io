---
layout: post
title:  "Pong Game - Assignment"
date:   2018-03-13
excerpt: "Pong Game"
tag:
- blog
- c++
- low level programming
- Pong
comments: true
published: true
---
**Pong Game** The classic game "Pong" recreated by me. The game has single and multiplayer options. The balls can also collide while travelling making for interesting and unique gameplay.<br/>


#### What techniques did i use?
- Vectors
- Bounding Boxes
- Collision Detection (Registers when the ball hits another ball/paddle.)
<br/>


#### How do we check the click is within sprite bounding box?
```C++
	auto x_pos = clownfish->xPos();
	auto y_pos = clownfish->yPos();

	if ((x < (x_pos + clownfish->width()) && x > x_pos) && 
		(y < (y_pos + clownfish->height()) && y > y_pos))
	{
		return true;
	}

	return false;
```

#### How do we reset position?
~~~ C++
void NemoGame::spawn()
{
	clownfish->xPos(rand() % game_width);
	clownfish->yPos(rand() % game_height);
}
~~~

Some screenshot examples...
<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/img/NemoGame_LoadScreen.PNG?token=AexHW6x8LH4ApygCH3MKyqveXdAS1AaLks5asDfhwA%3D%3D"></a>
</figure>

<figure>
<a><img src="https://raw.githubusercontent.com/jack-king1/jack-king1.github.io/master/assets/img/NemiGame_Playing.PNG?token=AexHW7GG8eT9HCpR71tDjeB9O2AwdENyks5asEuEwA%3D%3D"></a>
</figure>

