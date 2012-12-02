var request = require('request');



// test endpoint to create topic

var url = 'http://localhost:3000/api/topics?pid=50ba8a1e9cb44f9309000003'
,	topic = {
		author: '50b93b2e00b62ab60c000001',
		label: 'Wireframes',
		tags: [ 'wireframe', 'secret', 'v1' ]
	}

request({
	method: 'post',
	url: url,
	form: topic
}, output);




// helper
function output(err, res, body) {
	if(err) console.log(err);
	else if(res.statusCode !== 200) console.log(res.statusCode);
	else console.log(body);	
}