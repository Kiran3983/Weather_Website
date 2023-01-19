/* Integrating git :
In this section we're going to initialize Git in the 'web_server' folder. Once our project is under version 
control we'll be able to track changes to all of our application files. When we want to use Git we have to 
explicitly initialize it in the project where we're trying to use it. For us that means we need to run a 
command from the 'web_server' folder. It's important that we run this command from the web-server folder and
not from a nested directory like the 'public' folder  or from a parent directory like 'NODE JS PROGRAMS'.
The command needs to be run from the route project folder, which is web server.

Command --- git init (To initialize the git)
Output --- Initialized empty Git repository in F:/Node JS/Node JS Programs/Web_Server/.git/

We got the message -- Initialized empty Git repository in followed by a path to our project folder,
to the 'web_server' directory where we ran the command from. From there, Git has created a new folder .git.
This is where Git stores everything that makes up your Git project. So as we add new files and create new 
commits those are going to end up getting stored in data structures inside of dot Git. This directory is not
something we're going to manage ourselves. It is managed by Git and it gets altered when we run Git commands.

A Git repository is nothing more than a place where things related to Git are stored. In this case we have
a local repository. It's in a directory '.git' on our machines. As we start to integrate with GitHub and 
Heroku we'll have remote repositories where our code is backed up.
For example, Heroku needs the code to deploy to the server and GitHub needs the code so it can actually use
it as part of its little software project management platform.

Now that we have Git Initialized. In the tree view on the left hand sidebar everything in the 'web_server' 
folder just showed up in green. So Visual Studio Code by default has a Git support and when we initialize a 
project, it shows files in green that have not yet been committed. So these are brand new files which would 
show up under that 'untracked files' category that we had saw in the previous section.
You'll also notice that while a new directory was created, it's not showing up inside of the 'web_server'
folder where it actually lives. That's because Visual Studio Code hides that directory by default.
It's not something we're manually going to change or manage.

Git init creates that new directory '.git' and it initializes the project. From here we can start the process
of using the 'add command' and the 'commit command' to actually track things with Git.

Command --- git status (to print the current status of our setup)
Output --- 
No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Public/
        Source/
        package-lock.json
        package.json
        partials/
        views/
nothing added to commit but untracked files present (use "git add" to track)

We haven't created a commit so nothing is being tracked and that's why everything shows up under untracked 
files. Inside untracked files we have node modules, package.json, package-lock.json, public directory,
source directory and views directory. So from here we could use Git Add to add things to the staging area 
and Git Commit to actually commit them.
Before we do though, there is a single folder in our project that we don't want Git to track and that is the
'node_modules' directory. When you're using Git and you're using npm you don't want Git to track the 
'node_modules' folder as this is a generated directory. We can always recreate it by running npm install.
Npm install is going to use the contents of package dot json and package lock dot json to bring this directory
back to its exact state. So Git doesn't need to know what's inside of node modules. What's inside of there 
is a ton of other files and folders that are already under version control by the project owners.
Git gives us a very easy way to ignore things from our setup. We do that by creating a new file in the 
repository route. For us that means we create a new file in the 'web_server' directory and we're going to 
call this '.gitignore' and the name is very important. If it's not exactly spelled right Git's not going to 
be able to find the file. Now in here we can simply list out the things we don't want Git to track and for 
us that's going to be 'node_modules/' . Now when we do this Git is not going to track that directory.
Even if we tried to use Git Add.
We can see that 'node_modules' won't show up under untracked files by re-running the command 'git status'

Command --- git status
Output --- 
No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        Public/
        Source/
        package-lock.json
        package.json
        partials/
        views/
nothing added to commit but untracked files present (use "git add" to track)

So there is no 'node_modules' diectory under untracked files but newly created file '.gitignore' is there.
Now you'll notice that up above 'node_modules' is now grayed out in color.This is Visual Studio Code letting
us know that while this thing exists it has been ignored by version control.
We can still open it and look at what's inside. Everything's just shown in a lighter gray to signify that 
it's ignored.

We can now use 'git add' to add things to that staging area. When we use 'git add' we have to list out
the things that we want to add. In this case we can list out things we are seeing here in untracked files.
We could list out individual files or entire directories.
e.g. git add Source/
It's going to add all of the files in the source directory to the staging area meaning they're ready to be 
committed. We can run 'git status' to see that. Under untracked files you'll notice that the 'Source'
directory is no longer listed. That's because we've added it to the staging area so it's showing up, 
up above under changes to be committed. Now we could choose to make a commit with just these files init or 
we can track all of the files that we have listed down below untracked files as well.
Command --- git status
Output --- 
No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   source/01_Hello_Express.js
        new file:   source/02_HTML_JSON.js
        new file:   source/03_Serving_Up_Static_Assets.js
        new file:   source/04_Dynamic_Pages_With_Templating.js
        new file:   source/05_Customizing_Views_Directory.js
        new file:   source/06_Advanced_Templating.js
        new file:   source/07_Setting_404_Page.js
        new file:   source/08_Challenge_Error_Page.js
        new file:   source/09_Styling_Application.js
        new file:   source/10_The_Query_String.js
        new file:   source/11_Challenge_for_Weather_Endpoint.js
        new file:   source/12_Building_JSON_HTTP_Endpoint.js
        new file:   source/13_ES6_Default_Function_Parameter.js
        new file:   source/14_Using_Default_Function_Parameter.js
        new file:   source/15_Browser_HTTP_Requests_With_Fetch.js
        new file:   source/16_Joining_Heroku_and_GitHub.js
        new file:   source/17_Integrating_Git.js
        new file:   source/forecast.js
        new file:   source/geocode.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        Public/
        package-lock.json
        package.json
        partials/
        views/


Git add gives us a shortcut to add everything i.e. ' git add . ' This is going to add everything to the 
staging area which in this case means everything listed under untracked files.
So we'll use 'git add .' , then we'll run 'git status' once again and we can see that now we have a whole 
bunch of files listed under changes to be committed. We no longer have that untracked file section because 
there are no untracked files left.

Now that our staging area is set up , we can actually create the commit and we do that using 'git commit'.
We have to provide a message with each commit, describing what exactly changed. We do that by providing the 
m flag followed by our message inside of quotes. And for the first commit, something like initial commit
or init commit is typically used.
e.g. git commit -m "Init commit"
     git commit -m "Adding new feature to allow people to communicate privately"
     git commit -m "Adding support for image uploading"

Once we ran the command git commit -m "Init commit" , new commit is created. So at this point we have one 
commit inside of our Git repository and you'll notice over here that all of the files are back to their 
default color because now they are not new untracked files. As we make changes to our application though
the colors will change once again.
e.g. If we make changes inside files that git is already tracking , these files will be shown in orange.

As we make changes in file like adding new functions or fixing bugs , we can add these files to the 
staging area and create another commit. After editing the files , check git status to confirm that changes
are made. Then you can actually add this to the staging area using git add. Run Git status again before 
committing, just to make sure everything looks right. Then run git commit  to create new commits.

Commands: 
git --version --- To check the version of installed git
git init      --- To initialize the git
git status    --- To print the current status of our setup
git add       --- To add files to statging area
git add .     --- To add all files to staging area
git commit    --- To create new commits

*/

/*

Challenge: Put the notes app under version control
    1. Initialize a new repository in project directory
    2. Ignore node_modules
    3. Commit all files to the repository

Solution:
1. Initialize new repo/repository for Notes_Taking_App project buy running 'git init' from root of the project
i.e. from  'Notes_Taking_App' directory.
command --- git init
output  --- Initialized empty Git repository in F:/Node JS/Node JS Programs/Note_Taking_App/.git/
            All files turns to be green in color.

2. Ignore 'node_modules' directory by creating new file '.gitignore' and listing 'node_modules/' in it.
Output --- 'node_modules' file gets gray in color.

3. Add all files to staging area
command --- git add .  (to add everything to staging area)
command --- git status (to check status of our setup)
output  --- All files from Note_Taking_App will be seen under 'Changes to be committed'
            No files will be under 'untracked files'

4. Create a new commit
command --- git commit -m "Init commit"
output  --- For all files you will see create mode is used. All files will retrieve its original color.

Now Notes app is under version control. If we were to make changes to the application in the future
we would be able to track those changes as well.

*/
