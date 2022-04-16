const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

//! This is using express to stablish static content, and joining the absolut path of index.js to public, so you can access the app at any location.
// Only assets store in the public dir, can be accesible at the port / you define > for example: localhost:3000/app.css
// ! (remember you don't have to include the path for public dir, just reference the actual file you want to access)
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.listen(3000, () => {
  console.log("Listening to the port: 3000...");
});
