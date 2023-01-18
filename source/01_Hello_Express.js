/* The tool we are going to use to create Node servers is Express Library ( Visit sExpressjs.com)*/

/* 
We will install npm module 'Express' in Web_Server directory.
   step 1 : change directory to Web_Server --- cd Web_Server
   step 2 : initialize npm --- npm init -y (y flag to take all default values)
   step 3 : Now we have package.json inside the directory 'Web_Server'
   step 4 : install express --- npm i express@4.16.4
*/

/* Express library exposes just a single function , which we call to create a new express application. */

const express = require('express')

const app = express()

app.get('' , (req , res) => {                  // for root route i.e. app.com (hence empty string '')
   res.send('Hello Express !!!')
})

app.get('/help' , (req , res) => {             // for /help route (hence the string '/help')
   res.send('Help Page')
})

app.listen(3000 , () => {
   console.log('Server is up on port 3000')
})

/* 
   we have created a new variable to store our application --- ' app '
   to generate the application we call express --- express()
   Express function doesnot take any argument , instead we configure our server by using various methods 
   provided on the application itself.

   We can have multiple routes in our app. 
   e.g. app.com , app.com/help , app.com/about   (Here app.com is a root route)

   To set the server to send the response when someone tries something at specific route , we set the 'get'
   method on app. 
   e.g. app.get
   This lets us configure what the server should do when someone tries to get resource at a specific url.
   May be we should be sending HTML or may be we should be sending back JSON.

   get method takes two args , first is the route(the partial url) and second is the function that defines
   what we are gonna do when someone visits particular route.
   e.g. app.get(' ' , () => {
      
      })

   This functions runs with two args, first is an object containing information about the incoming request
   to the server. This is commonly called REQ, which is short for request. 
   The other argument is the response. This is called RES, which is short for response. Response contains
   a bunch of methods allowing us to customize what we're gonna send back to the requester.
   e.g. app.get(' ' , (req , res) => {
         
      })
   
   res.send() allows us to send something back to the requester.
   e.g. app.get(' ' , (req , res) => {
         res.send('Hello Express !!!')
      })
   when someone makes request from browser , this will be displayed--- Hello Express !!!

   To start the server up , we have to use 'listen' method on app , which will only ever use a single time
   in our application.
   e.g. app.listen()

   listen methods takes two args , first is the port number and the other optional argument is a
   callback function which just runs when the server is up and running.
   Starting up server is isn't asynchronus process though it happens instantly.
   e.g. app.listen(3000 , () => {
         console.log('Server is up on port 3000')   
   })

   console.log('Server is up on port 3000') --- This msg is printed just to know the requester that
                              server is up successfully.This will not be seen anywhere in browser.
   
   To run this file --- 
   node Source/01_Hello_Express.js (Running from Web_Server directory)  or
   node 01_Hello_Express.js (Running from Source directory of Web_Server)
   After running the file , it will not be directed back to command prompt , it will go on running.
   We can shut this down by pressing 'ctrl + c' at any time.
   
   Now the server is up and running. But now we can use the 'app.com' domain in browser on our local machine only.
   Head to browser and search for 'localhost:3000'
   We have given port number 3000 bcz we have choose to listen on port 3000.
   Now in browser we will see 'Hello Express !!!'
   
   We can add multiple routes using get method
   e.g. app.get('/help' , (req , res) => {
            res.send('Help Page')
   })

   If we make some changes in code , we have to restart the server , bcz server don't know about changes.
   We can do it simply by pressing 'ctrl + c' and then starting it up again using node command given below.
   node Source/01_Hello_Express.js (Running from Web_Server directory)  or
   node 01_Hello_Express.js (Running from Web_Server\Source directory)

   Instead of doing this again and again i.e. restarting the server everytime after making changes in script,
   we can use nodemon. It will restart the server whenever we make changes in this script and save it.
   nodemon Source/01_Hello_Express.js (Running from Web_Server directory)  or
   nodemon 01_Hello_Express.js (Running from Source directory of Web_Server)

   Now head to browser and search localhost:3000/help , it will display 'Help Page'

   */

   /* 
   Challenge: Setup two new routes
     1. Setup an 'about' route and render a page title
     2. Setup a 'weather' route and render a page title
     3. Test your work by visiting both in the browser.
   */
   
// const express = require('express')

// const app = express()

// app.get('' , (req , res) => {                  // for root route i.e. app.com (hence empty string '')
//    res.send('Hello Express !!!')
// })

// app.get('/help' , (req , res) => {             // for /help route (hence the string '/help')
//    res.send('Help Page')
// })

// app.get('/about' , (req , res) => {            // for /about route (hence the string '/about')
//    res.send('About us page')
// })

// app.get('/weather' , (req , res) => {          // for /weather route (hence the string '/weather')
//    res.send('Weather Information')
// })

// app.listen(3000 , () => {
//    console.log('Server is up on port 3000')
// })

/* 
Test your work by running following URLs in browser
   localhost:3000
   localhost:3000/help
   localhost:3000/about
   localhost:3000/weather
*/
