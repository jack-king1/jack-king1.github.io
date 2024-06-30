---
layout: project
title: "C++ Particle System"
date: 2018-11-20 16:54:46
author: Jack King
categories:
    - project
img: particles.gif
thumb: thumb02.jpg
carousel:
    - particle1.png
    - particle2.png
    - particle3.png
tagged: ASGE, 2D, Particle System
client:
website:
---

#### C++ Particle System (ASGE Game Engine / OpenGL)

This 2D particle system implementation uses the game Engine ASGE. A custom OpenGL implemntation created by James Huxtable. I tried to create a particle system using a double linked list in c++ from scatch. Multiple ParticleSystems objects could be created which then contained a predefined pool of particles that could reset when their lifespan ended. This made for a very efficient way of implementing many particles as it utilised the design pattern "Pooling" and the "Factory" pattern for spawning ParticleSystems.

<img src="{{ "/assets/img/project/particles.gif" | prepend: site.baseurl
                }}">

<h4>Technology</h4>
<ul>
    <li>ASGE/OpenGL</li>
    <li>C++</li>
    <li>Factory Design Pattern</li>
    <li>Pooling Design Pattern</li>
</ul>
<br>
<p>Particle Pool update and render functions.</p>
<img src="{{ "/assets/img/project/parrticlepool.png" | prepend: site.baseurl
                }}">

  <br>

<p>How the particle systems are loaded via text file.</p>
<img src="{{ "/assets/img/project/particleloader.png" | prepend: site.baseurl
                }}">

#### Future Plans

My plans for this particle system would to be add more types of spawnable systems other than rain and mist. There is also a couple bugs when spawning with the application having a large drop in frames as it spawns too many systems.

<div style="display: flex;justify-content: center;align-items:center;margin:5px">
    <div><a href="https://github.com/jack-king1/ParticleSystem2.0" target="_blank" >
<img src="{{ "/assets/img/project/github.svg" | prepend: site.baseurl
                }}"></a></div>
    <h2>GitHub</h2>
</div>
