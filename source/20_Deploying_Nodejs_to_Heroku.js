/* Deploying Node js to Heroku : 
In the last section, you got your code pushed up to GitHub. In this section, you're gonna get your code 
pushed up to Heroku. That's going to allow us to actually deploy our node, JS applications to production.

Now, like we did with GitHub, we're gonna go ahead and set up a new remote and we're going to use that 
push command to push our code up to this new remote. One great thing about Heroku is that we can manage 
our applications from the terminal. So with GitHub, we had to use their website to do a lot of things.
With Heroku, we actually don't need to touch their web application at all. We installed the Heroku command
line tools and we can use those to create our applications, to manage them, and to push new versions of 
our applications up to the production environment.

The first thing we wanna do is set up our SSH public key file with Heroku.
Command : heroku keys:add (Run in VS code from 'Web_Server' directory)
When we run this, it's going to look through our SSH directory and ask us which keys we wanna upload.
Here it found the only public key we have, id_rsa.pub. It's asking us if we do wanna upload this to our 
Heroku account. In this case, yes we do. So type Y and hit enter. Now, our SSH key is associated with our 
Heroku account and we're gonna be able to securely send code back and forth.

Let's go ahead and start the process of creating our application. You can create your Heroku application
by using 'heroku Create'. After create, we can also specify a name for the project. If we don't specify one,
Heroku is gonna randomly generate one for us. These names need to be unique, not just across your own account,
but across all Heroku applications.
Command : heroku create my-weather-application

I'm gonna go ahead and run this command and it's going to do a couple of very important things.
First up, it's actually going to create a new application on the Heroku servers, and second up, it's 
showing two URLs in the output.
The first is a location where we can view our application. This is the live URL for the app,
The second is the URL for the Git repository where we should be pushing the code we wanna deploy.

Open the 1st url in browser : 
It's saying, "Welcome to your new application." And it's not showing our app because we haven't deployed 
it yet. So this is the welcome screen we're going to see by default. This will go away once we actually 
get our application deployed. 
So at this point, we have executed Heroku Create, and we're ready to start the process of getting our 
code up on the Heroku servers. Now before we do that, we have to make a couple of very important changes
so Heroku can actually know how to run our application. We have to provide it with some basic instructions
of what to do when it gets our code. One of the most important things we need to change has to do with 
what's inside of package .Json. So in order for Heroku to start up our application, we have to tell it 
which file to run. Now, from the terminal locally, we've been using Node to run
'14_Using_Default_Function_Parameter' in the source directory, and that's exactly what we want Heroku 
to do as well. We tell Heroku we want it to do that by specifying it in a script.
So we have this 'scripts' object in package.json. This allows us to set up scripts.These are key value pairs.
The key is a name for the script and the value is what to run from the terminal. Now by default, your 
package.json file has a 'test' script which just prints a message to the terminal saying that 'no test 
cases have been specified'. We can remove that line completely emptying the scripts object. All we're going 
to do is set up a single property on this object. The key needs to be 'start'. So, we're specifying the 
'start' script telling Heroku how to start up our app and the value is the command to run.
Right here, that's gonna be 'node source/.14_Using_Default_Function_Parameter'.
If Heroku runs that command, it's gonna start the application up correctly.

Before ---
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }

  After ---
   "scripts": {
    "start": "node source/14_Using_Default_Function_Parameter.js"
  },

Now, these scripts aren't limited to Heroku. We can actually use the 'start' script locally in our project
to start up the application for ourself. From the terminal, we can get that done using NPM Run. NPM Run 
accepts the name of the script you wanna run. And right there, we can use the 'start' script.
Command --- npm run start
So, this is a command we can run from terminal to start up our application locally. This is the exact 
command that Heroku is going to run to start up our application on their servers. So, making this change is
very important. If I do run this command locally (from terminal), we can see that it's starting up the app
location, and we get 'server is up on port 3000' is printing.

The next change we need to make lives inside of 14_Using_Default_Function_Parameter.js in the source directory,
and it has to do with one of the last things we do in this file. Way down at the bottom we call app.listen,
and we listen on port 3000. We have to change that. We can still use port 3000 when we're running the app 
locally on our machine, but Heroku is going to provide us with a port value that we have to use when our 
app is running on Heroku. Now, this isn't a static value , that We can hard code in the project.
This is a value that changes over time, and it's provided to our application via an environment variable.
An environment variable is just a key value pair set at the OS level. In this case, Heroku sets one for the
port where the value is the port number to use. So, all we need to do to actually support this is to 
change the two references right here and add one new line.The new line is gonna live up top right below
where we define app. i.e. below the line "const app = express()".

Before ---
const app = express()

//  other code stuff
 
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

After ---
const app = express()
const port = process.env.PORT || 3000

//  other code stuff
 
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

We have created new constant named 'port'. So, what value do we wanna use for Port?
Let's go ahead and extract the value that Heroku provides. That is available at "process.env"
env is an object and it's where we can access environment variables. Now this is exactly what Heroku sets.

For now, we need to access uppercase PORT. So, this is going to set port equal to the environment 
variable value. i.e. process.env.PORT
Now, this is only gonna be set on Heroku, which means that when we run the app locally,
things are gonna fail. We can fix that by using the logical OR operator in JavaScript.
We will provide a default fallback like 3000. i.e. const port = process.env.PORT || 3000

So here, port is equal to 'process.env.PORT', if it exists, or equal to '3000', if 'process.env.PORT' 
doesn't exist. So on Heroku, 'process.env.PORT' this will exist and it'll be used. Locally this won't 
exist and '3000' will be used meaning our application will still work just fine locally.

Now, all we need to do is actually use this port variable instead of passing 3000 into app.listen,
We're gonna pass in the value stored in port.
i.e.
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

Now we can move on to one final thing we're gonna need to address before we're ready to push our code up.
This lives inside of the public directory in our client side, JavaScript. i.e.In 'App.js' in 'JS' directory 
Here in fetch call we provide the URL we want to fetch. The problem is that when this code runs on Heroku,
it's still gonna try to access local host which is not gonna exist. That's gonna prevent us from ever being
able to correctly fetch the weather. And to address this, we wanna remove the domain completely.
If we're on local host, we wanna make the request to local host.
If we're on our special Heroku app URL, we wanna make the request to that URL.

Before ---
fetch('http://localhost:3000/weather?address= '+ location).then((response) => {

After ---
fetch('/weather?address= '+ location).then((response) => {

We've removed 'http://localhost:3000'. That's gonna make sure to use local host if we're running on 
local host or to use the Heroku app URL if we're running on Heroku.

Now, those are the three changes we need to make. The first, told Heroku how to start up the application.
The second made sure that our application listened on the port Heroku was expecting, allowing it to 
actually serve things up. And the third made sure that we made the weather request to the correct location.

Now that we have all of these in place, we have to make a commit and push our code up to Heroku.
we're gonna run 'git status' command to start the process of creating that commit.
After running git status we will see all 3 files that we have modified right now.
We wanna commit all three. So, we'll run 'git add . ' to add all of those to the staging area followed by 
'git commit'  with the m flag to provide my message.
i.e.  git commit -m "set up app for Heroku". 
Now hit Enter to actually create that commit and start by pushing those changes up to GitHub.

To push this commit to GitHub run --- git push
When we do this, it's going to push our code up to the 'origin' remote.

From here, we can now push up to the Heroku remote. Now, when we ran that 'heroku create' command,
it actually gives out the remote URL that we had to push to. Not only did it show it to us, it also set up 
the remote for us.
If we run 'git remote' command to view all of the remotes that are configured. We have two showing up.
The first is Origin, which we configured, and the second is Heroku, which was configured for us.

Now to deploy, all we have to do is run 'git push heroku master' from terminal. This is gonna push our 
latest commits up to the Heroku Git Remote. When Heroku sees that new commits have been pushed, it's going 
to deploy our application again.
After running this we get our URL in output where our application can be viewed. Now, we already have that 
URL open in a browser tab. This is where we had the welcome screen earlier. Let's go ahead and just refresh
this page ,and we have our weather application showing up.

We now have our weather application deployed to a production environment. This URL is not something we're 
able to visit because it's running on our machine or we're logged in. This is a public URL that anyone in 
the world with an internet connection would be able to visit to view our app.

Now, the URL we're seeing here, is just our application name as the sub domain at herokuapp.com.
This is the default URL, but if you go out and purchase your own domain, you can configure your DNS 
records to work with your Heroku application, and you can have a completely custom URL up above.

URL showing up in the browser : https://my-weather-application.herokuapp.com

*/