/* Setting up SSH Keys :
In the last section, we have initialized a new Git repository for the web server project. we also added a 
couple of commits and now we can take those commits and send them off to these third party services we 
wanna use, GitHub and Heroku, so they can access our latest code.
That's how GitHub will be able to host our project and  Heroku will be able to deploy the latest version
of our application.

Now the question is how do we transfer the code between our machine and the other third party services' 
servers in a secure way? And the answer is to use SSH. SSH stands for 'Secure Shell' and it gives us a 
means of securely communicating with another machine.
SSH key pair is a set of two files, which we'll be using to facilitate this secure communication.
To generate ssh keys we need to run some commands from 'git bash' if using windows or you can stick with
terminal inside VS Code if you are using mac or linux.

Step 1 - Checking if we have SSH keys already on our machine
Command---  ls -a -l ~./ssh
Output ---  
ls: cannot access '~./ssh': No such file or directory
drwxr-xr-x 1 Kiran3983 197121    0 Jan 18 09:03 ./
drwxr-xr-x 1 Kiran3983 197121    0 Jan 18 09:03 ../

'ls' allows us to list out the contents of a directory and this is going to allow us to check for existing 
keys. So it's going to list out all of the files and folders inside of a given directory.
The 'a' flag makes sure that even hidden files and folders show up (dot files)
The 'l' flag gonna make the format a bit easier for us to read. It's gonna list everything out top to 
bottom instead of trying to use columns where we have things side to side.
And the last thing we need to provide is the path to the folder of which we are trying to print its contents.
It is '~/.ssh'  So ~ is a shortcut for your user directory, then we're looking for the .ssh folder.

Now there's a chance you don't even have this folder in which case the command's gonna fail. That is okay.
It's perfectly fine if you get an error. Something along the lines of directory not found.
In this case, when we run it, the folder does indeed exist but there's nothing inside of it.
I have dot, which represents the directory and I have dot dot, which represents the parent directory.
There are no files inside of the .ssh folder which means that I don't have any SSH keys.
i.e. drwxr-xr-x 1 Kiran3983 197121    0 Jan 18 09:03 ./
     drwxr-xr-x 1 Kiran3983 197121    0 Jan 18 09:03 ../

Now, if you have a file called ID_RSA and another called ID_RSA.pub that means you do already have a set
of SSH keys and you could choose to use those instead of creating new ones.

Step 2 - To create SSH keys (in case not present on machine already)
Command---  ssh-keygen -t rsa -b 4096 -C "kiranadamapure3983@gmail.com"

'ssh-keygen' is going to allow us to generate this SSH key pair. The first argument of three we'll be 
providing is 't', which stands for type. There are various protocols we can use. We'll be using the very 
popular and very secure 'rsa' protocol. RSA doesn't stand for anything in particular related to software 
development. It's actually just the last name initial for the three creators of the algorithm.
So after RSA we're gonna specify 'b' for bits , we wanna specify how many bits for this key we want enough
to be secure. The most common value is 4096 bits for the key.
Last up 'C', make sure it's capital. This is where we can provide a comment for the key which you can think 
of as a label and it's common to just use your email address inside of here.
Now, hit enter to run the command. It is going to ask us a few more questions.
Enter a file in which to save the key? --- Use the default (Hit Enter)
(by default it is storing it in that .ssh directory)
Next ,again hit enter for  'enter a passphrase and enter passphrase again'. We're not gonna provide a 
passphrase so we can hit enter to use the default passphrase which is no passphrase.
And then right here, the key has been created.

Step 3 - To check key is generated or not
Command---  ls -a -l ~./ssh  (Same as above)
Output--- 
total 24
drwxr-xr-x 1 Kiran3983 197121    0 Jan 18 09:03 ./
drwxr-xr-x 1 Kiran3983 197121    0 Jan 18 09:03 ../
-rw-r--r-- 1 Kiran3983 197121 3401 Jan 18 09:11 id_rsa
-rw-r--r-- 1 Kiran3983 197121  755 Jan 18 09:11 id_rsa.pub

Now we can see those 2 files , id_rsa and id_rsa.pub
'id_rsa' is a secret file, which we're gonna keep on our machine and we're never gonna share with anyone.
'id_rsa.pub' is a public file and this is something we're gonna share with both GitHub and Heroku so it 
can secure the communication between our machine and their servers.

Step 4 - To make sure that our SSH key pair is actually used
The last thing left to do is to make sure that our SSH key pair is actually used the next time we set up 
an SSH connection. The first thing we need to do is make sure the program is running and then after that
we're going to register our new private key file.
Command ---  eval $(ssh-agent -s)
Output  ---  Agent pid 1800

So all this command is going to do is it's going to try to start up SSH agent. If it's already running, 
it's going to simply tell us that by printing the process ID. After running the command We get 
'Agent pid 1800' which means that things are already running.

Step 5 - Register the file
Command --- ssh-add ~/.ssh/id_rsa
Output  --- Identity added: /c/Users/Kiran3983/.ssh/id_rsa (kiranadamapure3983@gmail.com)

'~/.ssh/id_rsa' --- from here, we simply provide the path to that private key file.
(id_rsa is private key file and id_rsa.pub is a public file)
When we run that command we can see the identity has been added. Now, when we try to facilitate an SSH 
communication we'll be able to do it securely using our key pair.

Now at this point we haven't actually used the key pair to do anything. In the next section, we're going 
to address that by getting our code pushed up to the GitHub servers.

*/