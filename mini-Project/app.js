const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const postModel = require("./models/post");
const user = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", async (req, res) => {
  let { username, password, email, age, name } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    res.json({ message: "User already exists" });
  } else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async (err, hash) => {
        // Store hash in your password DB.
        let user = await userModel.create({
          username,
          password: hash,
          email,
          age,
          name,
        });

        let token = jwt.sign({ email: email, userid: user._id }, "seceret");
        res.cookie("token", token);
        res.send("User created successfully");
      });
    });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) {
    res.json({ message: "User not found" });
  } else {
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.json({ message: "Invalid password" });
      res.redirect("/login");
    } else {
      let token = jwt.sign({ email: email, userid: user._id }, "seceret");
      res.cookie("token", token);
      res.redirect("/profile");
    }
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

const isloggedin = async (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    res.redirect("/login");
  } else {
    try {
      let data = jwt.verify(token, "seceret");
      req.user = data;
      next();
    } catch (err) {
      res.json({ message: "Invalid token" });
    }
  }
}; //end of middleware

app.get("/profile", isloggedin, async (req, res) => {
  let user = await userModel.findById(req.user.userid).populate("posts");
  // console.log(user);
  res.render("profile", { user });
});

app.post("/post", isloggedin, async (req, res) => {
  let user = await userModel.findById(req.user.userid);

  //humne post create kiya aur post ko bataya user kon hai
  let post = await postModel.create({
    user: user._id,
    content: req.body.content,
  });

  //user ke posts array me post ka id push kiya
  user.posts.push(post._id);

  //user ko save kiya
  await user.save();
  res.redirect("/profile");
});

app.get("/like/:id", isloggedin, async (req, res) => {
    let post = await postModel.findById(req.params.id);
    
    if (!post) {
      return res.redirect("/profile");
    }
  
    let userId = req.user.userid;
    
    let likeIndex = post.likes.indexOf(userId);
    if (likeIndex === -1) {
      // User hasn't liked the post yet, so like it
      post.likes.push(userId);
    } else {
      // User already liked the post, so unlike it
      post.likes.splice(likeIndex, 1);
    }
  
    await post.save();
    res.redirect("/profile");
  });
  

app.get("/edit/:id", isloggedin, async (req, res) => {
    let post=await postModel.findOne({_id:req.params.id}).populate("user");
    res.render("edit", { post });
});


app.post("/update/:id", isloggedin, async (req, res) => {
  let post = await postModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.redirect("/profile");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
