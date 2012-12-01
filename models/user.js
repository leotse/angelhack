////////////////
// User Model //
////////////////

var mongoose = require('mongoose')
,	Schema = mongoose.Schema;


////////////
// Schema //
////////////

var UserSchema = new Schema({
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	picture: { type: String }
}, { strict: true });

// export
module.exports = UserSchema;