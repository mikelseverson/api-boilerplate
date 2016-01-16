var	bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use((req, res, next) => {
		console.log('hit');
		next();
	})
}
