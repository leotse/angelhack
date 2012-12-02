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

var url = 'http://localhost:3000/api/pins?tid=50bac66812efe5180e000002'
,	pin = {
		author: '50b93b2e00b62ab60c000001',
		title: 'yahoo pin',
		url: 'http://www.yahoo.com',
		picture: "http://l.yimg.com/a/i/mntl/ww/events/p.gif"
	};

request({
	method: 'post',
	url: url,
	form: pin
}, output);



// helper
function output(err, res, body) {
	if(err) console.log(err);
	else if(res.statusCode !== 200) console.log(res.statusCode);
	else console.log(body);	
}