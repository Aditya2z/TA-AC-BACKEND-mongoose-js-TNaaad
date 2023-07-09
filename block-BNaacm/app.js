var express = require("express");
var mongoose = require("mongoose");
var Article = require("./models/article.js");
var User = require("./models/user.js");

var app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/test", {},()=>{})
  .then(() => {
    console.log("Connected Successfully");
  }).catch((err) => {
    console.log("Error connecting", err);
  });

app.listen(3000, () => {
  console.log("Server listening to 3k");
});
