var helpers = require('../../helpers')
,	Models = require('../../models')
,	User = Models.User;

/*
 * GET home page.
 */

exports.index = function(req, res){
	var uid = req.session.uid;
	res.render('index', { uid: uid });
};

/*
 * GET login page
 */

exports.login = function(req, res) {
	res.render('login')
};


/*
 * POST login
 */
exports.loginPost = function(req, res) {
	var username = req.body.username
	,	password = req.body.password;

	User.findOne({ username: username }, function(err, user) {
		if(err) helpers.sendError(res, 500, err);
		else if(!user) helpers.sendError(res, 500, 'invalid login');
		else {

			// dummy password check
			if(username !== password) {
				helpers.sendError(res, 500, 'invalid login');
				return;
			}

			// login success!
			req.session.uid = user._id;
			res.redirect('/index.html');
		}
	});
};

/*
 * GET logout
 */
exports.logout = function(req, res) {
	req.session.destroy();
	res.redirect('/');
};