var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	path = require('path');

var router = require('./api/router');

var app = express();

app.use(bodyParser.json());

app.use('/api', router);

app.get('/', (req, res, next) => {
	console.log(req.body);
	res.send('<body style="background:black"><h1 style="color:yellow">Constructing...</h1>');
	next();
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get("port"), () => {
	console.log("Listening on port: " + app.get('port'));
})

module.exports = app;