/* Exploring the new feature --- Deployment Workflow

We know how we can change the code and get things working locally, but we wanna make sure we can get 
those changes up on GitHub and Heroku as well. We will add some text to 'About' page.
So over inside of the terminal, let's kick things off by starting up our local development server.
i.e. running nodemon. Even if it is a small change , it is good idea to test it on local server than
moving to production server directly.
So from the terminal, we're gonna start up nodemon.
Command --- nodemon .\source\14_Using_Default_Function_Parameter.js -e js,hbs
Run this command from 'web_server' directory , so we could be able to access our site from localhost:3000. 
And this is still gonna work like it did before, even though we made changes in the last section getting 
the app ready for Heroku. (open in browser localhost:3000/about)
After starting the local server using nodemon , head over to browser and we can see that our app is working 
fine. Our goal though is to make a change to the About page, so let's go to 'views' directory and open up 
'about.hbs'.
Add this line to about page --- "It gives weather forecast for given address.It uses mapbox's geocode and 
                                weatherstack API to fetch the weather.""

Now, after making the change, the first thing we wanna do is test things locally. we'll save the HBS 
file, refresh the page on browser, and making sure that our text shows up.
Now that things are working locally, we can go through the process of getting those changes pushed to 
GitHub and to Heroku. So from the terminal, the first thing we need to do is commit the changes.

I'm gonna run 'git status' to see exactly what's going on. We just have a single modified file.
I'll use 'git add . ' to add that to the staging area, then I'll create my commit, 'git commit'
with the 'm' flag to provide the message for the commit, "Added about text."
i.e. run this command from terminal in 'Web_Server' directory --- 'git commit -m "Added about text."

Now, we need to push it up to GitHub so the code is backed up and up to date on that platform,
and we're gonna push it up to Heroku so our application gets redeployed.

Now run 'git push' , this is equivalent to 'git push origin master' This is the command that's going to 
allow us to push up to the GitHub remote. Once we run this, all the code will be updated there.

Now run 'git push heroku master' , this is going to push our latest commits up to Heroku, which will 
redeploy our application, allowing users to access the latest changes. Once it's done, we'll be able to 
view those latest changes over on the live website. 




*/