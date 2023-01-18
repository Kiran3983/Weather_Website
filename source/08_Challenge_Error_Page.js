/* 
Challenge: Create and render a 404 page with handlebars 
  1. Setup the template to render the header and footer
  2. Setup the template to render an error message in a paragraph
  3. Render the template for both 404 routes
    -- Page not found
    -- Help article not found
  4. Test your work. Visit /what and /help/units
*/

/*
Step 1 : Create a new view '404.hbs'
Step 2 : set route handlers using 'render' instead of 'send' as we are not sending back static text
Step 3 : Test your work by visiting localhost:3000/what , localhost:3000/help/units
         localhost:3000/what gives error          --- Page not found
         localhost:3000/help/what gives error     --- Help article not found

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

// setting route for '/help/*'
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMessage : 'Help article not found !!!'
    })
})

// setting route for '*' 
app.get('*', (req, res) => {
    res.render('404' , {
        title: 404,
        errorMessage:'Page not found !!!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
