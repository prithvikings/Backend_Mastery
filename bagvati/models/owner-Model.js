const mongoose=require('mongoose');

const ownerSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:50
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    gstin:String,
    picture:String
});

module.exports = mongoose.model('owner',ownerSchema);