const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./models/user');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/read',async(req,res)=>{
    let users=await userModel.find();
    res.render('read',{users});
});

app.post('/create',async(req,res)=>{
    let {name,email,image}=req.body;
    let crerateduser=await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read');
});


app.get('/delete/:id',async(req,res)=>{
    let id=req.params.id;
    await userModel.findByIdAndDelete(id);
    res.redirect('/read');
});

app.get('/edit/:id', async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.id });
    res.render('edit', { user });
});



app.post('/update/:id', async (req, res) => {
    let { name, email, image } = req.body;
    await userModel.findOneAndUpdate(
        { _id: req.params.id },
        { image, name, email }
    );
    res.redirect('/read'); // Redirect instead of render
});


app.listen(3000,()=>{
    console.log('server is running on port 3000');
})