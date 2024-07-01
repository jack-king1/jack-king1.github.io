---
layout: post
title: "TwitchDash Dev Diary #01"
date: 2024-07-01 16:54:46
author: Jack King
categories:
    - dev diary
    - .net
    - wpf
    - twitchdash app
img: twitchdash01.jpeg
thumb: twitchthumb.jpeg
---

<h1>Dev Diary #01 - Overview</h1>
This project is built using .net 8 and WPF applications using C#. The core idea is having an all-in-one solution for twitch streamers to be able to control different commands and events. For example running scheduled adverts on stream, Starting and concluding polls, random spinner for all current views.<!--more-->
It will be able to be used by any twitch streamer and hopefully streamlining their streams to make the process more efficient and reliable.

<h2>Planned Features</h2>

<b>Database</b> - The database will initially will be a local saved to the computer using [Litedb][litedb]{:target="\_blank"}. However moving forward this will move a [MongoDB][mongodb]{:target="\_blank"} or [MySQL][mysql]{:target="\_blank"}
<br>
<b>Schedule Adverts</b> - Streamers often forget to schedule advertisments while busy entertaining. The schedule feature i believe will be an important feature to help streamers manage their stream. Users will also be able to just click a button whenever to run a advert now.
<br>
<b>Starting Polls</b> - Being able to start a poll easily when something important is happening without having moderators do it for you can be useful for streamers to feel like they can control their stream without having to micro manage everything behind the scenes using the twitch website.

The database service is decoupled from the model classes to allow for ease of implementing different databases as the need arises.

<img src="{{ "/assets/img/blog/twitchdemo01.png" | prepend: site.baseurl
                }}">

<h2>Coming Up</h2>
Next im planning on working on the implementation and layout of the application as it currently is muddled togethor to test and learn how to use XAML and how WPF approaches designing and UI events with data-binding.
<br><br>
<h3>Misc</h3>
The font image generator used for the twitch diary banner: [FontMeme/TwitchLogoFont][twitchlogo]{:target="\_blank"}

 <div style="display: flex;justify-content: center;align-items:center;margin:5px">
    <div><a href="https://github.com/jack-king1/TwitchDesktopUserUtilities" target="_blank" >
<img src="{{ "/assets/img/project/github.svg" | prepend: site.baseurl
                }}"></a></div>
                <h2>GitHub</h2>
</div>

[litedb]: https://www.litedb.org/
[mongodb]: https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_emea-gb_ps-all_desktop_eng_lead&utm_term=mongodb%20com&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204562&adgroup=1213861306818022&msclkid=4186e528af4d1ae7f5c983ab8a299433
[mysql]: https://dev.mysql.com/
[twitchlogo]: https://fontmeme.com/twitch-logo-font/
