const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model('User', UserSchema);
