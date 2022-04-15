// const express = require('express');
// const app = express();
// const path = require('path');

// //By seeting it like this, Express handles the request of EJS for us
// //There's a catch Express assumes that you have your views files inside a folder called views > created a folder named views inside your Express app
// //You can change the default to where Express points for your views, read the docs.
// app.set('view engine', 'ejs');

// //You're taking the path to which index.js is located, and joining that path with /views
// //By doing the former action, you're able to run the app from another folder without any problem (otherwise the path will be cwd current working dir and won't allow to run the app from another folder)
// app.set('views', path.join(__dirname, '/views'));


// app.get('/', (req, res) => {
//     //Sending back HTML template located at views/home.ejs
//     res.render('home'); // You don't have to specify views/home.ejs  because Express knows that views is your default folder, 
//     //and the extension was declared when you called app.set 
// })

// //The default that Express is looking for is only going to work, If you're running the application from the same directory that views is located.

// app.listen(3000, () => {
//     console.log('Listening on port: 3000');
// }) 


//Clean Code 
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num: num }); //Creates an object and assigns the num value, you can then access rand in the EJS files of your app.
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })
})


app.listen(3000, () => {
    console.log('Listening to the port: 3000..');
})