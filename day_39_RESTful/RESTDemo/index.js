const express = require("express");
const app = express();
const path = require("path");

// !app.use runs a function on every single request (post, get) it doesn't matter what the path name is
// Use this middleware to parse the body as urlencoded data
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//Route
//Remember that you can access the requested data, req is an object that Express creates for us
//You can access the query of that data through req.query
//If you want to grab the data in the case of a post request, you can access it via req.body (before you have to define the type in which you want that data to be processed)
app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  console.log(req.body);
  res.send(`Enjoy your meal, here are your ${qty} ${meat} tacos!`);
});

app.listen(3000, () => {
  console.log("Listening to the port: 3000...");
});
