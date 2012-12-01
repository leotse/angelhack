
////////////////////
// Common Helpers //
////////////////////


// creates a mongodb ObjectID from string
module.exports.createObjectId = function(id) {

	// make sure input param is not empty
	if(!id || id.length === 0) return null;

	// try creating db object id from input string
	try {
		var objectId = ObjectId(id);
		return objectId;
	} catch(e) { 
		return null;
	}
};


// sends a json result to client
module.exports.sendResult = function(res, data) {
	var apiResponse = {};
	apiResponse.meta = { code: 200 };
	apiResponse.response = data;

	res.send(apiResponse);
};


// sends and error json to client
module.exports.sendError = function(res, code, err) {

	// log error message
	console.log('error - code: ' + code + ' err: ' + err);

	// build and send api response
	var apiResponse = {};
	apiResponse.meta = { code: code };
	apiResponse.error = message;

	res.send(apiResponse);
};