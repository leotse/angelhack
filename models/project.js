////////////////
// User Model //
////////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema;


////////////
// Schema //
////////////

var AnnotationSchema = new Schema({

	comment: { type: String, required: true },
	author: { type: Schema.ObjectId, ref: 'User', required: true },

}, { strict: true });


var PinSchema = new Schema({

	title: { type: String },
	url: { type: String },
	picture: { type: String },
	tags: [{ type: String, indexed: true }],
	annotations: [ AnnotationSchema ]

}, { strict: true });


var ProjectSchema = new Schema({

	label: { type: String, required: true },
	logo: { type: String, required: true },
	color: { type: String, required: true },
	tags: [{ type: String, indexd: true }],
	pins: [ PinSchema ]

}, { strict: true });


/////////////
// Helpers //
/////////////


// register model
mongoose.model('Pin', PinSchema);
mongoose.model('Project', ProjectSchema);