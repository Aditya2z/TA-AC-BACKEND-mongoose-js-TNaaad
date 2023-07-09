var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Defining the Usr schema
var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
});

// Defining the Aritcle schema
var articleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  likes: { type: Number, default: 0 },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
}, { timestamps: true });

// Defining the Comment schema
var commentSchema = new Schema({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  article: { type: Schema.Types.ObjectId, ref: "Article" },
}, { timestamps: true });

// Defining the corresponding models
var User = mongoose.model("User", userSchema);
var Article = mongoose.model("Article", articleSchema);
var Comment = mongoose.model("Comment", commentSchema);

// Exporting the models
module.exports = { User, Article, Comment };
