/* Customizing the Views Directory :
How we can customize the location and the name of the views directory ??

Express expects that your 'viwes' directory to live in the root of the project i.e. here in the
'Web_Server' directory and the name should be 'views'. If it is saved somewhere else or it has given with 
different name than 'views' then it won't work. If you tried this same program by changing the name of 'views'
directory to something else , then it won't work. Now this is just the default location that Express expects 
your views to live in. You can always customize that, but to customize it you have to tell Express where 
to look. And this is gonna require us to create a brand new path and then provide the same to Express.

In this section , we just changed the name of "views" directory to 'templates' . Now at this stage if we ran our
script , it will throw an error bcz Express is not looking for template , it is looking only for 'views'
directory. We can change the name and location of 'views' directory but we have to tell to Express where to 
look for. Here as we changed the named , we have to tell to Express.

Step 1: const viewsPath = path.join(__dirname, '../templates')
We simply created a variable named 'viewsPath' which stores the path of 'templates' directory , which stores
our views.
'__dirname' --- gives the path of directory where the current script lives in i.e. here path of 'Source' directory
as this file is in 'Source' directory.

'../' --- will go up by one folder so here it will go up from 'Source' directory to 'Web_Server' directory
then 'templates' will go in templates directory.

../templates --- It will go from 'Source' directory to 'templates' directory , where our views are saved.

Step 2: app.set('views', viewsPath)
Using this line we tell the Express to use this path.

*/

const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../Public')   
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {          // To render this on homepage you have to delete index.html first                 
   res.render('index', {
    title: 'Weather App',
    name: 'Kiran Adamapure'
   })           
})

app.get('/about', (req, res) => {
   res.render('about', {
    title: 'About the author',
    name: 'kiran'
   })
})

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

/* Visit expressjs.com for more info about Express (expressjs.com >> API reference) */