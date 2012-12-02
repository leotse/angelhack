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
// 		title: 'yahoo pin',
// 		url: 'http://www.yahoo.com',
// 		picture: "http://l.yimg.com/dh/ap/default/120910/yahoo_logo_ca.png"
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
// ,	annotation = {
// 		author: '50b93b2e00b62ab60c000001',
// 		body: 'Team check out this library'
// 	};

// request({
// 	method: 'post',
// 	url: url,
// 	form: annotation
// }, output);



/////////////////////
// test commenting //
/////////////////////

var url = 'http://localhost:3000/api/comments?aid=50baf0590330269213000001'
,	comment = {
		author: '50b93b2e00b62ab60c000001',
		body: 'good lib, i use it all the time'
	};

request({
	method: 'post',
	url: url,
	form: comment
}, output);


// helper
function output(err, res, body) {
	if(err) console.log(err);
	else if(res.statusCode !== 200) console.log(res.statusCode);
	else console.log(body);	
}