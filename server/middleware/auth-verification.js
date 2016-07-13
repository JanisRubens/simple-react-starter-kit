var jwt = require('jsonwebtoken');
//var User = require('mongoose').model('User');

module.exports = function(config) {

	/**
   * Return the middleware function.
   */
	return function(req, res, next) {
		if (!req.headers.authorization) {
			return res.status(401).end();
		}

		// get the last part from a authorization header string like "bearer token-value"
		var token = req.headers.authorization.split(' ')[1];

		// decode the token using a secret key-phrase
		jwt.verify(token, config.jwtSecret, function(err, decoded) {
			// the 401 code is for unauthorized status
			if (err) { return res.status(401).end(); }

			var userId = decoded.sub;

			// check if a user exists
			User.findById(userId, function(err, user) {
				if (err || !user) {
					return res.status(401).end();
				}

				return next();

			});
		});

	};

};