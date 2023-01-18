/* ------------------------------Application Deployement------------------------------ */

/* 
Joining Heroku and Git---
Now our weather app is running really well but the problem is that it's running locally on our machine.
That means no one else can access it. In this section, we're gonna learn how to deploy our Node.js 
applications to a production server, so anyone with the app URL can pull it up in the browser and start 
to use it. Now to get this done, we'll be working with three very popular tools, Git, GitHub, and Heroku.
Git is gonna allow us to put our application under version control. That's going to allow us to track the 
changes to our app over time. GitHub is going to allow us to back up our source code and collaborate with 
others. Heroku is gonna give us everything we need to deploy our Node.js applications to a production 
server so our app is accessible with just a single URL.

GitHub is the very popular software development platform which gives us all of the tools necessary to
manage software development projects, whether we're working by ourselves or whether we're working with 
others and Heroku gives us all of the tools and infrastructure needed to actually deploy our node JS 
applications to a production ready server.

GitHub---Open the browser and navigate over to github.com. (Sign Up / Sign In)
GitHub is a development platform making it easy to manage our projects.This is gonna make us easy to track
code changes over time to collaborate with others and to track bugs issues and feature requests. 
All of those NPM modules we installed all of their code is actually hosted on GitHub. 
With GitHub, you could host public or private projects depending on whether or not you wanna share that 
particular code with the outside world.

Heroku---Open the browser and navigate over to heroku.com. (Sign Up / Sign In)
Heroku is an application deployment platform. It's gonna give us all of the tools and infrastructure 
necessary to take our application code , our node js applications and deploy them to their production 
servers. Heroku isn't node JS specific. You can use Heroku with PHP, rubion rails, Python, Java and other 
languages.

Heroku's command line tools---Open the browser and navigate over to 'heroku CLI' (Install for windows)
Heroku's command line tools are gonna give us access to various commands we can use from the terminal 
to do things like deploy our latest code changes to the production server , allowing users to see the 
latest changes to the application.

The Heroku CLI gives us access to the new Heroku command and we can use this to do all sorts of 
interesting things.
Run these command from terminal to see if things go well or not.
command --- heroku -v (It will give the version of heroku that installed)
If you're seeing version, that means Heroku was installed successfully.
e.g. output --- heroku/7.53.0 win32-x64 node-v12.21.0
command --- heroku login (Open browser and login)
This is gonna link the commands we run from the terminal with our Heroku account, so we can actually
manage our projects from Visual Studio Code.
After successful login you can see 'Logged in as --Heroku Account Email--'
*/

/* 
Version control with Git --- Open the browser and navigate over to 'git-scm.com' (install for windows)
GitHub and Heroku both of those tools need access to our project code. Heroku is gonna need access to the 
project code so it can actually deploy our node applications and GitHub needs access to the project code
so it can show it on the project homepage allowing us to collaborate with others, track code changes over 
time or manage issues in our application.
Either way, we need a reliable way to get our code to both of those services. Now the answer is not to just
zip up the folder and send it off to those services. The answer is to use version control with Git.

What is Version Control ???
Version control allows you to manage the versions of your application over time. So imagine the web server 
project, as we add new features or change code with version control we can track those changes.
We can create what are essentially save points along the way for the various versions of our application.
Now, why is that useful? Well, imagine you had an application and you had a thousand users who were paying
you for that app. You wanna add a new feature to give your users something new and exciting, so you make 
some changes to your project and you deploy it. Now let's say that you discover that something's wrong
with that new feature, there's a bug. So what do you wanna do? You wanna revert to the previous working 
state then you wanna spend a little more time working on that new feature. And when it's ready and the bug
is fixed you'll deploy it back to your users. That's a very simple workflow, but without version control
you're not gonna have an easy way to revert back to a previous working state of your application.
The only version of the project you have is the broken one. Your locally saved files. Unless you have a 
picture perfect memory and a lot of spare time on your hands, you're not gonna be able to revert the 
application back to its previously working state. With version control you could do that in about a second.
So without version control, you are living on the edge. If anything goes wrong, it's going to be a big 
problem. You're gonna have to manually work with all of these files to figure out what went wrong
or you're gonna have to rewrite them if they get lost. With version control, you're in the clear.
You can experiment and try different ways to approach problems. If solution one doesn't work, you can 
revert those changes in a second and you can try to approach the problem from a different angle.
It gives you flexibility and confidence knowing you can experiment with your code, but always get back to
that working state you had before without wasting your time and energy.
You should be using version control for every personal and professional project you're working on.
In this course we'll be using the Git version control system. There are other version control tools out 
there, but Git is by far the most popular and the most widely used and for a good reason. It's super fast 
and easy to work with and you can use Git regardless of the programming language you're working with.

There is a book called Pro Git, it's a free book and it's available to read right here on the Git website.
Install the 'git installer for windows' from 'git-scm.com'.
If you're on Windows though, at some point throughout the options menu, it's gonna ask you if you wanna 
install 'Git Bash'? You have to check that option. If you don't, you're gonna have to reinstall Git later
to get access to Git Bash. This is going to allow you to perform some operations that you would otherwise 
not be able to perform on Windows.
To ensure git is installed correctly, run following commands from terminal from VS Code.
Command --- git --version (It will give the version of git that installed)
If you're seeing version, that means git was installed successfully.
e.g. output---git version 2.39.0.windows.2

Throughout the section we're gonna start to put our project under version control to keep track of its 
changes over time. Then we're gonna be able to take those changes and we're gonna be able to send them
off to the GitHub servers and the Heroku servers by running commands from the terminal. That is how we're 
gonna send our code off to those third party services.
*/

