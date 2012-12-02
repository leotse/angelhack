//////////////////////
// Annotation Model //
//////////////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema
,	RegionSchema = mongoose.RegionSchema
,	CommentSchema = mongoose.CommentSchema;


////////////
// Schema //
////////////

var AnnotationSchema = new Schema({

	author: { type: Schema.ObjectId, ref: 'User', required: true },
	body: { type: String, required: true },
	comments: [ CommentSchema ],
	region: {
		x: { type: Number, required: true },
		y: { type: Number, reuqired: true }
	}

}, { strict: true });


// export
module.exports = AnnotationSchema;