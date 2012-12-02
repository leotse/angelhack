var self = exports
,	_ = require('underscore')
,	Models = require('../../models')
,	Pin = Models.Pin
,	Annotation = Models.Annotation
,	helpers = require('../../helpers');


/*
 * GET annotations listing.
 */

exports.list = function(req, res){
	var pid = req.query.pid;
	if(!pid) {
		helpers.sendError(res, 500, 'missing pid');
		return;
	}

	Pin
	.findOne(pid, function(err, pin) {
		if(err) helpers.sendError(res, 500, err);
		else if(!pin) helpers.sendError(res, 500, 'pin not found');
		else {

			Annotation
			.where('_id').in(pin.annotations)
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
 * POST create annotation
 */

exports.create = function(req, res) {
	var pid = req.query.pid
	if(!pid) {
		helpers.sendError(res, 500, 'missing pid');
		return;
	}

	Pin.findById(pid, function(err, pin) {
		if(err) helpers.sendError(res, 500, err);
		else if(!pin) helpers.sendError(res, 500, 'pin not found');
		else {
			
			var body = req.body
			,	annotation = new Annotation(body);

			annotation.save(function(err, saved) {
				if(err) helpers.sendError(res, 500, err);
				else { 

					pin.annotations.addToSet(saved._id);
					pin.save(function(err, saved) {
						if(err) helpers.sendError(res, 500, err);
						else helpers.sendResult(res, saved);
					});
				}
			});
		}
	});
};
