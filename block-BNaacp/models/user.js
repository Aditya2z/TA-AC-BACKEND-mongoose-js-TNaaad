var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  sports: [String],
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);