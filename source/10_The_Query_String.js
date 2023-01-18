/* 
So right now, we have these two distinct applications. On the back end, we know how to take an address
and convert that into a forecast. And on the front end, we know how to get our web application up and 
running in the browser. The real question is how do we integrate these two together?
What we need is for the browser to be able to communicate with the server, passing an address along.
Then the server needs to convert that address into a forecast and pass it back to the browser,
so the browser can actually render forecast data to the screen. To get that done, we're gonna learn 
how to create our own http JSON endpoints with Express.
*/

/* 
query strings get provided on the end of the URL. We start them off with a question mark,
then we provide key value pairs to pass additional information to the server.
So the format is key=value
If you want to add more than one qurey strings , separate them using ampersand.
e.g. localhost:3000/products?search=games&rating=5
Here we have used two key value pairs separated by ampersand. We are requesting games with 5 rating.
The question is how will server get that information ? 
>>>  This information, it's available to us inside of our Express route handler.
e.g. 
app.get('/products', (req, res) => {
    res.send({
        products: []
    })
})

We have both req and res(i.e.request and response).Information about that query string lives on request.
The request object has a query property on there. Query is also an object and this contains all of the
query string information. 
To see the value of query object lets dump that to console.
app.get('/products', (req, res) => {
    console.log(req.query)
    res.send({
        products: []
    })
})

Save the changes in code and Refresh the page in browser (localhost:3000/products?search=games&rating=5)
The response we are getting in browser still same, but if we head back to VS Code , we will see that
query object is printed on console i.e. { search: 'games', rating: '5' }
If you want to access specific value out of it then use 'console.log(req.query.search)' instead of
'console.log(req.query)'. Then save the changes in code so nodemon can restart the server and then 
refresh the page in browser and then head back to vs code , you will see 'games' printed on terminal.

So the query string that was provided along with the request has been parsed by Express, and the data
is made available to us in this object. So being able to work with req.query is how we're gonna access 
those additional values passed along with the request.

Express doesn't give us a way to force a given query option to be provided.
So for this example, let's say that search needs to be provided.You have to search for something,
but you don't have to provide rating. If we wanted to actually set that up, we'd have to use an 
if statement to add a little bit of conditional logic inside of our function.

app.get('/products', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'You must provide a search term.'
        })
    } else {
        console.log(req.query.search)
        res.send({
            products: []
        })
    }
})
 
if (!req.query.search) --- This statement will execute if their is no 'req.query.search' term otherwise
                           else statement will run 

if (req.query.search)  --- This statement will execute if their is 'req.query.search' term
                           (Notice the negation operator in above if statements)

So if we provide search term with query string , it will be printed on terminal and browser both.
But if we didn't provide search term with query string, if statement will run and will print the error
msg on browser only.
Test it using two url below:
localhost:3000/products --- Output must be an error msg
localhost:3000/products?search=games --- output must be a product's JSON object.

Instead of using else statement in above code , we can use 'return'. By using return, we are stopping 
the function execution. So if there is no search term then we stop the function execution. 
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term.'
        })
    } 
    
    console.log(req.query.search)
    res.send({
        products: []
    })
})

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
    res.render('weather', {
        Page_Name: 'Weather Info',
        Location: 'Philadelphia',
        Forecast: '45 Degree Tempareture , Sunny weather.'
    })
})

app.get('/products', (req, res) => {                // Added new route 'products'
    if (!req.query.search) {                        // will run if  there is no search term in query
        res.send({
            error: 'You must provide a search term.'
        })
    } else {                                         // will run if there is a search term in query 
        console.log(req.query.search)                // to print searched product on terminal
        res.send({                                   // sending back JSON object to browser
            products: []
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
