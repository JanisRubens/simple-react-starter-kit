var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the User model schema
var UserSchema = new mongoose.Schema({
  //email: { type: String, index: { unique: true  }},
  password: String,
  username: String,
});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, callback);
}


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function (next) {
  var user = this;

  // proceed further only if the password is modified or the user is new
 if (!user.isModified('password')) return next();


  bcrypt.genSalt(10, function (err, salt) {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); } 

      // replace a password string with hash value
      user.password = hash;
console.log(user);
      return next();
    });
  });
});


module.exports = mongoose.model('User', UserSchema);