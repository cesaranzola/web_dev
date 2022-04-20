//==============Require==============
const express = require('express');
const app = express();
const path = require('path');

//=============Views Engine==========
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//==============Port Listen==========
app.listen(3000, () => {
  console.log('Listening on the port: 3000...');
});
