const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./MightyHarvest-hot-100-results.json");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(3000, () => {
  console.log("Listening to the port: 3000...");
});
