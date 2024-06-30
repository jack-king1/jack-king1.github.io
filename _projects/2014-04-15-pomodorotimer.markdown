---
layout: project
title: "Pomodoro Timer"
date: 2014-04-25 16:54:46
author: Jack King
categories:
    - project
img: pomodoro.png
thumb: thumb02.jpg
carousel:
    - pomodoro01.jpg
    - pomodoro02.jpg
    - pomodoro03.jpg
tagged: React, Web Development, MSSQL, API
client:
website:
---

#### Pomodoro Timer

<h2>What is PomoRelax?</h2>>
Pomorelax is a pomodoro timer with a todo list. Users can sign in using google, save to do lists to be available from any pc.

<img src="{{ "/assets/img/project/pomodoro.gif" | prepend: site.baseurl
                }}">

<h3>Technologies</h3>
<ul>
<li>React</li>
<li>Tailwind</li>
<li>MSSQL</li>
<li>NodeJS</li>
<li>Express</li>
<li>Google OAuth</li>
<li>Fetch / API</li>
<li>Pexels API</li>
 </ul>

 <h3>Current Features</h3>
 <ol>
<li>Pomodoro Timer</li> 
<li>Login with google</li> 
<li>Save tasks to database</li> 
 </ol>

 <h3>Future Features</h3>
  <ul>
<li>Customse pomodoro dashboard</li> 
<li>customisable background images, currently its random image with a theme "nature".</li> 
<li>Toggle light/dark mode</li> 
<li>Movable widgets using canvas or a third party library.</li>
 </ul>

 <h3>Post-Mortem</h3>
 <h4>What I Learned</h4>
 <p>So far i have learned about how to implement timers in a browser where users are swapping windows and ensuring the timer stays the correct time due to resource allocation and intervals running slower when tabbed. I overcame this by using date and the difference between when the timer started and the current time. I also added google OAuth login so users can access their todos from different machines.</p>

 <div style="display: flex;justify-content: center;align-items:center;margin:5px">
    <div><a href="https://github.com/jack-king1/RelaxingPomodoro" target="_blank" >
<img src="{{ "/assets/img/project/github.svg" | prepend: site.baseurl
                }}"></a></div>
                <h2>GitHub</h2>
</div>

###
