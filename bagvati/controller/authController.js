const userModel = require("../models/user-Model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generatetoken");
const jwt = require("jsonwebtoken");

module.exports.registerUser = async (req, res) => {
  try {
    let = { email, password, fullName } = req.body;

    let user = await userModel.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          res.send(err.message);
        } else {
          let user = await userModel.create({
            email,
            password: hash,
            fullName,
          });
          let token = generateToken(user);
          res.cookie("token", token);
          res.status(201).json({
            status: "success",
            user,
          });
        }
      });
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports.loginuser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                status: "fail",
                message: "User does not exist",
            });
            }
            let isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    status: "fail",
                    message: "Invalid credentials",
                });
            }
            let token = generateToken(user);
            res.cookie("token", token);
            res.status(200).json({
                status: "success",
                user,
            });
        } catch (err) {
            console.log(err.message);
        }
};
