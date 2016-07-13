var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var config = require('../config/index');
//temporary data store
//var users = {};
var users = require('./modules/tempUsers');
module.exports = function(passport){

//	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
//	passport.serializeUser(function(user, done) {
//		console.log('serializing user:',user.username);
//		//return the unique id for the user
//		done(null, user.username);
//	});
//
//	//Desieralize user will call with the unique id provided by serializeuser
//	passport.deserializeUser(function(username, done) {
//
//		return done(null, users[username]);
//
//	});

	passport.use('login', new LocalStrategy({
    		passReqToCallback: true
		},
		function(req, username, password, done) { 
			if(!users[username]){
				console.log('User Not Found with username '+username);
				return done(null, false);
			}

			if(isValidPassword(users[username], password)){
				//sucessfully authenticated
				
				var payload = {
				  sub: username//user._id,
				};
				// create a token string
				var token = jwt.sign(payload, config.jwtSecret);

				users[username].random = "random string i want to see";
				var userData = users[username];

				return done(null, token, userData);
				
				//return done(null, users[username]);
			}
			else{
				console.log('Invalid password '+username);
				return done(null, false)
			}
		}
	));

	passport.use('signup', new LocalStrategy({
    		passReqToCallback: true
		},
		function(req, username, password, done) {
			if (users[username]){
				console.log('User already exists with username: ' + username);
				return done(null, false);
			}
	
			//store user in memory 
			users[username] = {
				username: username,
				password: createHash(password)
			}
			
			console.log(users[username].username + ' Registration successful');
			return done(null, users[username]);
		})
	);
	
	var isValidPassword = function(user, password){
		return bCrypt.compareSync(password, user.password);
	};
	// Generates hash using bCrypt
	var createHash = function(password){
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	};

};