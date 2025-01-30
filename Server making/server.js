//http- protocol 
//yahi protocol hai ya rule hai jisko follow kare bina aap internet pe naa hi kuch bhej sakte ho, naa hi kuchh manga sakte ho


//what is method in programming language
//method is a function which is used to perform some operation on the data or to perform some task.

//http module is used to create server in node.js

//createServer method is used to create server
//createServer method takes a callback function as an argument which takes two arguments request and response
//request object is used to get the information about the request made by the client and response object is used to send the response to the client 
//listen method is used to start the server and it takes two arguments port number and a callback function
//callback function is used to print a message on the console that the server is running on a particular port number


const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/secretdata'){
        res.end('Their is no seceret data');
    }
    if(req.url==='/'){
        res.end('Welcome to our homepage');
    }
    res.end('Hello World');
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})