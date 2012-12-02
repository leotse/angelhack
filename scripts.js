var Models = require('./models')
,	User = Models.User
,	Project = Models.Project
,	Topic = Models.Topic
,	Pin = Models.Pin
,	Annotation = Models.Annotation;



////////////////////
// test user save //
////////////////////

// var user = new User();
// user.username = "lanny";
// user.email = "lanny@pixelsmashing.com";
// user.picture = "http://profile.ak.fbcdn.net/hprofile-ak-snc7/c26.65.325.325/s160x160/389333_10150361381135983_710068872_n.jpg";
// user.save(function(err, saved) {
// 	if(err) console.log(err);
// 	else { 
// 		console.log('saved user');
// 		console.log(saved);
// 	}
// });


///////////////////////
// test project save //
///////////////////////

// var project = new Project;
// project.title = 'Secret Project';
// project.description = 'Our angelhack app is awesome';
// project.logo = 'http://marketingbones.com/wp-content/uploads/2011/01/starbucks-new-logo.jpg';
// project.topics.addToSet('50ba79a3a021000908000003'); 
// project.topics.addToSet('50ba7a3861446f0b08000003'); 
// project.topics.addToSet('50ba7a453a3d130c08000003');
// project.save(function(err, saved) {
// 	if(err) console.log(err);
// 	else {
// 		console.log('saved project');
// 		console.log(saved);
// 	}
// });


/////////////////////////////
// test project tag filter //
/////////////////////////////

// Project
// .where('tags').all([ 'cool', 'beans' ])
// .exec(function(err, projects) {
// 	if(err) console.log(err);
// 	else {
// 		console.log('project search results');
// 		console.log(projects);
// 	}
// });

