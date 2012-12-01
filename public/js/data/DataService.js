Namespace("Data");

Data.DataService = (function(){
	
	//CONSTANTS
	var DATA_SERVICE_BASE = "http://www.something.com";
	
	
	// PRIVATE METHODS
	CreateServiceParamsObj = function(options) {
		
		var basicParams = {
			"timestamp" : Date.now()
		}
		
		return $.extend(basicParams,options);
	}
	
	
	// PUBLIC METHODS
	GetSomeString = function() {
		return "HELLO";
	}
	
	GetAssetsByCategoryId = function(categoryId, callback) {
		callback();
	}
	
	return {
		GetSomeString : GetSomeString
	}
	
}());