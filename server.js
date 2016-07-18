var express = require('express');
var config = require('./config/index');
var mongoose = require('mongoose');
var models = require('./server/models/main')(config, mongoose);
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();


var routes = require('./server/routes/main');
var app = express();
//var session = require('express-session');
var passport = require('passport');
var initPassport = require('./server/passport-init');

var PORT = process.env.PORT || 3000;

var ENV = process.env.NODE_ENV;
var resFile = (JSON.stringify(ENV).indexOf('production') > -1) ? 'index' : 'index-dev';

//app.use(session({
//	secret: 'wilde cracken appears', //this should bee hidden from repo 
//	name: 'session-token',//cookie_name,
//	//store: sessionStore, // connect-mongo session store
//	proxy: true,
//	resave: true,
//	saveUninitialized: true
//}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Used for production build
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'), {index: resFile + '.html'}))
app.use(passport.initialize());
//app.use(passport.session());

routes(app, passport);

initPassport(passport);

app.all('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/' + resFile + '.html'));
});

app.listen(PORT, function() {
	console.log( ENV + ' Server running on ' + PORT );
});