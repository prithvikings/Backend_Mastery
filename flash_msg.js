flash_msg
// jab bhi aap kisi ejs page ko dekhenge whaa par aapko kisi prakar ka koi information dena hai, wo kehlata hai flash messages, they are more like good looking alert messages, success messages, error messages, etc.

// -------------------------------------------------- flash messages --------------------------------------------------


// for using flash messages in your application, you need to install a package called connect-flash. to install this package, you need to run the following command:

// npm install connect-flash



// after installing the package, you need to require it in your app.js file. you can do this by adding the following line of code in your app.js file:

// const flash = require('connect-flash');



// after requiring the package, you need to use it as a middleware in your app.js file. you can do this by adding the following line of code in your app.js file:

// app.use(flash());



// after adding the middleware, you can use the flash messages in your application
// to use flash messages in your application, you need to use the following code in your controller file
// req.flash('success', 'your message here');
// req.flash('error', 'your message here');
// req.flash('info', 'your message here');
// req.flash('warning', 'your message here');
// req.flash('danger', 'your message here');

// to display the flash messages in your ejs file, you need to use the following code:
// <% if (typeof req.flash('success') !== 'undefined') { %>
//   <div class="alert alert-success">
//     <%= req.flash('success') %>
//   </div>
// <% } %>
// <% if (typeof req.flash('error') !== 'undefined') { %>
//   <div class="alert alert-danger">
//     <%= req.flash('error') %>
//   </div>
// <% } %>


//remember one thing we can not use flash message without express-session so first we need to install express-session and then we can use flash message in our application.