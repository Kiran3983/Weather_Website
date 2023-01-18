/* Code from '01_Hello_Express.js' */

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


/* Here we have set our server and four routes. On each route we are sending 'Text Response'.
   But in reality we are not going to send text response only. We either gonna send HTML, designed to be
   rendered in the browser or we gonna send back JSON designed to be consumed and used by code. */

const express = require('express')

const app = express()

app.get('', (req, res) => {
   res.send('<h1>Hello Express !!!</h1>')           // sending back HTML
})

app.get('/help', (req, res) => {
   res.send({                                       // sending back JSON (object)
      name: 'Andrew',
      age: 27,
      help_number: 8888
   })
})

app.get('/about', (req, res) => {
   res.send([{                                      // sending back JSON (Array)
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
   res.send({                                        // sending back JSON
      Location : 'Philadelphia',
      Forecast: '45 Degree Tempareture , Sunny weather.'
   })
})

app.listen(3000, () => {
   console.log('Server is up on port 3000')
})
