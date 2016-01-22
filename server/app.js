var express = require('express'),
	mongoose = require('mongoose'),
	path = require('path');

var config = require('./config/config'),
	middleware = require('./middleware/middleware')

var publicRouter = require('./public/router'),
	apiRouter = require('./api/router')

var app = express()

//Database Setup
var mongoDB = mongoose.connect(config.db.url).connection;
mongoDB.on('error', function(err){
    if(err) console.log("MONGO ERROR: ", err);
});
mongoDB.once('open', function(){
    console.log("CONNECTED TO MONGODB!");
});

//Initializes global middleware for application
middleware(app)

//Routing
app.use('/api', apiRouter);
app.use('/', publicRouter )

app.listen(config.port, () => {
	console.log("Listening on port: " + config.port);
})

module.exports = app;