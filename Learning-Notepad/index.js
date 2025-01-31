const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // to use static files like css, js, images etc
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index'); // render index.ejs file make sure you have installed ejs and having index.ejs file in views folder
});

app.get('/profile/:name', (req, res) => {
    const name = req.params.name;
    // res.render('profile', { name }); // render profile.ejs file make sure you have installed
    res.send("You requested to see a profile with the name of " + req.params.name);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 