var self = exports
,	_ = require('underscore')
,	Models = require('../../models')
,	Topic = Models.Topic
,	Pin = Models.Pin
,	helpers = require('../../helpers');


/*
 * GET pins listing.
 */

exports.list = function(req, res){
	var tid = req.query.tid;
	if(!tid) {
		helpers.sendError(res, 500, 'missing tid');
		return;
	}

	Topic
	.findOne(tid, function(err, topic) {
		if(err) helpers.sendError(res, 500, err);
		else if(!topic) helpers.sendError(res, 500, 'topic not found');
		else {

			Pin
			.where('_id').in(topic.pins)
			.sort({ '$natural': -1 })
			.populate('author')
			.exec(function(err, pins) {
				if(err) helpers.sendError(res, 500, err);
				else helpers.sendResult(res, pins);
			});
		}
	});
};


/*
 * POST create pins
 */

exports.create = function(req, res) {
	var tid = req.query.tid
	if(!tid) {
		helpers.sendError(res, 500, 'missing tid');
		return;
	}

	Topic.findById(tid, function(err, topic) {
		if(err) helpers.sendError(res, 500, err);
		else if(!topic) helpers.sendError(res, 500, 'topic not found');
		else {
			
			var body = req.body
			,	pin = new Pin(body);

			pin.save(function(err, pin) {
				if(err) helpers.sendError(res, 500, err);
				else { 

					topic.pins.addToSet(pin._id);
					topic.save(function(err, saved) {
						if(err) helpers.sendError(res, 500, err);
						else helpers.sendResult(res, saved);
					});
				}
			});
		}
	});
};

