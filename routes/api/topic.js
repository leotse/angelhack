var _ = require('underscore')
,	Models = require('../../models')
,	Topic = Models.Topic
,	helpers = require('../../helpers');


/*
 * GET projects listing.
 */

exports.list = function(req, res){

	Topic
	.find({})
	.sort({ '$natural': -1 })
	.populate('author')
	.exec(function(err, projects) {
		if(err) heleprs.sendError(res, 500, 'api error');
		else helpers.sendResult(res, projects);
	});
};


exports.activity = function(req, res) {

	Topic
	.find({})
	.sort({ '$natural': -1 })
	.limit(3)
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
};