var express = require("express");
var mongoose = require("mongoose");
var app = express();

mongoose
  .connect("mongodb://localhost:27017/test", {})
  .then(() => {
    console.log("Connected Successfully");
  }).catch((err) => {
    console.log("Error connecting", err);
  });

app.listen(3000, () => {
  console.log("Server listening to 3k");
});