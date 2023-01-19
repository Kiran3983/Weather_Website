/* Lec 57- Browser HTTP request with Fetch */

/* Here we are creating client side javascript to , only one of the four pages of our web application
will show the weather for given address and this is the 'weather' page. So we have to link this 
javascript to that weather page only using 'script' element. The code that goes inside of here is gonna 
be related to fetching the forecast and since this is the only page that needs to fetch the forecast, 
it's the only page that needs this code. The rest pages don't need this client side javascript and 
these rest pages are index(homepage) , about , help and 404page*/

/* We need to add this javascript file to html files or the 'views' that we have created. We will use
'script' element. The script element is not an empty element like a 'link' that we used to add css file 
to html file. The 'script' element requires one attribute which is 'src'and it is short for 'source'. 
The 'src' attribute is a key-value pair which takes relative path to the javascript file.
e.g.   <script src="/js/App.js"></script>    
Add this line of code to weather.html and weather.hbs The later is imp only as our app will use only this*/

/* Now to actually make the HTTP request from client side JavaScript, we'll be using the very popular 
Fetch API. Fetch is not part of JavaScript. It is a browser based API which means it's something we can 
use in all modern browsers, but it's not accessible in node JS. So the code we write inside of here 
isn't gonna be something you'll be able to use in a backend node script. Here this script is running in 
client side Java script so using the Fetch API is perfectly fine.  */

/*
Challenge : Fetch weather
    1. Setup a call to fetch weather for boston
    2. Get the parsed JSON response
        - If error property , print error
        - If no error property, print location and forecast
    3. Refresh the browser and test your work
*/

// console.log('Clientside Javascript is running !!!') // just to confirm that javascript is running


// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.Location)
//             console.log(data.Forecast)
//         }
//     })
// })

/* Fetch is a function,so we're going to call it as such and we pass to it a string. This is the URL we're
trying to fetch from.  Here the link is "http://localhost:3000/weather?address=boston"

Calling 'Fetch' in our client side Java script is gonna kick off an asynchronous IO operation, much like 
calling a 'request' in node JS did. That means we don't have access to the data right away. Instead, we 
provide a function and that function will run at some point in the future when the data is available.
Now with the 'request' function in Node we passed a callback as the second argument to the function.
With the Fetch API, it's actually slightly different. Instead, we use the 'then' method on the return 
value from fetch and we provide to it the callback function we wanna run and we get access to the 'response' 
as the first and only argument up above. Then inside of callback function , we can use the response to do 
whatever we want to do, like extract the data and render it to the browser or just dump it to the console.

so "fetch('http://localhost:3000/weather?address=boston').then((response) => {"
This line means fetch data from this URL and then run this function on the response that we get from fetch.

response.json().then((data) => {              // parsing the response data to JSON data
    console.log(data)"                        // printing the parsed JSON data. (not in the above code, bcz instead of printing data directly we used if else)
}  
This line means function under this is gonna run when we get the response data parsed into json data.
(You can use any name instead of 'data' in this line). Here we are just printing the data so our function 
will print the json data which is parsed from the response we get from fetch.
In this way we can fetch the data from a URL , parse it into a JSON object and then do 
something with it like dump it to console or render it to browser.

Now we will use some conditional logic  if things went right or if things went wrong.
If things went wrong we will print the error msg, if things went well then we will print location and forecast.
i.e.    if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.Location)
            console.log(data.Forecast)
        }

Now the last step is to check our work using valid(boston) and invalid(!) address to find forecast.
To search for these two location (boston and ! ) make changes in url and save changes so that nodemon
restarts the server then head onto browser and test the response on console.
for valid = "http://localhost:3000/weather?address=boston"
for invalid = "http://localhost:3000/weather?address=!"
*/


/* Lec 58- Creating search Form */

/* Creating a form to take input from user (in weather.hbs)
    <form>
    <input placeholder="Location">
    <button>Search</button>
    </form>

When we hit this submit button , nothing will happen as this is is not wired up with our client side JS
code. To do this we need to select the form element using query selector
i.e. const weatherForm = document.querySelecector('form')  // form is an element name that we are selecting

Event listner takes two args i.e. event name and the callback function that occurs everytime when that
event occurs.
Adding event listner to this element.
i.e. weatherForm.addEventListener()

event.preventDefault() : To prevent browser's default behaviour of getting refresh every time when that
event occurs.

selecting 'input' element
const search = document.querySelector('input')
*/


// console.log('Clientside Javascript is running !!!') // just to confirm that javascript is running

// const weatherForm = document.querySelector('form')  // selecting the 'form' element
// const search = document.querySelector('input')      // selecting the 'input' element

// weatherForm.addEventListener('submit', (event) => {   // you can call 'event' or anything else to this parameter
//     event.preventDefault()
    
//     const location = search.value

//     fetch('http://localhost:3000/weather?address= '+ location).then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log(data.Location)
//                 console.log(data.Forecast)
//             }
//         })
//     })
// })




/* Lec 59- Wiring up the user interface 
To print error in case things went wrong or to print response data in case things went right,
on the browser , we will create two empty paragraphs in index.hbs 
And then will access these paragraphs using their id's in this javascript file 
        <p id="message-1" ></p>
        <p id="message-2"></p>
*/

console.log('Clientside Javascript is running !!!') // just to confirm that javascript is running

const weatherForm = document.querySelector('form')  // selecting the 'form' element
const search = document.querySelector('input')      // selecting the 'input' element
const messageOne = document.querySelector('#message-1') // selecting p element with id 'message-1
const messageTwo = document.querySelector('#message-2') // selecting p element with id 'message-2


weatherForm.addEventListener('submit', (event) => {   // you can call 'event' or anything else to this parameter
    event.preventDefault()
    
    const location = search.value
    messageOne.textContent = 'Loading...'   // to show loading at place of first paragraph
    messageTwo.textContent = ''             // to show empty string at place of second paragraph


    fetch('http://localhost:3000/weather?address= '+ location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error    // to print error on browser
            } else {
                messageOne.textContent = data.Location // to print location on browser
                messageTwo.textContent = data.Forecast // to print forecast on browser
            }
        })
    })
}) 

