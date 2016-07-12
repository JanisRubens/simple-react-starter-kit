// Require all routes that app will use;
var apiRoutes = require('./api/routes');
//var passport = require('passport');
//var initPassport = require('../passport-init');
var authRoutes = require('./auth/routes');

//Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

	//allow all get request methods
	if(req.method === "GET"){
		return next();
	}
	if (req.isAuthenticated()){
		return next();
	}

	// if the user is not authenticated then redirect him to the login page
	return res.redirect('/login');
};

module.exports = function routes(app, passport) {

	app.use('/api', isAuthenticated);
	app.use('/api', apiRoutes);
	app.use('/auth', authRoutes(passport));
};