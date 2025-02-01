const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
app.use(cookieParser());

// for setting cookie using jasonwebtoken
app.get('/',(req,res)=>{
    const token = jwt.sign({name:"Aman"},'my_secret_key');
    res.cookie('token',token).send('cookie set');
    console.log("token is set : ",token);
})


// for reading cookie
app.get('/read',(req,res)=>{
    let data=jwt.verify(req.cookies.token,'my_secret_key');
    res.send(data);
})

// for clearing cookie
app.get('/clear',(req,res)=>{
    res.clearCookie('name').send('cookie cleared');
})


var hashed="";
// for hashing password
app.get("/auth",(req,res)=>{
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) throw err;
        bcrypt.hash('password',salt,(err,hash)=>{
            if(err) throw err;
            res.send(hash);
            hashed = hash;
            console.log(hash);
        })
    })
})

// for comparing password
app.get("/compare",(req,res)=>{
    bcrypt.compare('password',hashed,(err,result)=>{
        if(err) throw err;
        res.send(result);
        console.log(result);
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});