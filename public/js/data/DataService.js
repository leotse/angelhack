Namespace("Data");

Data.DataService = (function(){
	
	var isTest = false;
	
	//CONSTANTS
	const DATA_SERVICE_BASE = "http://10.56.21.111:3000/api/";
	
	var PROJECTS_SERVICE = DATA_SERVICE_BASE + "projects";
	var ACTIVITY_SERVICE = DATA_SERVICE_BASE + "activity";
	var PIN_SERVICE = DATA_SERVICE_BASE + "pin";
	var ANNOTATION_SERVICE = DATA_SERVICE_BASE + "annotation";
	
	var USERS_SERVICE = DATA_SERVICE_BASE + "users";
	
	if(isTest)
	{
		PROJECTS_SERVICE = "js/data/test/projects.json";
		ACTIVITY_SERVICE = "js/data/test/activity.json";
	}
	
	// PRIVATE METHODS
	CreateServiceParamsObj = function(options) {
		
		var basicParams = {
			"timestamp" : Date.now()
		}
		
		return $.extend(basicParams,options);
	}
	
	IsDataValid = function(data) {
		return (data != null && 
				data.meta != null && 
				data.meta.code != null &&
				data.meta.code == "200" &&
				data.response != null)
				
	}
	
	DoServiceCall = function(url, method, params, callback) {
		
		if(method == "GET") {
			$.get(url, params, function(data) {
	        	
	        	if(IsDataValid(data))
	        	{
	        		callback(data);
	    		}
	        	else
	        	{
	        		callback(null)	
	        	}
	        }, "json");
       }
       else if(method == "POST") {
			$.post(url, params, function(data) {
	        	
	        	if(IsDataValid(data))
	        	{
	        		callback(data);
	    		}
	        	else
	        	{
	        		callback(null)	
	        	}
	        }, "json");
       }
        
	}
	
	
	// PUBLIC METHODS
	GetAllProjects = function(callback) {
		var params = CreateServiceParamsObj();
		DoServiceCall(PROJECTS_SERVICE, "GET", params, function(data){
			if(data == null)
				callback(null);
				
			var result = [];
			
			for(var i= 0; i < data.response.length; i++)
			{
				result.push(Data.ModelFactory.CreateProjectModel(data.response[i]));
			}
			
			callback(result);
		});
	}
	
	GetProjectDetails = function(projectId, callback) {
		
		var params = CreateServiceParamsObj({
			id : projectId
		});
		
		DoServiceCall(PROJECTS_SERVICE, "GET", params, function(data){
			if(data == null)
				callback(null);
			
			var result = Data.ModelFactory.CreateProjectModel(data.response);
			
			callback(result);
		});
	}
	
	return {
		GetAllProjects : GetAllProjects,
		GetProjectDetails : GetProjectDetails
	}
	
}());