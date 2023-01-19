/* Pushing code to GitHub :
Now that we have our SSH keys in place. we're ready to start sharing our code with those third party 
services. To start, let's head over to github.com , create a new repository.
We have our local repository on our machine, it lives in that .git directory. We're also going to create 
a repository for the project on GitHub. There's a plus icon near the top right of the screen , click it to 
add new repository.
The only thing we need to do is pick a repository name.
Select anyone from public and private. (paid for private)
Next up, we have an option to initialize our project with various things like a Read me file ,
a git ignore file, or a license. We're not gonna do any of that.
We're gonna move on to the next step which is to create the repository.

On next page after submitting, it simply gives us some instructions for the various ways we can get started.
We can create a new repository from the command line and send that to GitHub.
We can push our existing repository up to GitHub
We can import it from some other version control system.

In this case, the second option is what we want. We already have a repository with commits locally on our 
machine. We simply want to send it to the GitHub servers.

Now, there are two commands here to get set up,
1. git remote add origin https://github.com/Kiran3983/Weather_Website.git
2. git push -u origin main

In 1st command , We're using remote to manipulate our remotes. A remote is nothing more than a version of 
your project hosted somewhere else. So we're gonna have a version of our project hosted on github.com's 
servers and on Heroku's servers.
Next up, how are we trying to work with our remotes? We're trying to add them. You could also use remove 
to remove a remote. In this case though, we don't have any, so we're setting up our very first one.
Next up, we choose a name for the remote. This value could be anything you like, but by default, your 
first remote should have the name 'Origin'.
After that, we have a long URL. This URL contains our username and name of the repository that you picked.

Now when we run this command, we're not actually sending our code to GitHub. All this command does is it 
sets up that channel of communication.
We're going to run it from the 'web_server' directory. Now we have a remote called 'Origin' which we can 
push to and that's going to send our code to GitHub. As we add new commits, we will push those new commits
up to GitHub, making sure that GitHub has the latest code and that's where the second command comes into play.

In 2nd command , We have git push with the u flag origin main
Push allows us to push our commits up to a given remote. Then we provide the remote name, Origin.
Now main is the default name for what's called a branch in Git.
Now the u flag allows us to set the upstream which is essentially the default, and in this case, we are 
setting the default to origin which is where we're going to push to the most. So in the future, after we 
run this command once we could just use Git push to send our latest commits up to GitHub.
Sure, we'll be pushing to other remotes like Heroku but we're not gonna do that nearly as often.

Now we're not actually ready to run this command yet. If we tried to run it, it would fail because GitHub 
isn't sure exactly who's sending it the code. What we need to do is finalize our SSH configuration.
So to get that done, what we need to do is take the public key file and give that to github.com so it can 
create that secure connection.
Click on profile menu on right upper corner on github.com >>> Open settings >>> Open 'SSH and GPG keys' 
from left hand sidebar >>> click on 'new ssh key' >>> Give title to identify the key >>> And the next 
thing we need is the contents of that public key file (id_rsa.pub) as described below >>> 
Click on add SSH key.

To get the contents of public key file, we can use the following command from the terminal.
Command --- cat ~/.ssh/id_rsa.pub
cat simply concatenates the contents of a file out to the terminal. So it's going to print the contents 
of our key file
Followed by the file to actually print, that is ~/.ssh/id_rsa.pub.
Now when we do that, we're going to get a long string, which starts with ssh-rsa and it ends with that 
value you put for the comment. And in our case, we put our email.
Copy that string from ssh-rsa to end of email and paste inside textbox for key.

We have this key set up but we've never used it to communicate with GitHub. We can test our connection by 
running the following command from the GitBash.
Command --- ssh -T git@github.com
This is going to test our SSH connection to the GitHub servers. If it works, then we know our key has 
been set up successfully and we can push our commits up. 

You will get a msg after running this command 
Are you sure you want to continue connecting (yes/no/[fingerprint])? --- say 'yes'
After that you will get following msg
Warning: Permanently added 'github.com,20.207.73.82' (ECDSA) to the list of known hosts.
Hi Kiran3983! You've successfully authenticated, but GitHub does not provide shell access.

This means you are able to correctly authenticate with GitHub and now we're ready to push our code up.
Now actually creating the SSH keys and configuring them with GitHub is something you only have to do once,
it's set up and we can use it for all of our future projects.

Now we can run the 2nd command up above --- git push -u origin main 
(run this from 'Web-Server' directory,from VS code)
(If 'git push -u origin main' this gives error then run this 'git push -u origin master'.)

This command is actually gonna take our commits and it's gonna push them up to whatever's at the 
following URL from the previous step. 
We can see exactly at the end what happened. It set up a new Master branch to coordinate with our local 
Master branch. This is a good thing. If we refresh github.com, we're actually gonna be able to see our 
project.
We now have our code pushed up on the GitHub servers. 

With the SSH keys in place, we can now use the same setup with any other projects we end up creating.

*/