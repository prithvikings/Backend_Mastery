const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    let { username, email, password, phone, isAdmin } = req.body;

    let userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    //both ways are correct to create a new user in the database using mongoose model but the second way is more efficient

    // const user = new User({
    //   username,
    //   email,
    //   password,
    //   phone,
    //   isAdmin,
    // });

    // await user.save();

    
    const user = await User.create({
      username,
      email,
      password,
      phone,
      isAdmin,
    });

    res.status(201).json({
      msg: "Registration Successful",
      user,
      token: await user.generateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password " });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { home, register, login };
