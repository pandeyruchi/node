'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//The schema to hold user information
var UserSchema = new Schema({
    username: String,
    avatar_image: {url: String}
});


module.exports = mongoose.model('User', UserSchema);
