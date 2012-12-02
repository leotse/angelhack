var self = exports
,	_ = require('underscore')
,	Models = require('../../models')
,	Project = Models.Project
,	Topic = Models.Topic
,	helpers = require('../../helpers');


/*
 * GET topics listing.
 */

exports.list = function(req, res){
	var id = req.query.id;
	if(id) {
		self.get(req, res);
		return;
	}

	var pid = req.query.pid;
	if(!pid) {
		helpers.sendError(res, 500, 'missing pid');
		return;
	}

	Project.findById(pid, function(err, project) {
		if(err) helpers.sendError(res, 500, err);
		else if(!project) helpers.sendError(res, 500, 'project not found');
		else {
			Topic
			.where('_id').in(project.topics)
			.sort({ '$natural': -1 })
			.populate('author')
			.exec(function(err, topics) {
				if(err) heleprs.sendError(res, 500, err);
				else helpers.sendResult(res, topics);
			});
		}
	});
};


/*
 * GET topic deatils
 */

exports.get = function(req, res) {
	var id = req.query.id;

	Topic.findById(id, function(err, topic) {
		if(err) helpers.sendError(res, 500, err);
		else helpers.sendResult(res, topic);
	});
};


/*
 * POST create topic
 */

exports.create = function(req, res) {

	// redirect to update
	var id = req.query.id;
	if(id) {
		self.update(req, res);
		return;
	}

	// create topic
	var body = req.body
	,	pid = req.query.pid
	,	topic = new Topic(body);

	Project.findById(pid, function(err, project) {
		if(err) helpers.sendError(res, 500, err);
		else if(!project) helpers.sendError(res, 500, 'project not found');
		else {

			// insert topic
			topic.save(function(err, saved) {
				if(err) helpers.sendError(res, 500, err);
				else {

					// save new topic reference
					project.topics.addToSet(saved._id);
					project.save(function(err, saved) {
						if(err) helpers.sendError(res, 500, err);
						else helpers.sendResult(res, saved);
					});
				}
			});
		}
	});
};


/*
 * POST update topic
 */
exports.update = function(req, res) {
	var id = req.query.id;


};