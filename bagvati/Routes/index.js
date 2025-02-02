const express = require('express');
const router = express.Router();
const isloggedin = require("../middleware/isloggedin");
const productModel=require("../models/product-Model");
const userModel = require('../models/user-Model');

router.get("/",(req,res)=>{
  let error=req.flash('error');
  res.render('index',{error,loggedin:false});
})

router.get("/shop",isloggedin,async (req,res)=>{
  let products= await productModel.find();
  let Success=req.flash('Success');
  res.render('shop',{products,Success});
});

router.get("/cart",isloggedin,async (req,res)=>{
  let user=await userModel
  .findOne({email:req.user.email})
  .populate("cart");


 const bill= (Number(user.cart[0].price)+20)-Number(user.cart[0].discount);

  res.render('cart',{user,bill});
});

router.get("/addtocart/:productid",isloggedin,async (req,res)=>{
 let user=await userModel.findOne({email:req.user.email});
  user.cart.push(req.params.productid);
  await user.save();
  res.flash("Success","Product added to cart");
  res.redirect("/shop");
});


router.get("/logout",isloggedin,(req,res)=>{
  res.render("shop");
});

module.exports = router;
