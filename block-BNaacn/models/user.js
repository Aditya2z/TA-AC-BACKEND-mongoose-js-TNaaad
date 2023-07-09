var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  password: {type: String, minlength: 5},
  createdAt: {type: Date, default: new Date()},
  favorites: [String]
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);