var router = require('express').Router();

router.get('/', (req, res, next) => {
	console.log('hit /api/test');
	res.send('greetings from /api/test');
});

module.exports = router;