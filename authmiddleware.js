//What is middleware?
//Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

const authentication = (req, res, next) => {
    const token = "xyz";
    const auth = "xyzhbv";

    if (token === auth) {
        console.log('You are authorized');
        next(); // Pass control to the next middleware or route handler
    } else {
        console.log('You are not authorized');
        res.status(403).send('Access denied'); // Send an error response and do not call `next()`
    }
};

module.exports = {authentication};
