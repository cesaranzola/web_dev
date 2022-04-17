//===Require
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

//====App
const app = express();

//===Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//===View engine and static path
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//   res.send("home");
// });

app.get("/", (req, res) => {
  fs.readFile("./json/mighty.json", "utf-8", (err, data) => {
    if (err) throw err;
    if (data) {
      // console.log(data);
      //Create json array object
      let json = { data: [] };
      JSON.parse(data).data.map((v) => json.data.push(v));
      json.data.sort((a, b) => b.value - a.value);
      //Render ejs and pass data
      res.render("subreddit", {
        data: json,
      });
    }
  });
});

//Server listen
app.listen(8080, () => {
  console.log("Listening to the port: 8080...");
});
