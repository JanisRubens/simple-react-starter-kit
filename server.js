var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var routes = require('./server/routes/main');

var PORT = process.env.PORT || 3000;

var ENV = process.env.NODE_ENV;
var resFile = (JSON.stringify(ENV).indexOf('production') > -1) ? 'index' : 'index-dev';

app.use(bodyParser.json());

// Used for production build
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'), {index: resFile + '.html'}))

routes(app);

app.all('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/' + resFile + '.html'));
});

app.listen(PORT, function() {
	console.log( ENV + ' Server running on ' + PORT );
});