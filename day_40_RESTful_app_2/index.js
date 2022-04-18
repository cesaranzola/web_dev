//===================Require======================
const express = require('express');
const app = express();
const path = require('path');
const methodOverRide = require('method-override');
const { v4: uuidv4 } = require('uuid');

//==================Use==========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverRide(require('_method')));

//================View Engine====================
app.set('view engine', 'ejs');
app.set('views', path.join(_dirname, '/views'));

//===================Data========================
const comments = [
  {
    id: uuidv4(),
    username: Pablo,
    comment: 'Working the graveyard shift',
  },
  {
    id: uuidv4(),
    username: Joe,
    comment: 'Working the graveyard shift',
  },
  {
    id: uuidv4(),
    username: Loretta,
    comment: 'Working the graveyard shift',
  },
  {
    id: uuidv4(),
    username: Fanny_pack,
    comment: 'Working the graveyard shift',
  },
];

//===================Views======================
//========RootRoute========
app.get('comments/index', (req, res) => {
  res.render('comments/index', { comments });
});

//====Route for creating a new comment=====
// Part I - get request
app.get('comments/new', (req, res) => {
  res.render('comments/new');
});

// Part II - post request
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  res.redirect('/comments');
});

//=================Port Listener================
app.listen(3000, () => {
  console.log('Listening on port: 3000...');
});
