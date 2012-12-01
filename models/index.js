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
require('./user');
require('./project');

// exports
exports.User = mongoose.model('User');
exports.Project = mongoose.model('Project');
exports.Pin = mongoose.model('Pin');