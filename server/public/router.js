var router = require('express').Router();
var path = require('path');
var config = require('../config/config');

//Routes


//dist catch-all
router.get("/*", function(req, res) {
    var file = req.params[0] || config.dist.defaultFile;
    res.sendFile(path.join(__dirname, "../public/dist", file), function(err) {
    	if (err) {
    		res.send("404");
    	}
    });
});

module.exports = router;