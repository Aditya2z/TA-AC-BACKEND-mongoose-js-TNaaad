var mongoose = require("mongoose");
var Schema = require(mongoose.Schema);

var userSchema = new Schema({
    name: String,
    age: {type: Number, default: 0},
    isAdmin: Boolean,
    email: {type:String, lowercase: true},
    objectId: Schema.objectId,
    favorites: [String],
    marks: [Number],
    password: {type: String, minlength: 5, maxlength: 20},
    createdAt: {type: Date, default: Date.now}
}, {timeStamps: true});