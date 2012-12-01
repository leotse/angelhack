var Models = require('../models')
,	Project = Models.Project
,	helpers = require('../helpers');


/*
 * GET projects listing.
 */

exports.list = function(req, res){

	Project.find(function(err, projects) {
		if(err) heleprs.sendError(res, 500, 'db error');
		else helpers.sendResult(res, projects);
	});
};