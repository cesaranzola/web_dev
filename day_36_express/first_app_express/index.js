// // const { red } = require('colors');
// const express = require('express');
// const app = express();
// console.dir(app);


// //Anytime the port has an incomiing request, this callback will run
// // req, res are objects made by Express and are passed in the callback
// // app.use((req, res) => {
// //     console.log('We got a new request!');
// //     // res.send(`We've got your request! This is the first response.`)
// //     res.send({color: 'red'});
// //     //Any time you send something back, we're done for that request. 
// //     // You can have a HTTP request tha has more than one response
// //     // and app.use matches every single request
// // })

// //HTTP request isn't a javascript object, it's a piece of text 

// //To set a port 3000 - 
// //App doesn't discriminate between different types of requests, post, gert, or maybe a resource 
// app.listen(8080, () =>{
//     console.log('Listening on port 8080...');
// })


// //============Routing================
// // Routing - Refers to taking incoming request and a path that is requested
// // and matching to some code and some response.

// //Remember that req is an object created by Express based upon the incoming HTTP request
// //res - It's also a object created by Express, and res has a bunch of methods you can use. such as res.send > to send back some information to request

// //Routing some incoming request > to some outgoing response
// app.get('/movies', (req, res) => {
//     res.send('Ich möchte James Bond Filme auf jeden Fall sehen!')
// })

// app.get('/Musik', (req, res) =>{
//     res.send(`Was ist deine Lieblingsband?`)
// })

// //Root route
// app.get('/', (req, res) => {
//     res.send('This is the home page!');
// })

// //How to send back to a post request
// app.post('/movies', (req, res) =>{
//     res.send('Keine Filme drinnen Ihre Konto')
// })

// //Put at the end of the file a default response for non recognizible route paths
// //Routes are match in order, that's why you want to include you're default at the end of the file
// app.get('*', (req, res) =>{
//     res.send(`I don't know that path!`);
// })

//Anytime you change your code, you need to restart the server.


//====================Day two==================

//PATH PARAMETERS

//Imports Express framework 
const express = require('express');
//Creates a constant with Express execution declaration, so you can apply methods to it
const app = express();

//Prints a mesage to your terminal indicating a new request
//This has to be commented out otherwise, it will be the anwser to any incoming request
// app.use((req, res) => {
//     res.send(`We've got your request`);
// })

//Creates a port to listen to request on your local server
app.listen(3000, () => {
    console.log(`Listening to port: 3000`);
})

//Define a route called movies - declaring routes manually is only for educational purposes, most of the time you want the routes to be generate automatically
app.get('/movies', (req, res) => {
    res.send(`Sie sind erlaubt zum Filme sehen.`);
})

//Define a route called musik - declaring routes manually is only for educational purposes, most of the time you want the routes to be generate automatically
app.post('/musik', (req, res) => {
    res.send('Sie dürfen zwei Leider anhören.');
})

//Root route 
app.get('/', (req, res) => {
    res.send(`This is the homepage of the website.`);
})

//=================PATH PARAMETERS====================

//How to declare routes automatically
//Anything matching the path /r/somePath will be considered a valid route (subreddit is just a placeholder)
//If a user requets something like  localhost:3000/r/somePath/addtionalPath > it won't work, because you didn't define an addtional path to it
app.get('/r/:subreddit', (req, res) => {
    //Grabs user request and adds it to the parameters of the req object that Express previously created for us.
    const { subreddit } = req.params;
    res.send(`<h1>You're currently browsing the ${subreddit} subreddit</h1>`);
})

// The colons in '/r/:subreddit/:postId' indicates variables, they are placeholders. We're not exactly matching those names in our requests.
app.get('/r/:subreddit/:postId', (req, res) => {
    //Grabs user request and adds it to the parameters of the req object that Express previously created for us.
    const { subreddit, postId } = req.params;
    res.send(`<h1>You're currently viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:top/:postId', (req, res) => {
    //Destructure the req object that Express created for us
    const { subreddit, top, postId } = req.params;
    res.send(`<h1 style="color:red"> You're browsing the top ${top} post ID: ${postId} on the ${subreddit} subreddit</h1>`);
})

//Default response when requested website isn't present - this always must go at the of the file, otherwise any route will be valid upon request
app.get('*', (req, res) => {
    res.send(`We don't know the path you searching...`);
})








