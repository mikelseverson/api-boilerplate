var Test = require('./testModel');

exports.get = function(req, res, next) {
  Test.find({})
    .then(function(test){
      res.json(test);
    }, function(err){
      next(err);
    });
};

exports.post = function(req, res, next) {
  var newTest = req.body;

  Test.create(newTest)
    .then(function(test) {
      res.json(test);
    }, function(err) {
      next(err);
    });
};