var router = require('express').Router();

router.get('/', (req, res, next) => {
	res.send('Next I will need get a better understanding when to use next');
})

router.use('/test', require('./test/testRoutes'));

module.exports = router;