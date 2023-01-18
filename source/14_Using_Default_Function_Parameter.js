/* 
If we dont provide address , our error msg saying ' You must provide an address to fetch weather information... ' will be printed
But what if we provide some value where we don't find any match. (e.g. '!' ) Our server will crash.
 URL : localhost:3000/weather?address=!
The error we get on terminal is :
 TypeError: Cannot destructure property 'lattitude' of 'undefined' as it is undefined.
 
We have seen the same error in previous file. Look at following line of code from our script , where the error is

 geocode(req.query.address, (error, { lattitude, longitude, location }) => {

geocode takes in 2 arguments i.e. address and a callback function
callback function runs with 2 args i.e. error and response (response data is lattitude, longitude, location)
As we provide address (here '!'), it will not find any match on geocode API so the value of response 
data will be undefined and we cannot destructure undefine , which we are trying in above line of code.

(we have destructured 'body' object of response data in above line of code , which is not working in
this case as body object is undefined here bcz given address has no match to send back the response data.
And the problem here is we are still trying to destructure the object and we cannot destructure undefined)

To avoid this error we will use an empty object as default value for response data , which will be
accessed in case geocode doesnot finds any match for given address.

 geocode(req.query.address, (error, { lattitude, longitude, location } = {}) => {

Save the changes so that nodemon restarts the server and head back to browser and search using the url
 URL : localhost:3000/weather?address=!
Now the output will be
 "error": "No match found !!! Please try with other location !!!"
*/

/* 
Run below code using following command from web_server directory
command --- nodemon .\Source\14_Using_Default_Function_Parameter.js -e js,hbs

Use the url ---
location:3000/weather
location:3000/weather?address
location:3000/weather?address=!
location:3000/weather?address=kolhapur
*/

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')

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
        name: 'Kiran'
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
        return res.send({
            error: 'You must provide an address to fetch weather information...'
        })
    }
    geocode(req.query.address, (error, { lattitude, longitude, location } = {}) => {     // default function parameter is used here
        if (error) {
            return res.send({ error: error })   // you can use object shorthand syntax here to write it as return res.send({error}) 
        }

        forecast(lattitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error: error }) // you can use object shorthand syntax here to write it as return res.send({error})     
            }

            res.send({
                Forecast: forecastData,
                Location: location,
                Address: req.query.address
            })
        })
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
