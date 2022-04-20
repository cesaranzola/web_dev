//==============Require==============
const express = require('express');
const app = express();
const path = require('path');

//=============================================
//===============Mongoose Start================
//This code should go on a separate file
//Let's add it here for simplicity purposes
//=================Require==================
const mongoose = require('mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//==============Setting connection==========
main().catch((err) => console.log(err));
async function main() {
  await mongoose
    .connect('mongodb://localhost:27017/shopApp')
    .then(() => {
      console.log('Mongo connection open...');
    })
    .catch((err) => {
      console.log('Error. Unable to establish Mongo connection...');
      console.log(err);
    });
}
//===============Mongoose final===================
//==================================================

//=============Views Engine==========
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//=============Basic Route=============
app.get('/dog', (req, res) => {
  res.send('Woof');
});

//==============Port Listen==========
app.listen(3000, () => {
  console.log('Listening on the port: 3000...');
});
