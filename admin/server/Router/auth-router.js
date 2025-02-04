const express = require("express");
const router = express.Router();
const {home,register,login} = require("../controller/auth-conrtoller");

router.get("/",home);
router.get("/register",register);
router.post("/login",login);
module.exports = router;