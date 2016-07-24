var LocalStrategy = require('passport-local').Strategy;
//var bCrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var config = require('../config/index');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (passport) {

	passport.use('login', new LocalStrategy({
		passReqToCallback: true
	},
		function (req, username, password, done) {

			var userData = {
				username: username.trim(),
				password: password.trim(),
			};

			// find a user by username address
			User.findOne({ username: userData.username }, function (err, user) {
				if (err) { return done(err); }

				if (!user) {
					var error = new Error("Incorrect username");
					error.name = "IncorrectCredentialsError";
					return done(error);
				}

				// check if a hashed user's password is equal to a value saved in the database
				user.comparePassword(userData.password, function (err, isMatch) {
					if (err) { return done(err); }

					if (!isMatch) {
						var error = new Error("Incorrect password");
						error.name = "IncorrectCredentialsError";
						return done(error);
					}


					var payload = {
						sub: user._id,
					};
					// create a token string
					var token = jwt.sign(payload, config.jwtSecret);

					var userData = {
						name: user.name
					};

					return done(null, token, userData);
				});
			});
		}
	));

	passport.use('signup', new LocalStrategy({
		passReqToCallback: true
	},
		function (req, username, password, done) {
			var userData = {
				username: username.trim(),
				password: password.trim(),
			};
			User.findOne({ username: userData.username }, function (err, user) {
				console.log(user);
				if (user) {
					var error = new Error("User with name " + username + " already exists!");
					error.name = "ExistingUserError";
					return done(error);
				}
				else {
					var newUser = new User(userData);
					newUser.save(function (err) {
						if (err) {
							return done(null, err);
						}
						return done(null);
					});
				}
			});
		})
	);
};