exports.testRoute = (req, res, next) => {
	console.log('hit /api/test');
	res.send('greetings from /api/test');
	next();
};