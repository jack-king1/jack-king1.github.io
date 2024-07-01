---
layout: post
title: "What is SCRUM and Agile?"
date: 2014-04-25 16:54:46
author: Jack King
categories:
    - blog
    - developer
img: scrumhead.png
thumb: scrumthumb.png
---

<h1>What is Scrum?</h1>
Scrum is an agile framework that is great for breaking down complex projects into smaller digestable chunks. These chunks are generally referred to as an 
Increment. These increments are the way Scrum measures progress and moves forward. These increments involve lots of planning and work by the entire scrum team. The increments consist of many moving parts from a scrum team, project owner, user stories, ceramonies, stakeholders and more.<!--more-->
<br>

<h4><a href="https://www.scrum.org/learning-series/what-is-scrum/" target="-blank">scrum.org</a></h4>
<img src="{{ "/assets/img/project/scrum.png" | prepend: site.baseurl
                }}">
<h1>What is Agile?</h1>
Agile is an apporach to project or product development that empthazises on flexability, collaboration, rapid delivery and continuoues emplyment. For example
being able to change course during a project rather than build first then deploy which is great for reducing risk.
<br>

<h4><a href="https://agilemanifesto.org/" target="-blank">Agile Manifesto</a></h4>

<p>Individuals and interactions <b>over</b> processes and tools</p>
<p>Working software <b>over</b> comprehensive documentation</p>
<p>Customer collaboration <b>over</b> contract negotiation</p>
<p>Responding to change <b>over</b> following a plan</p>

<p>While there is value in the items on
the right, we value the items on the left more.</p>

<h2>People</h2>
A scrum contains 3 main players -
<ul>
<li>Product Owner - Maximises value of product, talks to stakeholders.</li>
<li>Scrum Master - Helps Team, removes blockers, ensures sprints are on target.</li>
<li>Developers - Develops project and has more specific responsibilities.</li>
</ul>

<h2>Product Backlog</h2>
A product backlog at its core is an ordered list of features/tasks/bugs filtered by most important. We will cover exactly what is included later. But it's essentially an intricate todo list overseen by the product owner.

<h2>User Stories</h2>
A user story is described as a card. This can be digital as seen on a kanban board or a physical card on a white board. User stories consist of many parts. User stories use Acceptance Criteria which uses the format As a (type of user), i want (goal) so that (reason). User stories can be grouped into an epic, which is a group of user stories that may relate closely to each other. 
<h4>What is included on a user story?</h4>
<ul>
<li>A Definition of Done - When is it complete? Generally when the task can be completed by the user e.g. log in and see orders</li>
<li>Time - Ensure it can be completed within one sprint. Should be broken down as small as possible.</li>
</ul>
<h4>Writing a good user story</h4>
Writing a good user can be fairly complex, however a good method to follow is the INVEST method.
<ul>
<li><b>I</b> - Independent, as small as possible</li>
<li><b>N</b> - Negotiable, should be a conversation rather than a contract.</li>
<li><b>V</b> - Valuable, If no value it should not be done.</li>
<li><b>E</b> - Estimable, Should be able to estimate how long, if not maybe break down.</li>
<li><b>S</b> - Small, Keep be completeable within 4-5 days MAX! This includes reaching the "done" state.</li>
<li><b>T</b> - Testable, Every story needs to be testable in order to be "done"</li>
</ul>
<h4>The Three C's</h4>
The three c's is a technique of writing good user stories.
<ul>
<li><b>CARD</b> - Should fit on a card, generally digtial.</li>
<li><b>CONVERSATION</b> - A user story is a promise of a conversation later during a scrum</li>
<li><b>CONFIRMATION</b> - Someway to check objectives have been met. A formal check user story is complete.</li>
</ul>
<h3>Gherkin Method</h3>
The gherkin method is a way of structuring a user story, similar to psuedo code. Sometimes an additional card alongside base user story.
For example: Scenario - Login with valid credentials.
<ol>
<li>GIVEN i am on the sign in screen</li>
<li>AND i enter a valid e-mail</li>
<li>AND a valid password</li>
<li>WHEN i click the sign-in button</li>
<li>THEN i should see a wlecome message</li>
<li>AND i should have access to my profile</li>
</ol>
You can then branch this out to what happens if user credentials are wrong, or if userlogs in with google etc.
<h3>Esimation and Prioritisation</h3>
User stories need to be estimable and prioritized. Generally the priority lies with how much business value they bring. We also look at dependencies, do any other user stories rely on this user story being completed.
<h4>Planning Poker</h4>
Planning poker is a method of analysing what people think the difficulty of a task is. Team members are handed cards with numbers of 1-5 on. They then annonymously put their numbers into a stack and get an average and talk about the level of effort of a task.
<h3>DOD and DOR</h3>
Definition of Done and Definition of Read are two important aspects regarding a sprint and user stories. Each has their own definition of done. In terms of a user story it relates to the acceptance criteria and in terms of the sprint it can be different for each scrum team however it generally relates to how and when we know the sprint is done, for example - Every task under user story has been completed and any work created is attached to the user sotry so the product owner can review it.

<h2>What is a Sprint?</h2>
A sprint is the core of scrum. It's where all the work is planned, completed and reviewed. Generally whenever people meet and discuess the project is referred to as a ceramony.
<h3>Planning</h3>
First stage is planning - What user stories are we working on, whos working on what and how long do we expect this sprint to take? Create a sprint backlog of user stories from the product backlog.
<h3>Scrum Team</h3>
The scrum team will meet daily to discuess blockers, progress, what they are doing today and bring up any concerns, this allows for a very iterative development.
<h3>Definition of Done / Increment</h3>
The increment happens once the product is deemed finished by the scrum team and if it the sprint meets the definition of done so we can review and move onto the next increment.
<h3>Sprint Review</h3>
A informal meeting where we gather information from stakeholder feedback, update the backlog, identify next steps, encourage open communication, generally the whole team is in this ceramony where all stakeholders are encouraged to join.
<h3>Sprint Retrospective</h3>
An informal gathering of the team where the team discusses the processes, how everyone feels, are people getting burnt out? Thinking back over the most recent sprint and see patterns in work e.g. did more work happen at the start then fall off, why? Decide what to do next and aim to relax as a team, maybe plan to go out for lunch.

[hampden]: https://github.com/jekyll/jekyll
