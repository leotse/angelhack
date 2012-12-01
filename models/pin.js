///////////////
// Pin Model //
///////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema
,	AnnotationSchema = require('./annotation');


////////////
// Schema //
////////////

var PinSchema = new Schema({

	title: { type: String },
	url: { type: String },
	picture: { type: String },
	tags: [{ type: String, indexed: true }],
	annotations: [ AnnotationSchema ]

}, { strict: true });

// export
module.exports = PinSchema;