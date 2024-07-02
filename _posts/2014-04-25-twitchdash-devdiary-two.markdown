---
layout: post
title: "TwitchDash Dev Diary #02"
date: 2024-07-01 16:54:46
author: Jack King
categories:
    - dev diary
    - .net
    - wpf
    - twitchdash app
img: twitchdash02.jpeg
thumb: twitchthumb.jpeg
---

<h1>Dev Diary #02 - Static Classes OOP and Working with JSON</h1>
Working from where i left off in dev diary one, i have begun working on functionality for the user/streamer to enter their username and retrieve token data about their stream. For this i have utilised some helper classes called TwitchAPI and FileStreamer.<!--more--> I have also made a TwitchUserData class which can directly be created from a json string using the NugetPackage NewtonSoft.Json. It enables JSON to be deserialized into a C# class. To create the template class for the data i took the json retrieved and used a website called [Json2Csharp][jsoncsharp]{:target="\_blank"}.
<img src="{{ "/assets/img/blog/deserializedtwitchdata.png" | prepend: site.baseurl
                }}">

<h2>TwitchAPI</h2>
This class is responsible for retrieving the users client and secret tokens. Currently this is stored in my environment variables for easy of use. This class has a an init method that setsup the users tokens and saves them for use by the program. It can also currently get informaton about a specific user via the display name/username. The init method is asyncronous to allow the program to contunue normally without freezing.
<br>
<img src="{{ "/assets/img/blog/initadmintwitch.png" | prepend: site.baseurl
                }}">
<h2>FileStreamer</h2>
THis class is currently not implemented but the idea is to save any local data needed to a json file such as user settings/name. Ideally this would be stored in a database, but it will definitely be a utility i will need. I plan to use generic types so i can use it in future projects with c#.

<h2>Twitch User Data</h2>
This class is the template of the JSON data and the fields it returns. As it returns a list of Data items, i needed a root class called TwitchUserDataList.<br>
<img src="{{ "/assets/img/blog/twitchuserdata.png" | prepend: site.baseurl
                }}">

<h2>OOP</h2>
For the User classes i have a base abstract class called "UserBase" which holds id, username and the twitchdata class. This will be common throughout every user, whether an admin or not. The admin may have extra data which i can add seperately to the base class. I have used encapsulation for the private fields so i can have more control on how the data is set within the class. For example when i set the TwitchData, i set the TwitchID and TwitchUsername fields at the same time. This just makes the code more readable.<br>
<img src="{{ "/assets/img/blog/oopuser.png" | prepend: site.baseurl
                }}">

 <div style="display: flex;justify-content: center;align-items:center;margin:5px">
    <div><a href="https://github.com/jack-king1/TwitchDesktopUserUtilities" target="_blank" >
<img src="{{ "/assets/img/project/github.svg" | prepend: site.baseurl
                }}"></a></div>
                <h2>GitHub</h2>
</div>

[jsoncsharp]: https://json2csharp.com/
