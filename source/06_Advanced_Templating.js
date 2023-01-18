/* Partials : 
Partials, as the name suggests, allows us to create a little template which is part of a bigger webpage.
So think about parts of the webpage that you're gonna end up reusing across multiple pages in your site.
This would be things like headers or footers where you want the exact same thing showing on every page 
to give your site a nice unified feel. It'd feel really terrible if you went from one page in a site to
another and the header kept switching how it was structured or how it looked.
With partials, it's gonna be really easy to create a header and reuse it without needing to copy markup
between all the pages in your site.

Step 1 : To work with partials we need to load in and configure the 'hbs' module.
         const hbs = require('hbs')

Step 2 : Tell the handlebars that , where we are going to put our partials.
         Create a new directory named 'partials' and give its path to Handlebars
         const partialsPath = path.join(__dirname, '../partials')
         Partials are the files with .hbs extension 

Step 3 : Providing partials' path to the Handlebars module.
         hbs.registerPartials(partialsPath)
         registerPartials() takes a path to the directory where your partials live in. 
         Here 'partialsPath' contains the path that Handlebars module needs.

Step 4 : Creating partials in 'partials' directory
         'partials' isn't a complete HTML document as 'views' 

Step 5 : Using these partials inside our other handlebars files i..e files inside 'views'
         To render the partial in other Handlebars files we use double curly braces with greater than 
         sign inside the braces. After this greater than sign , provide theonly the file name ,
         no need to provide the complete paths or the file extension.
         e.g. add this line in help.hbs from 'views' directory, inside body at the top
         <body>
              {{>header}}
            <h1>Help Page</h1>
            <h1> {{help_msg}} </h1>
         </body>
         Do same for all other .hbs files i.e. views (homepage , about and weather)

Step 6 : Now at this stage by saving the .hbs files and then if we check on the browser for 
         localhost:3000/help , it won't work.It will give the error "The partials header could not be found"
         Bcz when we save changes from .js files, nodemon restart the server. But when we save changes
         from .hbs files , nodemon doesn't restarts the server.
         To address this problem we can make some changes in our nodemon command as below
PS F:\Node JS\Node JS Programs\Web_Server> nodemon .\source\06_Advanced_Templating.js -e js,hbs

the e flag is short for extension , this allows to provide after the space , the comma separated list of
extensions that nodemon should watch. Here js and hbs extensions.
Now we save the changes from any js or hbs files , nodemon will restart the server.

Step 7 : Now instead of giving this static text to header , we can give it dynamic text.
         We can use access properties and their values in here from our .js file. 
         (Here the current file where we are working). To do so we use two curly braces.
         open header.hbs and access title property.
         <h1> {{Page_Name}}</h1>
         Add 'Page_Name' property and its value for all routes.

Step 8 : You can add Navigation bar in header so that it can be accessible to every web page
          <div>
            <a href="/">Homepage</a>
            <a href="/about">About</a>
            <a href="/help">Help</a>
            <a href="/weather">Weather</a>
         </div>

Step 9 : So being able to use a partial makes it really easy to set something up once and use it 
         everywhere. And if I was to make any changes to the header I would just change this one file 
         and it would automatically update on all pages where the partial is used,
*/

const path = require('path')
const express = require('express')
const hbs = require('hbs')           // load in 'hbs' module

const app = express()
const publicDirPath = path.join(__dirname, '../Public')
const partialsPath = path.join(__dirname, '../partials')

app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirPath))

app.get('', (req, res) => {          // To render this on homepage you have to delete index.html first                 
    res.render('index', {
        Page_Name: 'Homepage',
        title: 'Weather App',
        name: 'Kiran Adamapure'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        Page_Name: 'About Us',
        title: 'About the author',
        name: 'kiran'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        Page_Name: 'Help',
        help_msg: 'To get help call at 8888.'
    })
})

app.get('/weather', (req, res) => {
    res.render('weather', {
        Page_Name: 'Weather Info',
        Location: 'Philadelphia',
        Forecast: '45 Degree Tempareture , Sunny weather.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

/* 
Challenge : Create a partial for the footer
   1. Setup the template for the footer partial 
   2. Render the partial at the bottom of all four pages
   3. Test your work by visiting all four pages

See the 'footer.hbs' from 'partials' directory ---
<h4> Thanks for visiting us !!!</h4>
<p> For more information click on the link below</p>
<p> <a href="/help">More Info</a></p>    
*/