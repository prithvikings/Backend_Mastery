const mongoose = require('mongoose');

mongoose
.connect("mongodb+srv://prithvi312:fsfO7jyoofuv0jz5@cluster0.wrm4e.mongodb.net/bagvati")
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

module.exports = mongoose.connection;