/* 
Exploring Git ---
With Git and Version Control typically comes a lot of confusion. That's because there are a lot of new 
terms we're going to need to define and concepts we're gonna need to explore. Once we're familiar with the
basics of how Git is going to track our files and manage our project, it'll be a lot easier to run the 
commands and actually understand what's going on.

For this example, let's imagine that we have a new project. So I create an empty directory on my machine 
and we'll say that I'm building a node application for serving up a portfolio website. Now I decide that 
I wanna use version control with Git and the first thing I would need to do is run a command to initialize
Git in that new project folder. You have to start up Git in every project where you want to use it.
Now, once Git is initialized, you can start to add files into your project and that is where these four 
columns are gonna come into place. We have untracked files, unstaged changes, staged changes and commits.

Untracked files          Unstaged changes              Staged changes                   Commits

Let's get started with the first column, which is untracked files. So by default Git doesn't track files 
you add to your application, you're gonna have to run commands telling Git that you wanna track specific 
files. So if we were to add a couple new files to our project they would show up as untracked files.
I'll add source/app.js, a Node.js script. Then I'll add readme.md a markdown file, which 
contains the documentation for our project. So by default, all new files you add to your project will show 
up under untracked files. Now at this point, we can start the process of getting them into commits. When 
something has been committed to Git, Git is indeed tracking it and that's a two step process.
The first thing we do is we move everything we wanna commit over to staged changes. So this is where we 
put things we wanna save and then when we save, all of these things get bundled up into a commit.

So we would run a Git add command , this is going to allow us to take one or more files from untracked 
files and bring it over to staged changes. In this case, I'll just bring one file over i.e. app.js leaving 
the other in untracked files. I could bring both over if I wanted to or I could just bring over the one.
Now from here, staged changes contains the things that are gonna be included in the next commit. The next 
save point, if you will. The next step in the process would be to actually create a commit using the 
commit command. When we use the commit command it's gonna take all of the files in staged changes, in this
case just the one it is going to bundle them up into a single commit and that is going to show up over 
here in commit column. Each commit has a unique identifier e.g. 1ab149

So after running those two commands, Git add and Git commit , We have a single commit tracking some 
changes to our project and we have a single untracked file readme.md.
Now let's say we're ready to continue on with the project, We add a new script into the project and as we 
know that's gonna show up under untracked files. So I add geocode.js in the source details directory
and that's sitting right here in untracked files alongside of readme.md. Now we've included this new 
script in the project and it's time to use it. So we make some changes to app.js requiring this file
and actually calling the function it provides. When we make a change to a file that Git is already tracking
that comes in under unstaged changes. Now what categorizes a file that Git is tracking, it is a file that 
has been included in a previous commit. In this case source/app.js was the only file included in the only 
previous commit. So this would be the only thing currently under unstaged changes.
So now at this point we're going to make another commit. Remember that's a two step process.
We bring the things we wanna commit over to staged changes then we make the commit taking all of this and 
bundling it up in a new commit. I'm gonna bring over source/app.js and I'll bring over geocode.js
from the source details directory. Now, I could also choose to bring over readme.md, but I'm leaving that 
there to let you know you don't have to have Git track everything. So once the add command is done,
we can use the commit command to take all of this and create a brand new commit , it bundles up everything 
in staged changes and it puts them in a new commit. Now at this point in the process we have two commits 
inside of our setup. We can revert back to those commits to get the application at that point in time.
So at this point in time with the first commit we had a single file app.js in its old state.
With the second commit, we now have two files. We have geocode.js and we have app.js in its updated state.
As we continue to add new features to our project we can create new commits and those will show up over
here in commit column alongside of our two initial ones.

Untracked files--- New files added to the project
Unstaged changes--- changes to files that Git is already tracking
Stage changes--- Things that are about to be committed
Commits--- These are the various save points
*/