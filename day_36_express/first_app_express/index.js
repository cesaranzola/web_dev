const { red } = require('colors');
const express = require('express');
const app = express();
console.dir(app);


//Anytime the port has an incomiing request, this callback will run
// req, res are objects made by Express and are passed in the callback
// app.use((req, res) => {
//     console.log('We got a new request!');
//     // res.send(`We've got your request! This is the first response.`)
//     res.send({color: 'red'});
//     //Any time you send something back, we're done for that request. 
//     // You can have a HTTP request tha has more than one response
//     // and app.use matches every single request
// })

//HTTP request isn't a javascript object, it's a piece of text 

//To set a port 3000 - 
//App doesn't discriminate between different types of requests, post, gert, or maybe a resource 
app.listen(8080, () =>{
    console.log('Listening on port 8080...');
})


//============Routing================
// Routing - Refers to taking incoming request and a path that is requested
// and matching to some code and some response.

//Remember that req is an object created by Express based upon the incoming HTTP request
//res - It's also a object created by Express, and res has a bunch of methods you can use. such as res.send > to send back some information to request
app.get('/movies', (req, res) => {
    console.log('Movies request')
})







//Anytime you change your code, you need to restart the server.


