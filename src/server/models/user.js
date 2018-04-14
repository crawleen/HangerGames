import crypto from "crypto";
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


// define the User model schema
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: { unique: true }
  },
  password: String
});

UserSchema.pre("save", function(next) {
	var user = this
	if (!user.isModified("password")) return next()
	bcrypt.genSalt(5, (err, salt) => {
		if (err) return next(err)
		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if (err) return next(err)
			user.password = hash
			next()
		})
	})
})

 UserSchema.methods = {
 	comparePassword: function(candidatePassword, cb) {
 		bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
 			if (err) return cb(err)
 			cb(null, isMatch)
 		})
 	}
 }

/**
* Statics
*/
UserSchema.statics = {}

export default mongoose.model("User", UserSchema)
