/*
Challenge: Update weather endpoint to accept address
  1. If no address is provided then send back an error msg
  2. If address is provided then send back static JSON
     Add address property on JSON which returns the provided address
  3. Test by using localhost:3000/weather and localhost:3000/weather?address=philadelphia
*/

/*
Run this file using command below from Web_Server directory:
nodemon .\Source\11_Challenge_for_Weather_Endpoint.js -e js,hbs

Go to browser and following url to test the work
localhost:3000/weather                       --- output must be an error msg
localhost:3000/weather?address=philadelphia  --- output must be weather info
*/

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirPath = path.join(__dirname, '../Public')
const partialsPath = path.join(__dirname, '../partials')

app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
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
    if (!req.query.address) {
        res.send({
            error: 'You must provide an address to fetch weather information...'
        })
    } else {
        res.send({
            Title: 'Weather Info',
            Address: req.query.address,
            Forecast: '45 Degree Tempareture , Sunny weather.'
        })
    }
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMessage: 'Help article not found !!!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMessage: 'Page not found !!!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
