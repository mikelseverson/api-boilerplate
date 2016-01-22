var router = require('express').Router();
var path = require('path');

router.get("/*", function(req, res) {
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/dist", file));
});

module.exports = router;