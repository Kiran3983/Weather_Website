/* We have copied and pasted our two function 'geocode' and 'forecast' inside 'Web_Server' directory,
that were created inside of 'Weather_App' directory.

As we are going to use these two functions, we need to install 'request' npm module in current directory
also i.e. inside of 'Web_Server' directory.
Run commnand in 'Web_Server' directory --- npm i request@2.88.0
*/

/* If u can't understand the code below , repeat the lecture "55. Building a JSON HTTP Endpoint" */

/*
Challenge: Wire up the /weather route
   1. Require geocode and forecast
   2. Use the address to geocode
   3. Use the co-ordinates to get forecast
   4. Send back the real forecast and location
*/

/* 
Run this file using command below from Web_Server directory:
nodemon .\Source\12_Building_JSON_HTTP_Endpoint.js -e js,hbs

Test your work by using following url in browser:
localhost:3000/weather
localhost:3000/weather?address=kolhapur
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
        return res.send({
            error: 'You must provide an address to fetch weather information...'
        })
    }
    geocode(req.query.address, (error, { lattitude, longitude, location }) => {
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



/* 
In above /weather code we have used return to stop the function execution but instead of this we can use 
else statement also as given below : 
 
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send({
            error: 'You must provide an address to fetch weather information...'
        })
    } else {
        geocode(req.query.address, (error, { lattitude, longitude, location }) => {
            if (error) {
                res.send({ error: error })   // you can use object shorthand syntax here to write it as return res.send({error}) 
            } else {
                forecast(lattitude, longitude, (error, forecastData) => {
                    if (error) {
                        res.send({ error: error }) // you can use object shorthand syntax here to write it as return res.send({error})     
                    } else {

                        res.send({
                            Forecast: forecastData,
                            Location: location,
                            Address: req.query.address
                        })
                    }
                })
            }
        })
    }
})
*/
