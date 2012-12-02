var request = require('request');



///////////////////////////////////
// test endpoint to create topic //
///////////////////////////////////

// var url = 'http://localhost:3000/api/topics?pid=50ba8a1e9cb44f9309000003'
// ,	topic = {
// 		author: '50b93b2e00b62ab60c000001',
// 		label: 'Branding',
// 		tags: [ 'branding', 'v1' ]
// 	};

// request({
// 	method: 'post',
// 	url: url,
// 	form: topic
// }, output);


//////////////////////////////////
// test endpoint to create pins //
//////////////////////////////////

// var url = 'http://localhost:3000/api/pins?tid=50bac66812efe5180e000002'
// ,	pin = {
// 		author: '50b93b2e00b62ab60c000001',
// 		title: 'mukuls pin',
// 		url: 'http://www.bing.com',
// 		picture: "http://pcdn.500px.net/18994033/fd95a8e32cf6aedf8ab4e2f633b8b4b0ba25a27a/4.jpg"
// 	};

// request({
// 	method: 'post',
// 	url: url,
// 	form: pin
// }, output);


/////////////////////////////////////////
// test endpoint to create annotations //
/////////////////////////////////////////

// var url = 'http://localhost:3000/api/annotations?pid=50baef866c60e97213000002'
// ,	jar = request.jar()
// ,	annotation = { 
// 		body: 'like the header of this page',
// 		region: { x: 100, y: 150 }
// 	};

// login(jar, function(err, res, body) {

// 	request({
// 		method: 'post',
// 		url: url,
// 		jar: jar,
// 		json: annotation
// 	}, output);
// });


/////////////////////
// test commenting //
/////////////////////

// var url = 'http://localhost:3000/api/comments?aid=50bb9392ea1453c602000002'
// ,	jar = request.jar()
// ,	comment = { body: 'awesome pics! love it' };

// login(jar, function() {
// 	request({
// 		method: 'post',
// 		url: url,
// 		jar: jar,
// 		json: comment
// 	}, output);
// });


/////////////////////
// test liking pin //
/////////////////////

// var url = 'http://localhost:3000/api/like?pid=50baef866c60e97213000002'
// ,	body = { uid: '50ba9e01b5aa33b10b000003' };

// request({
// 	method: 'post',
// 	url: url,
// 	form: body
// }, output);


// helpers
function output(err, res, body) {
	if(err) console.log(err);
	else if(res.statusCode !== 200) console.log(res.statusCode);
	else console.log(body);	
}

function login(jar, callback) {
	var url = 'http://localhost:3000/login'
	,	form = { username: 'leotse', password: 'leotse' };

	request({
		method: 'post',
		url: url,
		jar: jar,
		form: form
	}, callback);
}