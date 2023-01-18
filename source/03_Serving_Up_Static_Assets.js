/* Static Assets means they are fixed , they are not gonna be changed even if refresh the page hundred
times.

In this file we're going to configure express to serve up an entire directory of assets.
That could contain HTML files , CSS files , client side javascript , videos , images and more.
For that we will create a new directory --- 'Public' , anything inside the public will be reffered
to the express. Everything inside "Public" directory is available to user via web servers.
To serve this 'public' folder to the express we need its absolute path from the root of the machine
and not the relative path. To get this path Node provide us to vaariables , which we can use.
To get directory path --- console.log(__dirname)    // It contains 2 underscores
To get file path      --- console.log(__filename)   // It contains 2 underscores
e.g. For this current script
command                                        output
console.log(__dirname)          F:\Node JS\Node JS Programs\Web_Server\Source
console.log(__filename)         F:\Node JS\Node JS Programs\Web_Server\Source\03_Serving_Up_Static_Assets.js

We have one node core module "path" , using it we can do plenty of things with path like manipulating the string.
Since it is a core node module we didnot need to install it, it is bulit in, we can directly require it.
We require our core modules before the npm modules in our script , just for oraganzing the code ,
this is not compulsary.
e.g. 
console.log(__dirname)      --- This will give path to directory of current file i.e. 'Source' directory
console.log(path.join(__dirname, '../Public'))  --- This will give path to directory 'Public'

path.join is a function which takes 2 args , i.e. paths of which directories to be manipulated
..  --- .. is used to get up a folder
../.. --- .. is used to get up a folder and again .. is used go up by again a folder
../..   --- .. to get up a folder and then /Public to go in Public folder

console.log(path.join(__dirname, '../Public')) 
__dirname will give path to Source directory and ../Public will go up by a folder and then will go in
to Public directory

__dirname                          --- F:\Node JS\Node JS Programs\Web_Server\Source
path.join(__dirname, '../Public')  --- F:\Node JS\Node JS Programs\Web_Server\Public

Originally we have path to 'Source' directory and then we have used 'path' function to go in
'Public' directory. Now we have the path to Public directory which we can use to configure express
to serve that directory up.

To serve the directory we use 'use' method on app , i.e. app.use(). It is a way to customize our
server to serve up that folder.

app.use(express.static(publicDirPath))
static takes the path of the folder that we want to serve up.
'express.static' is a function and we are passing its return value to 'use'

Now at this stage when we heads in browser and search localhost:3000 , we can see the content of 
HTML file from Public directory.
Now our browser will not show the text responses that we set in previous file,
it will show the content of HTML files that we have created in Public directory.
Everything put into 'Public' directory will be available to access for the web server. It includes
CSS , JS , IMG , HTML files that are created inside 'Public' directory.

*/ 


const path = require('path')
const express = require('express')

/* This two console.log statements are used here just to notice the difference and know working of path */
console.log(__dirname)
console.log(path.join(__dirname, '../Public'))      // .. to get up a folder and then /Public to point to Public folder

const app = express()
const publicDirPath = path.join(__dirname, '../Public')   // manipulating the path string

app.use(express.static(publicDirPath))


/* Now below functions has no meaning bcz these text responses will not be showed in browser.
   Browser will show data of HTML files from Public directory on the different routes in browser.
   search following through browser
   localhost:3000 or localhost:3000/index.html 
   localhost:3000/help.html
   localhost:3000/about.html
   localhost:3000/weather.html
*/
app.get('', (req, res) => {                         
   res.send('<h1>Hello Express !!!</h1>')           
})

app.get('/help', (req, res) => {
   res.send({                                      
      name: 'Andrew',
      age: 27,
      help_number: 8888
   })
})

app.get('/about', (req, res) => {
   res.send([{                                    
      name: 'Andew'
   },
   {
      name: 'Sara'
   },
   {
      name: 'Mack'
   }])
})

app.get('/weather', (req, res) => {
   res.send({                                        
      Location : 'Philadelphia',
      Forecast: '45 Degree Tempareture , Sunny weather.'
   })
})

app.listen(3000, () => {
   console.log('Server is up on port 3000')
})

/*
Note the difference while using following searches in browser
   localhost:3000 or localhost:3000/index.html 
   localhost:3000/help.html
   localhost:3000/about.html
   localhost:3000/weather.html   // These searches will show data from HTML files
          VS
   localhost:3000 
   localhost:3000/help
   localhost:3000/about
   localhost:3000/weather        // These searhces will show text responses

*/