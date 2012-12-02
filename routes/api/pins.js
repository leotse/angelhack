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
	var id = req.query.id;
	if(id) {
		self.get(req, res);
		return;
	}

	var tid = req.query.tid;
	if(!tid) {
		helpers.sendError(res, 500, 'missing tid');
		return;
	}

	// paging
	var page = req.query.page || 1
	,	limit = req.query.limit || 30
	,	skip = (page - 1) * limit;

	Topic
	.findOne(tid, function(err, topic) {
		if(err) helpers.sendError(res, 500, err);
		else if(!topic) helpers.sendError(res, 500, 'topic not found');
		else {

			Pin
			.where('_id').in(topic.pins)
			.sort({ '$natural': -1 })
			.limit(limit)
			.skip(skip)
			.populate('author')
			.exec(function(err, pins) {
				if(err) helpers.sendError(res, 500, err);
				else helpers.sendResult(res, pins);
			});
		}
	});
};

/*
 * GET get pin details
 */

exports.get = function(req, res) {
	var id = req.query.id;

	Pin
	.findOne({'_id': id})
	.populate('annotations')
	.populate('likes')
	.exec(function(err, pin) {
		if(err) helpers.sendError(res, 500, err);
		else helpers.sendResult(res, pin);
	});
}


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


/*
 * POST like a pin
 */

exports.like = function(req, res) {
	var pid = req.query.pid
	if(!pid) {
		helpers.sendError(res, 500, err);
		return;
	}

	Pin.findById(pid, function(err, pin) {
		if(err) helpers.sendError(res, 500, err);
		else if(!pin) helpers.sendError(res, 500, 'pin not found');
		else {

			var body = req.body
			,	uid = body.uid;

			pin.likes.addToSet(uid);
			pin.save(function(err, saved) {
				if(err) helpers.sendError(res, 500, err);
				else helpers.sendResult(res, saved);
			});
		}
	});
};





