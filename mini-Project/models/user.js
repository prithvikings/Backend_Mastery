const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://prithvi312:fsfO7jyoofuv0jz5@cluster0.wrm4e.mongodb.net/miniproject",);
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
})();

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number,
    name:String,
    profilepic:{
        type:String,
        default:"default.png"
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }
    ]
});

module.exports = mongoose.model('user', userSchema);
