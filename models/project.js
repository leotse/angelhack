/////////////////
// Project Model //
/////////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema
,	TopicSchema = require('./topic');


////////////
// Schema //
////////////

var ProjectSchema = new Schema({

	title: { type: String, required: true },
	descrption: { type: String },
	logo: { type: String },
	topics: [ { type: Schema.ObjectId, ref: 'Topic', required: true } ],


}, { strict: true });

// export
module.exports = ProjectSchema;