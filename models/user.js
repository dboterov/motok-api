'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
  name: String,
  surname: String,
  username: String,
  password: String,
  role: String,
  active: Boolean,
  //companyName: String,
  companies: []
});

module.exports = mongoose.model('User', UserSchema);
