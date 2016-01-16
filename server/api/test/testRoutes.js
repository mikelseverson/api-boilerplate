var router = require('express').Router();

var controller = require('./testController')

router.get('/', controller.testRoute);

module.exports = router;