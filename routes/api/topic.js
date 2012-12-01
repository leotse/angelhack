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