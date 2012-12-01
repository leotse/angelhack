var Models = require('./models')
,	User = Models.User
,	Topic = Models.Topic
,	Pin = Models.Pin
,	Annotation = Models.Annotation;



////////////////////
// test user save //
////////////////////

// var user = new User();
// user.name = "Leo Tse";
// user.email = "leotse1983@gmail.com";
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

Topic.findById('50ba7a453a3d130c08000003', function(err, topic) {
	if(err)	console.log(err);
	else {
		var pin = new Pin();
		pin.author = '50b93b2e00b62ab60c000001';
		pin.title = "Ya hoo";
		pin.url = "http://www.yahoo.com";
		pin.picture = "http://kara.allthingsd.com/files/2009/06/yahoo-purple-logojpg.jpeg";
		topic.pins.push(pin);
		topic.save(function(err, saved) {
			if(err) console.log(err);
			else {
				console.log('topic saved');
				console.log(saved);
			}
		});
	}
});


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