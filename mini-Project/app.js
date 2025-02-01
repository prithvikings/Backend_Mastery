const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./models/user');
const cookieParser=require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));




app.get('/',(req,res)=>{
    res.render('index');
});


app.post('/register',async(req,res)=>{
    let{username,password,email,age,name}=req.body;
    let user=await userModel.findOne({email});
    if(user){
        res.json({message:'User already exists'});
    }else{

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, async (err, hash)=> {
                // Store hash in your password DB.
                let user=await userModel.create({username,password:hash,email,age,name});
            });
        });
        res.json({message:'User created successfully'});
    }
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});