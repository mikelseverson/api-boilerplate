var express = require('express'),
	mongoose = require('mongoose'),
	path = require('path');

var router = require('./api/router'),
	config = require('./config/config'),
	middleware = require('./middleware/middleware')

var lex = require('letsencrypt-express').testing();
var app = express()

//Initializes global middleware for application
middleware(app)

//Routing
app.use('/api', router);

app.get('/', (req, res, next) => {
	res.send('<body style="background:black"><h1 style="color:yellow">Constructing...</h1>');
	next();
});

app.listen(config.port, () => {
	console.log("Listening on port: " + config.port);
})

module.exports = app;