const mongoose = require('mongoose');
const dbgr= require('debug')('development:mongoose');


mongoose
.connect("mongodb+srv://prithvi312:fsfO7jyoofuv0jz5@cluster0.wrm4e.mongodb.net/bagvati")
.then(() => dbgr('Connected to MongoDB...'))
.catch(err => dbgr('Could not connect to MongoDB...', err));

module.exports = mongoose.connection;