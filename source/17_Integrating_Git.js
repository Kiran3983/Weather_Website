/* 
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
*/