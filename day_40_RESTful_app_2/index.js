//===================Require======================
const express = require('express');
const app = express();
const path = require('path');
const methodOverRide = require('method-override');
const { v4: uuidv4 } = require('uuid');

//==================Use==========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverRide('_method'));

//================View Engine====================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//===================Data========================
let comments = [
  {
    id: uuidv4(),
    username: 'John',
    comment: `That going you like, it's going to be back in style`,
  },
  {
    id: uuidv4(),
    username: 'David',
    comment: `That going you like, it's going to be back in style`,
  },
  {
    id: uuidv4(),
    username: 'Laura',
    comment: `That going you like, it's going to be back in style`,
  },
  {
    id: uuidv4(),
    username: 'Donna',
    comment: `That going you like, it's going to be back in style`,
  },
];
//===================Views======================
//========RootRoute========
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

//====Route for creating a new comment=====
// Part I - get request
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

// Part II - post request
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  res.redirect('/comments');
});

//=========Route to get by ID========
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render('comments/show', { comment });
});

//================Edit Comment======================
//========Route for edit comment=======
app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render('comments/edit', { comment });
});

//=======Patch method - Edit Comment=======
app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect('/comments');
});

//===============Deleting a comment=============
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect('/comments');
});

//=================Port Listener================
app.listen(3000, () => {
  console.log('Listening on port: 3000...');
});
