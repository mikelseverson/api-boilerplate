var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TestSchema = new Schema({
	title: String,
	text: String
})

module.exports = mongoose.model('test', TestSchema);