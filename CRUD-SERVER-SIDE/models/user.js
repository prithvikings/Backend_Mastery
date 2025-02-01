const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://prithvi312:fsfO7jyoofuv0jz5@cluster0.wrm4e.mongodb.net/crud",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
})();

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String
});

module.exports = mongoose.model('User', userSchema);
