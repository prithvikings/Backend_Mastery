const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:50
    },
    email:String,
    password:String,
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
    },
],
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
});

module.exports = mongoose.model('user',userSchema);
