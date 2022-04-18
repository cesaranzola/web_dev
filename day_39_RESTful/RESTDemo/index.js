const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverRide = require("method-override");

// !app.use runs a function on every single request (post, get) it doesn't matter what the path name is
// Use this middleware to parse the body as urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverRide("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let comments = [
  {
    id: uuidv4(),
    username: "Todd",
    comment: "If you fuck with the bull, you get the horn!",
  },
  {
    id: uuidv4(),
    username: "Peppo",
    comment: "If you fuck with the bull, you get the horn!",
  },
  {
    id: uuidv4(),
    username: "Claire",
    comment: "If you fuck with the bull, you get the horn!",
  },
  {
    id: uuidv4(),
    username: "Natalie",
    comment: "If you fuck with the bull, you get the horn!",
  },
  {
    id: uuidv4(),
    username: "Brett",
    comment: "If you fuck with the bull, you get the horn!",
  },
  {
    id: uuidv4(),
    username: "Daniel",
    comment: "If you fuck with the bull, you get the horn!",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

// Route for creating a new comment - get comment
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

//Route for creating a new comment - post comment
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  res.redirect("/comments");
});

//Route to get by id
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

//Patch method - to update a part of a resource ( Use put if you want ot update the entire thing. Read the docs)
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

//Route for faking the edit (due to Html limitation to only two methods > get or post)
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Listening to the port: 3000...");
});
