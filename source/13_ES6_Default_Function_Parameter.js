/* This is the default parameters syntax and that's going to allow us to set a default value
for a function parameter when no argument is passed in. */

// const greeter = (name) => {
//     console.log('Hello ' + name)
// }

// greeter('Kiran')  // Output will be 'Hello Kiran'
// greeter()         // Output will be 'Hello undefined'

/*
When we don't pass any arguments to the function calls , then the default parameter value is "undefined"
Hence 'greeter()'  prints  'Hello undefined'
Insted of getting 'Hello undefined' we can print 'Hello user' or 'Hello Anonymous' when no argument
is passed into a function call so that our app will look better.
We can use if-else logic to do so or we can use the default function parameter syntax.
*/


/* Using if-else logic */

// const greet = (name) => {
//     if (!name) {
//         console.log('Hello User !!!')
//     }else{
//         console.log('Hello ' + name)
//     }
// }
// greet('Kiran')      // Output will be 'Hello Kiran'
// greet()             // Output will be 'Hello User'


/* Using default function parameter syntax */

// const greeter = (name= 'user') => {
//     console.log('Hello ' + name)
// }

// greeter('Kiran')  // Output will be 'Hello Kiran'
// greeter()         // Output will be 'Hello user'
 
/* In default function parameter syntax , we add equal sign followed by the default value that
you want to provide in case no argument is passed to a function call. The value may be a function, 
an array, an object, a number, a boolean or in our case, a string. */ 

/* ---------------------------------------------------------------------------------------------*/


/* Destructuring 'undefined': 
Below is code taken from file '11_ES6_Object_Properties.js' from 'Web_Server' directory.
Here we created a function 'transaction' and passed two parameters to it 'type' i.e. order type
and 'myProduct' i.e. product info.
In the function call we passed  two args to this function , 'order' to 'type' and 
an object 'product' to 'myProduct'. This will work fine. */

/* ---Defining an object---*/
// const product = {                     
//     label: 'Red Notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined
// } 

/* ---Defining a function---*/
// const transaction = (type , myProduct) => {
//     const{label  , stock } = myProduct        // destructuring
//     console.log(type , label , stock)         // printing
// }

/* ---Calling a function---*/
// transaction('order' , product)                // passing args

/* output: order Red Notebook 201 */

/* But if we didn't pass argument to a function call then it will throw an error as
TypeError: Cannot destructure property 'label' of 'myProduct' as it is undefined .
This bcz When we don't pass any arguments to the function calls , then the default parameter value 
is "undefined" and we can not destructure undefined.
Solution to this is , we can use default parameter syntax to provide a default value when no
argument is passed to function call. So when we provide argument to function call , it will take 
provided value , if we don't provide argument to a funtion call it will take default value. 
So nothing to do about 'undefined'.  */

/* ---Passing no argument to a function call---*/

// const product = {                     
//     label: 'Red Notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined
// } 

// const transaction = (type , myProduct) => {
//     const{label  , stock } = myProduct        // destructuring
//     console.log(type , label , stock)         // printing
// }

// transaction('order')         // arg is not passed for myProduct

/* Output: TypeError: Cannot destructure property 'label' of 'myProduct' as it is undefined */
 
/*-------------------------------------------------------------------------------------------------*/

/*  ---Using default parameter syntax to destructure 'undefined'--- */

// const product = {                     
//     label: 'Red Notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined
// } 

// const transaction = (type , myProduct= {}) => {  // used default value = {} i.e.empty object
//     const{label  , stock } = myProduct        // destructuring
//     console.log(type , label , stock)         // printing
// }

// transaction('order')

/* Output --- order undefined undefined */

/*-------------------------------------------------------------------------------------------------*/

/* ---Above code is same as--- */

// const product = {                     
//     label: 'Red Notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined
// } 

// const transaction = (type , {label , stock } = {}) => {
//     console.log(type , label , stock)         
// }

// transaction('order')

/* Output --- order undefined undefined */

/*-------------------------------------------------------------------------------------------------*/

/* ---Using default value for stock as zero--- */

// const product = {                     
//     label: 'Red Notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined
// } 

// const transaction = (type , {label , stock = 0} = {}) => {
//     console.log(type , label , stock)         
// }

// transaction('order')

/* Output : order undefined 0 */

/* Refer '11_ES6_Object_Properties.js'  for 'Object Destructuring' */