var _ = require('underscore')
,	Models = require('../../models')
,	Project = Models.Project
,	helpers = require('../../helpers');


/*
 * GET projects listing.
 */

exports.list = function(req, res){

	Project
	.find({})
	.sort({ '$natural': -1 })
	.exec(function(err, projects) {
		if(err) heleprs.sendError(res, 500, 'api error');
		else helpers.sendResult(res, projects);
	});
};


/*
 * GET project details
 */

exports.get = function(req, res) {
	var id = req.params.id;
	console.log(id);

	Project
	.findOne({ _id: id })
	.populate('topics')
	.exec(function(err, project) {
		if(err) helpers.sendError(res, 500, err);
		else helpers.sendResult(res, project);
	});
};