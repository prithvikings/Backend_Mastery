const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const connect=async()=>{
    try{
        await mongoose.connect(URI)
        console.log("Connected to DB");
    }
    catch(error){
        console.log("Error connecting to DB");
        process.exit(0);
    }
}

module.exports=connect;