//form handling and working with forms handle backend process of forms and making sure the data coming from any frontend lib,framework template engines, we still handle it at the backend.

//we have to install cookie-parser

//session and cookies are used to store data on the client side. session is stored on the server side and cookies are stored on the client side. session is more secure than cookies. 

//login karne se leke logout tak, session kehlata hai. session is stored on the server side. cookies are stored on the client side.

//cookie is a small piece of data that a server sends to the user's web browser. the browser may store it and send it back with the next request to the same server. typically, it's used to tell if two requests came from the same browser, such as keeping a user logged in. it remembers the user's data. 

//session is a server-side storage of information that is desired to persist throughout the user's interaction with the web site or web application. 

//Now for using session and cookies, we have to install cookie-parser and express-session.

//before any route we will use 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
