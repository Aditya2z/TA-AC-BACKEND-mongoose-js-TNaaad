var mongoose = require("mongoose");
var Schema = require(mongoose.Schema);

var addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.objectId
}, {timeStamps: true});