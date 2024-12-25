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