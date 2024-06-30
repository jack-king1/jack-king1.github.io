---
layout: project
title: "Pawfect Ecom"
date: 2024-03-15 16:54:46
author: Jack King
categories:
    - Project
img: pawfect.png
thumb: thumb02.jpg
carousel:
    - pawdesign2.png
    - pawdesign1.png
    - pawfect.gif
tagged: Web Development, React, Azure
client: iungo
website: https://github.com/jack-king1/244001-Jack-Ecommerce
---

#### Pawfect Ecom

<img src="{{ "/assets/img/project/pawfect.gif" | prepend: site.baseurl
                }}">

<h3>Design</h3>
<p>Before starting this project i researched into existing pet stores and pet bed sellers and the design decisions, layouts and colour schemes they used on these websites.</p>
<img src="{{ "/assets/img/project/pawdesign1.png" | prepend: site.baseurl
                }}">

<p>I understood they used bright, simple, bold layouts that make the products look more engaging and exciting. I translated this into my Figma wireframe designs below.</p>
<img src="{{ "/assets/img/project/pawdesign2.png" | prepend: site.baseurl
                }}">

<h3>Technology</h3>
<p>This project required me to use a certain technology stack which includes:</p>
<p><b>Azure, SQL, Tailwind, React, NodeJS</b></p>

<h3>Code Design</h3>
<img src="{{ "/assets/img/project/codestructure.png" | prepend: site.baseurl
                }}">
<p>While planning the project structure i knew i wanted to use MVC (Model View Controller). Even though having a MVC project layout isn't as impactful in react as it follows a component architecture i followed the naming conventions and folder structure for MVC.</p>

<h3>Server</h3>
<p>The server (using express, nodejs and cors) enabled me to make fetch requests from the client to the server which then queried the SQL database to get the raw data which then was parsed to a JSON object before returning the result to the client ready to be rendered to the user. This was all done asyncronously so not to display data before it's ready.</p>

<h3>Database</h3>
<img src="{{ "/assets/img/project/database.png" | prepend: site.baseurl
                }}">
<p>Before moving to a backend database, i first planned out the model/classes for the data i would be retieving from my database. This in made it easier to plan out my database as i could understand how to better apply normal form to by database schema. I then planned oudatabase in draw.io before creating and inserting the data into my live database.</p>

<h3>Unit Testing</h3>
<img src="{{ "/assets/img/project/unit-testing.png" | prepend: site.baseurl
                }}">
<p>Using a javascript testing framework called Jest i created unit tests for my classes, Basket.js and Product.js. These tests were simple can easily extendable. The tests i chose to include were TotalCartPrice and ProductPrice (On Sale Price, Normal Price). They returned truefalse if the number was typeof number and if the calulation returned the correct two decimal sum.</p>

<h3>Post-Mortem</h3>
<p><b>What I Learned</b></p>
<p>This project allowed me to explore new techniques and technologies such as Azure, unit testing with Jest and some advanced React hooks. It also allowed me to cement some pre-existing knowledge and bring to the surface methods and techniques i hadn't used extensively before such as Callbacks. For example my use of React hooks was limited to useState and useEffect; for this project i implemented useContext which proved important in managing the basket state across multiple stages and saved prop drilling. Callbacks was helpful when setting state of the products as it triggered events that needed to know when a product had been added to the cart.
Unit testing was also something i touched on for the first time during this project. I now understand the importance of unit testing in a larger code base that may be changing consistently and is handling sensitive data that might hinder user experience and use of the website.</p>

<div style="display: flex;justify-content: center;align-items:center;margin:5px">
    <div><a href="https://github.com/jack-king1/244001-Jack-Ecommerce" target="_blank" >
<img src="{{ "/assets/img/project/github.svg" | prepend: site.baseurl
                }}"></a></div>
                <h2>GitHub</h2>
</div>

####
