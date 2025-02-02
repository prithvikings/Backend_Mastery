const express=require('express');
const app=express();
const path=require('path');
const cookieParser=require('cookie-parser');
const expressSession=require('express-session');
const flash=require('connect-flash');


require('dotenv').config();


const ownersRouter=require('./Routes/ownersRouter');
const usersRouter=require('./Routes/usersRouter');
const productsRouter=require('./Routes/productsRouter');
const homeRoute=require("./Routes/index");

const db=require("./configuration/mongooseConnection");



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false, 
        saveUninitialized: false, 
       secret: "myseckey" 
    }))

app.use(flash());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error });
});
app.use("/",homeRoute);
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    });
