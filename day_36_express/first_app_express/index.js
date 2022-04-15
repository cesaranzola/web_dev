const express = require('express');
const app = express();
console.dir(app);


//Anytime the port has an incomiing request, this callback will run
app.use(() => {
    console.log('We got a new request!')
})

//To set a port 3000
app.listen(3000, () =>{
    console.log('Listening on port 3000...');
})

//Anytime you change your code, you need to restart the server.

