var self = exports
,	_ = require('underscore')
,	Models = require('../../models')
,	Pin = Models.Pin
,	Annotation = Models.Annotation
,	Comment = Models.Comment
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
	.findById(pid, function(err, pin) {
		if(err) helpers.sendError(res, 500, err);
		else if(!pin) helpers.sendError(res, 500, 'pin not found');
		else {

			Annotation
			.where('_id').in(pin.annotations)
			.sort({ '$natural': -1 })
			.populate('author')
			.exec(function(err, annotations) {
				if(err) helpers.sendError(res, 500, err);
				else helpers.sendResult(res, annotations);
			});
		}
	});
};


/*
 * POST create annotation
 */

exports.create = function(req, res) {
	// ensure user is logged in
	if(!helpers.ensureUserLoggedIn(req, res)) return;

	var pid = req.query.pid
	if(!pid) {
		helpers.sendError(res, 500, 'missing pid');
		return;
	}

	var uid = req.session.uid;
	if(!uid) {
		helpers.sendError(res, 500, 'not logged in');
		return;
	}

	Pin.findById(pid, function(err, pin) {
		if(err) helpers.sendError(res, 500, err);
		else if(!pin) helpers.sendError(res, 500, 'pin not found');
		else {
			
			var body = req.body
			,	annotation = new Annotation(body);

			annotation.author = uid;
			annotation.save(function(err, savedAnnotation) {
				if(err) helpers.sendError(res, 500, err);
				else { 

					pin.annotations.addToSet(savedAnnotation._id);
					pin.save(function(err, saved) {
						if(err) helpers.sendError(res, 500, err);
						else helpers.sendResult(res, savedAnnotation);
					});
				}
			});
		}
	});
};


/*
 * POST add comment
 */

exports.addComment = function(req, res) {
	// ensure user is logged in
	if(!helpers.ensureUserLoggedIn(req, res)) return;

	var aid = req.query.aid;
	if(!aid) {
		helpers.sendError(res, 500, 'missing annotation id');
		return;
	}

	Annotation.findById(aid, function(err, annotation) {
		if(err) helpers.sendError(res, 500, err);
		else {

			var body = req.body
			,	comment = new Comment(body)
			,	uid = req.session.uid;

			comment.author = uid;
			annotation.comments.push(comment);
			annotation.save(function(err, saved) {
				if(err) helpers.sendError(res, 500, err);
				else helpers.sendResult(res, saved);
			});
		}
	});
};