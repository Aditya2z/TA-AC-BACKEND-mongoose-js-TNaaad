var mongoose = require("mongoose");
var Schema = require(mongoose.Schema);

var articleSchema = new Schema({
    title: String,
    pages: Number,
    author: String,
    category: [String],
    isAdmin: Boolean,
    email: {type:String, lowercase: true},
    objectId: Schema.objectId
}, {timeStamps: true})