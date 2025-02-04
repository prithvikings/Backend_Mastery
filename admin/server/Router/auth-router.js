const express = require("express");
const router = express.Router();
const {home,register,login} = require("../controller/auth-conrtoller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validator/auth-validator");

router.get("/",home);
router.get("/register",validate(signupSchema),register);
router.post("/login",login);
module.exports = router;