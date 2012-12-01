////////////////
// User Model //
////////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema;


////////////
// Schema //
////////////

var RegionSchema = new Schema({

	x: { type: Number },
	y: { type: Number },
	width: { type: Number },
	height: { type: Number },

}, { strict: true });

var AnnotationSchema = new Schema({

	comment: { type: String, required: true },
	author: { type: Schema.ObjectId, ref: 'User', required: true },
	region: [ RegionSchema ]

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
mongoose.model('Region', RegionSchema);
mongoose.model('Annotation', AnnotationSchema);
mongoose.model('Pin', PinSchema);
mongoose.model('Project', ProjectSchema);