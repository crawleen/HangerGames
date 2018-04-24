const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema

// define the User model schema
const userSchema = new Schema({
  email: {type: String},
  password: {type: String},
  firstName: {type: String},
  lastName: {type: String}
});

const User = mongoose.model("User", userSchema);
module.exports = User;
