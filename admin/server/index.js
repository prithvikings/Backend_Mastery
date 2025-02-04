require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./Router/auth-router");
const PORT = 3000;
const connect = require("./utils/db");
const errorMiddleware=require("./middlewares/error-middleware")
const contactRoute = require("./Router/contact-route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
// Error Middleware to handle errors
app.use(errorMiddleware);

// Connect to the database
connect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port ${PORT}`);
    })
});