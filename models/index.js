////////////////////////////
// Model Schema Creations //
////////////////////////////

var mongoose = require('mongoose')
,	config = require('../config').db;


// initialize database connection
mongoose.connect(config.connectionString);
mongoose.connection.on('open', function(err, db) {
	if(err) {
		console.log('unable to connect to db!');
		console.log(err);
	}
});


// import schemas
var UserSchema = require('./user');
var ProjectSchema = require('./project');
var PinSchema = require('./pin');
var AnnotationSchema = require('./annotation');
var RegionSchema = require('./region');


// register models
mongoose.model('User', UserSchema);
mongoose.model('Project', ProjectSchema);
mongoose.model('Pin', PinSchema);
mongoose.model('Annotation', AnnotationSchema);
mongoose.model('Region', RegionSchema);


// export models
module.exports.User = mongoose.model('User');
module.exports.Project = mongoose.model('Project');
module.exports.Pin = mongoose.model('Pin');
exports.Annotation = mongoose.model('Annotation');