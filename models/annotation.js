//////////////////////
// Annotation Model //
//////////////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema
,	RegionSchema = mongoose.RegionSchema;


////////////
// Schema //
////////////

var AnnotationSchema = new Schema({

	author: { type: Schema.ObjectId, ref: 'User', required: true },
	comment: { type: String, required: true },
	region: [ RegionSchema ]

}, { strict: true });


// export
module.exports = AnnotationSchema;