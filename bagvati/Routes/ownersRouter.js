const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-Model');

router.get('/', (req, res) => {
    res.send('Owners');
    }
);

router.post("/create", async (req, res) => {
    let owners=await ownerModel.find();
    if(owners.length>0){
        return res
        .status(400)
        .send("You don't have permission to create more than one owner");
    }
    let createdOwner=await ownerModel.create({
        fullName : req.body.fullName,
        email : req.body.email,
        password : req.body.password,
    });
    res.status(201).send(createdOwner);
});

module.exports = router;