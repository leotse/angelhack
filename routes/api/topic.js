var self = exports
,	_ = require('underscore')
,	Models = require('../../models')
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

	Topic
	.find({})
	.sort({ '$natural': -1 })
	.populate('author')
	.exec(function(err, topics) {
		if(err) heleprs.sendError(res, 500, err);
		else helpers.sendResult(res, topics);
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