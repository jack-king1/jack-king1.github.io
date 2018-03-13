---
layout: post
title:  "Nemo Game Worksheet"
date:   2018-03-13
excerpt: "Nemo Game"
tag:
- blog
- c++
- low level programming
- Nemo Game
comments: true
published: true
---
**Nemo Game** The "Nemo Game" involves a fish and the players mouse. The fish spawns at a random height within the game window. The users goal is then to be ablew to click the fish. If the user fails to click the fish before it exits the screen the fish will loop back around to the left side of the screen. (The fish travels left to right).<br/>

#### What techniques did i use?
- Random Function
- Bounding Boxes
- Click Handler (Registers users mouse location and click input.)
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

