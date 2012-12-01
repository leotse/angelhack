//////////////////////
// Annotation Model //
//////////////////////

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

// export
module.exports = RegionSchema;