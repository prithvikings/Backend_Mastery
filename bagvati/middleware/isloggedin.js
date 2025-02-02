const jwt = require("jsonwebtoken");
const userModel = require("../models/user-Model");

module.exports = async function (req, res, next) {
    //yaha check karenge ki user ke paas token hai ya nahi
  if (!req.cookies.jwt) {
    req.flash("error", "You need to login first");
    return res.redirect("/");
  }

  try {
    //agar token hai toh usko verify karenge aur uska data decode karenge aur phir us user ko find karenge
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel
      .findOne({ email: decoded.email })
      //password ko select nahi karenge kyuki hum password ko client side pe nahi bhejna chahte
      .select("-password");

    req.user = user;
    next();
  } catch (err) {
    req.flash("error", "You need to login first");
    return res.redirect("/");
  }
};
