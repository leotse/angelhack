/////////////////
// Topic Model //
/////////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema
,	PinSchema = require('./pin');


////////////
// Schema //
////////////

var TopicSchema = new Schema({

	author: { type: Schema.ObjectId, ref: 'User', required: true },
	label: { type: String, required: true },
	logo: { type: String },
	color: { type: String },
	tags: [{ type: String, indexd: true }],
	pins: [ PinSchema ]

}, { strict: true });

// export
module.exports = TopicSchema;