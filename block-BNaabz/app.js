var express = require("express");
var mongoose = require("mongoose");
var app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Connected to test database");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
