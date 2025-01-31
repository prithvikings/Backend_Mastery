const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Ensure the "files" directory exists
const filesDir = path.join(__dirname, "files");
if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}

app.get("/", (req, res) => {
  fs.readdir(filesDir, (err, files) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading files");
    }
    
    // Convert filenames into objects with title and ID
    const tasks = files.map(file => ({
      title: file.replace(".txt", ""),
      _id: file
    }));

    res.render("index", { files: tasks });
  });
});

app.post("/create", (req, res) => {
  const filePath = path.join(filesDir, `${req.body.title.split(" ").join("")}.txt`);
  fs.writeFile(filePath, req.body.details, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error saving file");
    }
    res.redirect("/");
  });
});

app.get("/view/:id", (req, res) => {
  const filePath = path.join(filesDir, `${req.params.id}.txt`);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading file");
    }
    res.render("view", { title: req.params.id, details: data });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
