/*
In the last file we had set up Express to correctly serve up our static assets. we chose to put all of our
static assets in the public directory. Everything inside of there was made available via the web server.
This included the CSS, images, JavaScript and HTML documents that we wanted users in the browser to be able 
to access. Now static means that the assets are static. They do not change. I could refresh this page 
500 times and I would always get the exact same result. It is a static webpage, not a dynamic webpage.

In this lesson we're gonna learn how to use what's called a template engine to render dynamic webpages 
using Express. Now, the template engine that we're gonna set up in this file is called Handlebars.
Handlebars is gonna allow us to do two very important things. First up, as mentioned,
it's going to allow us to render dynamic documents as opposed to static ones. And the other thing it's 
going to allow us to do is to easily create code that we can reuse across pages.
So with Handlebars we'll be able to render dynamic content and we'll be able to easily use and reuse
little pieces of markup throughout the various pages in our app.

Setting up Handlebar tool in our project. For that we have 2 npm packages. The first one is 'Handlebars',
now this is a low level library that implements Handlebars in JavaScript. Here our purpose is to use 
handlebars with express but the 'handlebars' module isn't gonna let us get that done. 
So there is another Handlebars library which integrates Handlebars  into Express.
i.e. the second npm package - 'HBS'. HBS is a shortform for Handlebar. It essentially
integrates Handlebars into Express. HBS uses Handlebars behind the scenes. HBS just makes it really easy 
to integrate with Express.
To install HBS : npm i hbs@4.0.1   (install this in Web_Server directory)
Once we installed this , we need to tell the express that which templating engine we have installed , and 
we do that by using 'set' method on app i.e. app.set  
Set allows us to set a value for a given Express setting and there are a few. We have a key, the setting
name and we have a value(The value we wanna set for the setting).
In our case to set up a view engine like Express the value is 'view engine'. (value is case sensitive)

i.e. app.set('view engine', 'hbs') --- This single line is all we need to get Handlebars set up.
'view engine' --- case sensitive and space is also imp

Now when we're working with Express it expects all of your views in this case, our Handlebars templates,
to live in a specific folder that is in the root of the project. It's supposed to live in a folder 
called views. So for us, the root of the project is the web server folder. So we will create a new folder
'views' inside 'Web_Server'. In this folder we can put our Handlebars views.

What we're gonna do is create a view that replaces the homepage. So instead of the homepage being a 
static document served up from public directory it's going to be a Handlebars template. Handlebars file 
is nothing more than HTML with a couple of nice little features for injecting dynamic values.
We will create a new file 'index.hbs' inside 'views' folder and will copy all data of index.html to this
file. (see the file 'index.hbs' from 'views' folder)
Now since we are gonna transition the index file from being an HTML document to a Handlebars file ,we can
actually remove it from the public folder. (I kept it for reference)
To see the working of handlebars we changed the title from ' From a Static File ' to 'weather'
i.e.  <h1> Weather </h1>    from    <h1> From a Static File </h1> 
Now it's important to note, that so far no one is gonna be able to access this page from our web server.
To actually serve up this template we need to set up a route. So once again that'll be an app dot get call.

We're gonna show this one on the homepage so we'll leave that first string empty. Then as the second 
argument we'll have our function with request and response as the two arguments.
i.e. app.get('' , (req,res) => {
    res.render('index')
})
Render allows us to render one of our views. We've configured Express to use the view engine HBS.
So with render, we can render one of our Handlebars templates. All we need to do is provide as the
first argumentxthe name of the particular view we wanna use.
i.e.  res.render('index')     // No need of file extension

At this stage if we check on browser , the new title 'weather' that we have given in 'index.hbs' will
be shown on homepage. 
So by calling res.render, Express goes off and it gets that view. It then converts it into HTML and  
make sure that HTML gets back to the requester.

Now at this point we have a static document. There is nothing dynamic about it even though we're using 
Handlebars. To make it dynamic what we're gonna do is go ahead and provide a value for this title.
So instead of hard coding it in the file it's gonna be provided by node js. Now to provide a value that's
accessible in the template we have to provide a second argument to render.
So the first argument is the name of the view to render and the second argument is an object which
contains all of the values you want that view to be able to access.

i.e.  app.get('', (req,res) => {
    res.render('index' , {
        title: 'Weather App',
        name: 'Andrew Mead'
    })
})  

Now any value from this abject provided to render , we can access it from 'index.hbs'. 
So, we can use either 'title' or 'name' in handlebars. 
If we want to inject a value in a .hbs file , we use two curly braces and give the name of the property
that we wanted to access.
i.e.  
<body>
<h1> {{title}}</h1>                    // accessing title
<p> This is created by {{name}} </p>   // accessing name
</body>

And the same process is followed for other pages like about,help and weather pages
*/


const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../Public')   

app.set('view engine', 'hbs')
app.use(express.static(publicDirPath))

app.get('', (req, res) => {          // To render on homepage you have to delete index.html first                 
   res.render('index', {
    title: 'Weather App',
    name: 'Kiran Adamapure'
   })           
})

app.get('/about', (req, res) => {
   res.render('about', {
    title: 'About the author',
    name: 'kiran Adamapure'
   })
})

/* 
Challenge: Create a template for help page
   1. Setup  a help template to render a help msg to the screen i.e. help.hbs
   2. Setup the help route and render the template with example msg
   3. Visit the route in the browser and see your help msg print
   4. Do it for weather route also
*/

app.get('/help', (req, res) => {
    res.render('help', {
        help_msg: 'To get help call at 8888.'
    })
 })

app.get('/weather', (req, res) => {
   res.render('weather', {                                        
      Location : 'Philadelphia',
      Forecast: '45 Degree Tempareture , Sunny weather.'
   })
})

app.listen(3000, () => {
   console.log('Server is up on port 3000')
})

/* After running above file , you will see the changes on all routes i.e. help , about  , weather
except homepage. To see changes on homepage , you have to delete index.html first */


/* When you run this file from Source directory , you will get an error saying that
Error: Failed to lookup view "help" in views directory "F:\Node JS\Node JS Programs\Web_Server\Source\views"
bcz 'views' directory is outside of the 'source' directory.
Failed to lookup view "help" in views directory --- Gives Error definition
"F:\Node JS\Node JS Programs\Web_Server\Source\views" ---It's pointing to where it's expecting the views directory to live in
i.e. in the root of the web server project in a folder called views

To avoid this error run this file from Root of this project i.e. 'Web_Server' directory using below command
command --- nodemon .\Source\04_Dynamic_Pages_With_Templating.js   i.e. nodemon Source/File_Name
For that simply type nodemon Source/04 and then press Tab button , followed by Enter button. */

