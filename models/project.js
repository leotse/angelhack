///////////////////
// Project Model //
///////////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema
,	PinSchema = require('./pin');


////////////
// Schema //
////////////

var ProjectSchema = new Schema({

	label: { type: String, required: true },
	logo: { type: String, required: true },
	color: { type: String, required: true },
	tags: [{ type: String, indexd: true }],
	pins: [ PinSchema ]

}, { strict: true });

// export
module.exports = ProjectSchema;