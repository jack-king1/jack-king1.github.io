---
layout: project
title: "Race To Space Networked C++"
date: 2019-06-25 16:54:46
author: Jack King
categories:
    - project
img: rts.png
thumb: thumb02.jpg
carousel:
    - rts1.jpg
    - rts2.jpg
    - rts3.jpg
    - rts4.jpg
    - rts5.jpg
    - rts6.jpg
tagged: Game Development, Team, Networking, C++, ASGE
client:
website:
---

#### Race To Space Networked C++

This was a group project to create a four player board game and digitise it to a turn-based multiplayer game for PC.

After concepting, designing, and testing our board game, we arrived at Race to Mars - a four player co-operative game where players work together to solve issues on their journey to Mars. Players win by reaching Mars, or lose by being overwhelmed by issues.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4ync8tz0woQ?si=g_Y44FA1kbbPDCRB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Creating and Joining a Game

To play, a game server instance must be running. Once a server is active, you can connect using the IP field in the game launcher. Servers work by a lobby system, so although the game is for four players only, multiple games can run simultaneously on any one server.

A tutorial is included in the game's main menu.

To get into the game itself, select "New Game" and you will be placed into a lobby. Once four players have joined and readied up, the game can begin.

#### Gameplay

<p>Each full rotation of the game, between 1 and 3 issue cards are drawn. Each issue card is either a modifier (a positive/negative modification of the current turn) or an issue (a problem to solve, with required Action Point values of 5, 10, or 15). To solve issues, you must put Action Points towards them. Action Points are gained each turn by rolling the dice, and additionally, buying items from the Supply Bay.</p>

<img src="{{ "/assets/img/project/rtm.jpeg" | prepend: site.baseurl
                }}">

<p?>To solve an issue you must be in the correct room of the ship - to move, click on the room you wish to go to. You can only move to rooms that neighbour your current one (E.G. you cannot jump from one side of the ship to the other), so to move across the board you must click to move in sequence. Moving costs 1 Action Point, except for a movement to your own room, which is free. To buy an item you must be in the supply bay. Items do not go towards movement points, they only assign to issues of their specified class.</p>

#### Team

<p>This project was put together by:</p>
<ul>
<li>Jack King (Card Programmer, networking)</li>
<li>Matt Filer (UI, networking, systems programmer)</li>
</ul>

<div style="display: flex;justify-content: center;align-items:center;margin:5px">
    <div><a href="https://github.com/jack-king1/Race-to-Mars" target="_blank" >
<img src="{{ "/assets/img/project/github.svg" | prepend: site.baseurl
                }}"></a></div>
    <h2>GitHub</h2>
