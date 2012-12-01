var Models = require('../../models')
,	User = Models.User
,	helpers = require('../../helpers');

/*
 * GET users listing.
 */

exports.list = function(req, res) {

	User.find(function(err, users) {
		if(err) helpers.sendError(res, 500, 'db error');
		else helpers.sendResult(res, users);
	});
};