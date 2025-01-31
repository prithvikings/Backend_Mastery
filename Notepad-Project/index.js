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
    const tasks = files.map((file) => ({
      title: file.replace(".txt", ""),
      _id: file,
    }));

    res.render("index", { files: tasks });
  });
});

app.post("/create", (req, res) => {
  // Sanitize the title to remove unwanted characters
  const safeTitle = req.body.title.replace(/[^a-zA-Z0-9-_]/g, "").trim();
  if (!safeTitle) {
    return res.status(400).send("Invalid file name");
  }

  const filePath = path.join(filesDir, `${safeTitle}.txt`);

  fs.writeFile(filePath, req.body.details, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error saving file");
    }
    res.redirect("/");
  });
});

app.get("/file/:filename", (req, res) => {
  const filePath = path.join(filesDir, req.params.filename);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading file");
    }
    res.render("show", {
      title: req.params.filename.replace(".txt", ""),
      details: data,
    });
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});

app.post("/edit", (req, res) => {
  const oldFileName = req.body.previous.trim().replace(".txt", ""); // Remove extra .txt if present
  const newFileName = req.body.new.trim().replace(".txt", ""); // Ensure no double .txt

  const oldPath = path.join(filesDir, `${oldFileName}.txt`);
  const newPath = path.join(filesDir, `${newFileName}.txt`);

  // Check if the old file exists before renaming
  if (!fs.existsSync(oldPath)) {
    console.log("Error: File not found:", oldPath);
    return res.status(404).send("File not found. Check the filename.");
  }

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.log("Rename error:", err);
      return res.status(500).send("Error renaming file");
    }
    res.redirect("/");
  });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
