---
layout: post
title: "TwitchDash Dev Diary #02"
date: 2024-07-03 09:54:46
author: Jack King
categories:
    - dev diary
    - .net
    - wpf
    - twitchdash app
img: twitchdash03.jpeg
thumb: twitchthumb.jpeg
---

<h1>State Manager and Conditional Rendering</h1>
Realising the learning curve to WPF is quite steep as xaml and the MVVM architecture is quite different from traditional UI development. Understanding how to layout the XAML files and how to bind them to the code behind such as the ViewMovdel (VM). Although WPF is very powerful tool the techniques and mind-set shift will take some practice! <!--more--> However moving forward i have started to implement a StateManager into my class which will send and recieve events and update UI accordingly. This allows viewmodels to subscrube to the state changes and update the UI.

 <div style="display: flex;justify-content: center;align-items:center;margin:5px">
    <div><a href="https://github.com/jack-king1/TwitchDesktopUserUtilities" target="_blank" >
<img src="{{ "/assets/img/project/github.svg" | prepend: site.baseurl
                }}"></a></div>
                <h2>GitHub</h2>
</div>

[jsoncsharp]: https://json2csharp.com/
