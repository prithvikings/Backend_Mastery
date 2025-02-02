const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/authController");
const { loginuser } = require("../controller/authController");
const { logout } = require("../controller/authController");

router.get("/", (req, res) => {
  res.send(" users");
});

router.post("/register", registerUser); // register user
router.post("/login",loginuser); // login user
router.post("/logout", logout); // logout user

module.exports = router;
