/* To set up the 404 page for routes which we don't have support for we need to Setup route handler 
just like the route handlers that we set for index ,about , help and weather.

To match everything else which is not set before, Express provides us with the "wild card character"
we can use in our URLs and right here this means match anything that hasn't been matched so far.(*)

app.get('*', (req,res) => {
     res.send('404 Error !!!')          // sending back static text msg
})
Set this route at last i.e. just after all other routes has been set. This bcz Express start matching
the routes from top and then go one by one untill it finds a match. It will stop mathcing as soon as
it gets any match. 
e.g. Here if you searched localhost:3000/help  then it will go through in the sequence that we have 
configured our app. 
First it will check match with root route --- no matching
Then it will check match with aboute route --- no matching
Then it will check match with help route --- match found --- go to help route

e.g. If you searched localhost:3000/me
First it will check match with root route --- no matching
Then it will check match with aboute route --- no matching
Then it will check match with help route --- no matching
Then it will check match with weather route --- no matching
Then it will check match with * --- match found --- go to * route
(* --- Wild card character --- matches anything which has no match above)

To be more specific we can match any patterns also.
e.g. The help routes have another subroutes like callback, email, customerCare etc.
    In this case we will search on browser like localhost:3000/help/callback or 
    localhost:3000/help/email or localhost:3000/help/customerCare 
    As this searches will match with the routes that we have set in our app , required response 
    will be sent back. But what if it don't matches , in this case we have to set pattern
    
    app.get('/help/*', (req,res) => {
    res.send('Help articles not found !!!')        
    })

'*' will match anything after '/help/' that has no match previously.
Set this '/help/*' handler just above the '*' route handler.

Test this by searching 'localhost:3000/help' , 'localhost:3000/help/me' , 'localhost:3000/me'

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

app.get('/help/*', (req, res) => {
    res.send('Help articles not found !!!')
})

app.get('*', (req, res) => {
    res.send('404 Error !!!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

