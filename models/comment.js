///////////////////
// Comment Model //
///////////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema;


////////////
// Schema //
////////////

var CommentSchema = new Schema({

	author: { type: Schema.ObjectId, ref: 'User', required: true },
	body: { type: String, required: true },

}, { strict: true });


// export
module.exports = CommentSchema;