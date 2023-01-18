/* We are focussing on only one file here 'styles.css' from 'CSS' directory */

/* See the changes made inside 'styles.css' */

/* To set any HTML element just type that element name and press 'Tab' key to autogenerate the tags 
   e.g. type div and hit Tab button --- result will be <div> </div> */

/* Type 'div.class_name' and hit 'Tab' button , result will be div element with given class name
   e.g. div.main-content
   <div class="main-content"></div>
*/

/* To see the changes on web pages you can run the previous file with following command from 
Web_Server directory
nodemon .\source\08_Challenge_Error_Page.js -e js,hbs */

/* To add the name of web page showing in tab --- Add title  in head element of html */
   
/* To add the icon showing in tab --- 
   step 1 - put that icon image inside 'img' directory
   step 2 - add link element in head of html
        e.g. <link rel="icon" href="/img/clouds.png">  
*/

/* To create sticky footer use fkex-box technique */

/* Directory Structure :
   Web_Server 
      node_modules --- All the installed npm modules
      partials     --- contains the header and footer hbs files
      public       --- Anything inside it is available to browser through web servers
      source       --- All the codes
      views        --- hbs templates for all routes
*/