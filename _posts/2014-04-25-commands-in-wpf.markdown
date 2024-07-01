---
layout: post
title: "Commands and UI Updates in WPF .Net"
date: 2014-04-25 16:54:46
author: Jack King
categories:
    - blog
    - .net
img: scrumhead.jpeg
thumb: windows.png
---

<h1>What are commands in WPF?</h1>
In short commands are a way to increase reusability of common functionality. Think of a print action on a document. You can use the File -> Print, ctrl + p or right click -> print. All these actions or commands end with the same result. Print the document. This is why commands are useful. It allows commands to be used by multiple objects, rather than coding specific events for each interaction between each individual ui element.<!--more-->
<br>
<img src="{{ "/assets/img/blog/relaycommandcode.png" | prepend: site.baseurl
                }}">
<h2>Helper Class</h2>
Instead of creating a command class for every single different ICommand. It's more efficient to create a basic template called a RelayCommand which eliminates the need to have multiple ICommand class files. What it allows us to do as developers is to pass in execute and canExecute functions.

What these two functions do is execute the passed function (execute) but also toggle the command on or off (canExecute). For example you might want to limit when the user can press the save button if no changes are present.

<h2>Property Changes</h2>
Using the INotifyChanged allows the view to update when a value changes in the viewmodel class. We can bind a field inside the viewModel to a UI element and assign an event to notify the ui element of when that value changes, updating it in the process. We have to use the DataContext and assign it to the relating viewModel of the UI element for it to be able to access the viewModel. 
<br>
<img src="{{ "/assets/img/blog/databindingwpf.png" | prepend: site.baseurl
                }}">
                <br>
The use of the keyword DataContext means that we dont have to be explicit when binding ui elements to viewModel fields.
<br>
<p>Without DataContext keyword</p>
<code>Text="{Binding Source={StaticResource MyViewModel}, Path=Name, UpdateSourceTrigger=PropertyChanged}"</code>
<br>
<p>With DataContext keyword</p>
<code>Text="{Binding Name, UpdateSourceTrigger=PropertyChanged}"</code>
<p>What this code is doing is binding the element this code is attached to to the variable in the viewModel. It will update the viewModel once the ProperyChanged WPF trigger has been activated. There is also a "LostFocus", "Explicit" and "Default" events.</p>
<h3>Order of Events</h3>
<ol>
<li><b>View/User Interactions:</b> You type text into a TextBox in the UI (View).</li>
<li><b>UpdateSourceTrigger: </b>Depending on the UpdateSourceTrigger specified in the binding (e.g. PropertyChanged), changes in the TextBox immediately update the bound property in the ViewModel.</li>
<li><b>INotifyPropertyChanged:</b> When the property in the ViewModel is updated (e.g. Name or Age), the INotifyPropertyChanged interface is used to notify the view of the change.</li>
<li><b>Binding Update:</b> The binding mechanism in WPF listens for the PropertyChanged event raised by INotifyPropertyChanged. When this event occurs, WPF updates the corresponding UI element (e.g. updates the TextBox text if it is bound to the Name property).</li>
</ol>

<h2>Summary</h2>
Overall commands make for a great solution to DRY coding practices. Commands allow for the reuse of code via the RelayCommand and to quickly setup new commands for different features with similar functionality. In addition we touched on Binding and property changes using the INotifyPropertyChanged interface and why they are important in adhering to the MVVM architecture of WPF forms.

Here is a good example of how to implement INotifypropertyChanged in WPF: [INotifyPropertyChanged in WPF][C#Corner]{:target="\_blank"}<br>
And here is an example of how to implement ICommands in WPF: [ICommand in WPF][C#CornerCommands]{:target="\_blank"}

[C#Corner]: https://www.c-sharpcorner.com/article/explain-inotifypropertychanged-in-wpf-mvvm/#:~:text=INotifyPropertyChanged%20in%20ASP.NET%20MVC,synchronized%20data%20presentation%20in%20applications.
[C#CornerCommands]: https://www.c-sharpcorner.com/UploadFile/e06010/wpf-icommand-in-mvvm/
