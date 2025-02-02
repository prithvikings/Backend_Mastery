const express = require('express');
const router = express.Router();
const isloggedin = require("../middleware/isloggedin");


router.get("/",(req,res)=>{
  let error=req.flash('error');
  res.render('index',{error});
})

router.get("/shop",isloggedin,(req,res)=>{
  res.render('shop');
});

module.exports = router;