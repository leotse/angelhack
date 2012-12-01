var self = exports
,	_ = require('underscore')
,	Models = require('../../models')
,	Project = Models.Project
,	Topic = Models.Topic
,	helpers = require('../../helpers');


/*
 * GET projects listing.
 */

exports.list = function(req, res){

	var id = req.query.id;
	if(id) {
		self.get(req, res);
		return;
	}

	Project
	.find({})
	.sort({ '$natural': -1 })
	.exec(function(err, projects) {
		if(err) heleprs.sendError(res, 500, err);
		else helpers.sendResult(res, projects);
	});
};


/*
 * GET project details
 */

exports.get = function(req, res) {
	var id = req.query.id;

	Project
	.findOne({ _id: id })
	.populate('topics')
	.exec(function(err, project) {
		if(err) helpers.sendError(res, 500, err);
		else helpers.sendResult(res, project);
	});
};


/*
 * GEt project activity
 */

exports.activity = function(req, res) {
	var id = req.query.id;

	Project.findById(id, function(err, project) {
		if(err) helpers.sendError(res, 500, err);
		else {
			Topic
			.where('_id').in(project.topics)
			.sort({ '$natural': -1 })
			.limit(5)
			.select('pins')
			.exec(function(err, projects) {
				if(err) helpers.sendError(res, 500, 'api error');
				if(!projects || projects.length === 0) helpers.sendResult(res, []);
				else {

					// generate activty feed
					var activities = [];
					_.each(projects, function(project) {
						console.log(project.pins);
						activities = activities.concat(project.pins);
					});

					console.log(activities);
					helpers.sendResult(res, activities);
				}
			});
		}
	});
};