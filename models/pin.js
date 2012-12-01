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

	author: { type: Schema.ObjectId, ref: 'User', required: true },
	title: { type: String, required: true },
	url: { type: String },
	picture: { type: String },
	tags: [{ type: String, indexed: true }],
	annotations: [ AnnotationSchema ]

}, { strict: true });

// export
module.exports = PinSchema;