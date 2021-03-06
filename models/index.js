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
var TopicSchema = require('./topic');
var PinSchema = require('./pin');
var AnnotationSchema = require('./annotation');
var RegionSchema = require('./region');
var CommentSchema = require('./comment');


// register models
mongoose.model('User', UserSchema);
mongoose.model('Project', ProjectSchema);
mongoose.model('Topic', TopicSchema);
mongoose.model('Pin', PinSchema);
mongoose.model('Annotation', AnnotationSchema);
mongoose.model('Region', RegionSchema);
mongoose.model('Comment', CommentSchema);


// export models
module.exports.User = mongoose.model('User');
module.exports.Project = mongoose.model('Project');
module.exports.Topic = mongoose.model('Topic');
module.exports.Pin = mongoose.model('Pin');
module.exports.Annotation = mongoose.model('Annotation');
module.exports.Region = mongoose.model('Region');
module.exports.Comment = mongoose.model('Comment');