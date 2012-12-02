var Models = require('./models')
,	User = Models.User
,	Project = Models.Project
,	Topic = Models.Topic
,	Pin = Models.Pin
,	Annotation = Models.Annotation;



////////////////////
// test user save //
////////////////////

var user = new User();
user.username = "lanny";
user.email = "lanny@pixelsmashing.com";
user.picture = "http://profile.ak.fbcdn.net/hprofile-ak-snc7/c26.65.325.325/s160x160/389333_10150361381135983_710068872_n.jpg";
user.save(function(err, saved) {
	if(err) console.log(err);
	else { 
		console.log('saved user');
		console.log(saved);
	}
});


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


/////////////////////
// test topic save //
/////////////////////

// var topic = new Topic;
// project.label = "Our third project";
// project.logo = "http://mongoosejs.com/docs/images/apps/h_mcds.png";
// project.color = "#fefefe";
// project.author = '50b93b2e00b62ab60c000001';
// project.tags.addToSet('digi');
// project.tags.addToSet('flare');
// project.save(function(err, saved) {
// 	if(err) console.log(err);
// 	else {
// 		console.log('saved projects');
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


////////////////////////////////
// test adding pin to project //
////////////////////////////////

// Topic.findById('50ba7a453a3d130c08000003', function(err, topic) {
// 	if(err)	console.log(err);
// 	else {
// 		var pin = new Pin();
// 		pin.author = '50b93b2e00b62ab60c000001';
// 		pin.title = "Ya hoo";
// 		pin.url = "http://www.yahoo.com";
// 		pin.picture = "http://kara.allthingsd.com/files/2009/06/yahoo-purple-logojpg.jpeg";
// 		topic.pins.push(pin);
// 		topic.save(function(err, saved) {
// 			if(err) console.log(err);
// 			else {
// 				console.log('topic saved');
// 				console.log(saved);
// 			}
// 		});
// 	}
// });


///////////////////////////
// test annotation a pin //
///////////////////////////

// Project.findById('50ba4362c5c224a203000003', function(err, project) {
// 	if(err) console.log(err);
// 	else {
// 		var pin = project.pins[0];
// 		pin.tags.addToSet('google');
// 		pin.tags.addToSet('web');

// 		var annotation = new Annotation();
// 		annotation.comment = "Love the logo!";
// 		annotation.author = '50b93b2e00b62ab60c000001';
// 		pin.annotations.push(annotation);

// 		project.save(function(err, saved) {
// 			if(err) console.log(err);
// 			else {
// 				console.log('project saved');
// 				console.log(saved.pins[0]);
// 			}
// 		});
// 	}
// });