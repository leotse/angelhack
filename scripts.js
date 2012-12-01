////////////////////
// test user save //
////////////////////

//var Models = require('./models')
// ,	User = Models.User;

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

// var Models = require('./models')
// ,	Project = Models.Project;

// var project = new Project;
// project.label = "label 1";
// project.logo = "http://mongoosejs.com/docs/images/apps/h_mcds.png";
// project.color = "#fefefe";
// project.tags.push('cool');
// project.tags.push('beans');
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

// var Models = require('./models')
// ,	Project = Models.Project;

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

// var Models = require('./models')
// ,	Project = Models.Project
// ,	Pin = Models.Pin;

// Project.findById('50ba4362c5c224a203000003', function(err, project) {
// 	if(err)	console.log(err);
// 	else {
// 		var pin = new Pin();
// 		pin.title = "My first pin";
// 		pin.url = "http://www.google.com";
// 		pin.picture = "https://www.google.ca/images/srpr/logo3w.png";
// 		project.pins.push(pin);
// 		project.save(function(err, saved) {
// 			if(err) console.log(err);
// 			else {
// 				console.log('project saved');
// 				console.log(saved);
// 			}
// 		});
// 	}
// });