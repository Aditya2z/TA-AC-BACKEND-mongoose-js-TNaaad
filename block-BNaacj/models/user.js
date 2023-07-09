var mongoose = require("mongoose");
var Schema = require(mongoose.Schema);

var userSchema = new Schema({
    name: String,
    age: {type: Number, default: 0},
    isAdmin: Boolean,
    email: {type:String, lowercase: true},
    objectId: Schema.objectId,
    favorites: [String],
    marks: [Number]
}, {timeStamps: true});