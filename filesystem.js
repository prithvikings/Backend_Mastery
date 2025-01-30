//writefie
//appendfile
//readfile
//copyfile
//rename
//unlink

const fs = require("fs");
//write file this will create a file and write the data in the file
fs.writeFile("hey.text", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is created");
  }
});

//append file this will append the data in the file
fs.appendFile("hey.text", " kaise ho", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is Appended");
  }
});

//read file this will read the data from the file
fs.readFile("hey.text", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//rename file this will rename the file
fs.rename("hey.text", "hello.text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is renamed");
  }
});

//copy file this will copy the file
fs.copyFile("hello.text", "hello1.text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is copied");
  }
});

//unlink this will delete the file
fs.unlink("hello1.text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is deleted");
  }
});


//folder create
fs.mkdir("myfolder", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Folder is created");
    }
    }
);