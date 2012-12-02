Namespace("Data");

Data.DataService = (function(){
	
	var isTest = false;
	
	//CONSTANTS
	const DATA_SERVICE_BASE = "http://angelhackto.herokuapp.com/api/";
	//const DATA_SERVICE_BASE = "http://10.56.21.111:5000/api/";
	
	var PROJECTS_SERVICE = DATA_SERVICE_BASE + "projects";
	var TOPICS_SERVICE = DATA_SERVICE_BASE + "topics";
	var ACTIVITY_SERVICE = DATA_SERVICE_BASE + "activities";
	var PINS_SERVICE = DATA_SERVICE_BASE + "pins";
	var ANNOTATIONS_SERVICE = DATA_SERVICE_BASE + "annotations";
	
	var USERS_SERVICE = DATA_SERVICE_BASE + "users";
	
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
		
		var url = PROJECTS_SERVICE;
		
		if(isTest) {
			url = "js/data/test/projects.json";
		}
		
		DoServiceCall(url, "GET", params, function(data){
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
		
		var url = PROJECTS_SERVICE;
		
		if(isTest) {
			url = "js/data/test/projectDetails.json";
		}
		
		DoServiceCall(url, "GET", params, function(data){
			if(data == null)
				callback(null);
			
			var result = Data.ModelFactory.CreateProjectModel(data.response);
			
			callback(result);
		});
	}
	
	GetProjectActivity = function(projectId, callback) {
		
		var params = CreateServiceParamsObj({
			id : projectId
		});
		
		var url = ACTIVITY_SERVICE;
		
		if(isTest) {
			url = "js/data/test/activities.json";
		}
		
		DoServiceCall(url, "GET", params, function(data){
			if(data == null)
				callback(null);
			
			var result = [];
			
			for(var i= 0; i < data.response.length; i++)
			{
				result.push(Data.ModelFactory.CreateActivityModel(data.response[i]));
			}
			
			callback(result);
		});
	}
	
	GetTopicDetails = function(topicId, callback) {
		
		var params = CreateServiceParamsObj({
			id : topicId
		});
		
		var url = TOPICS_SERVICE;
		
		if(isTest) {
			url = "js/data/test/topicDetails.json";
		}
		
		DoServiceCall(url, "GET", params, function(data){
			if(data == null)
				callback(null);
			
			var result = Data.ModelFactory.CreateTopicModel(data.response);
			
			callback(result);
		});
	}
	
	GetPinsByTopic = function(topicId, callback) {
		
		var params = CreateServiceParamsObj({
			tid : topicId
		});
		
		var url = PINS_SERVICE;
		
		DoServiceCall(url, "GET", params, function(data){
			if(data == null)
				callback(null);
			
			var result = [];
			
			for(var i= 0; i < data.response.length; i++)
			{
				result.push(Data.ModelFactory.CreatePinModel(data.response[i]));
			}
			
			callback(result);
		});
	}
	
	GetPinDetails = function(pinId, callback) {
		
		var params = CreateServiceParamsObj({
			id : pinId
		});
		
		var url = PINS_SERVICE;
		
		DoServiceCall(url, "GET", params, function(data){
			if(data == null)
				callback(null);
			
			var result = Data.ModelFactory.CreatePinModel(data.response);
			
			callback(result);
		});
	}
	
	
	// CREATION
	
	CreatePin = function(data, callback) {
		
		var params = CreateServiceParamsObj(data);
		
		var url = PINS_SERVICE;
		
		DoServiceCall(url, "POST", params, function(data){
			if(data == null)
				callback(null);
				
			var result = Data.ModelFactory.CreatePinModel(data.response);
			
			callback(result);
		});
	}
	
	UpdateLike = function(data, callback) {
		var params = CreateServiceParamsObj(data);
		
		var url = PINS_SERVICE;
		
		DoServiceCall(url, "POST", params, function(data){
			if(data == null)
				callback(null);
				
			var result = Data.ModelFactory.CreatePinModel(data.response);
			
			callback(result);
		});
	}
	
	CreateAnnotation = function(pid, data, callback) {
		
		var params = CreateServiceParamsObj(data);
		
		var url = ANNOTATIONS_SERVICE + "?pid=" + pid;
		
		DoServiceCall(url, "POST", params, function(data){
			if(data == null)
				callback(null);
				
			var result = Data.ModelFactory.CreateAnnotationModel(data.response);
			
			callback(result);
		});
	}
	
	AddCommentToAnnotation = function(data, callback) {
		
		var params = CreateServiceParamsObj(data);
		
		var url = ANNOTATIONS_SERVICE;
		
		DoServiceCall(url, "POST", params, function(data){
			if(data == null)
				callback(null);
				
			var result = Data.ModelFactory.CreateAnnotationModel(data.response);
			
			callback(result);
		});
	}
	
	return {
		GetAllProjects : GetAllProjects,
		GetProjectActivity: GetProjectActivity,
		GetProjectDetails : GetProjectDetails,
		GetTopicDetails : GetTopicDetails,
		GetPinsByTopic : GetPinsByTopic,
		GetPinDetails : GetPinDetails,
		CreatePin : CreatePin,
		UpdateLike : UpdateLike,
		CreateAnnotation : CreateAnnotation,
		AddCommentToAnnotation : AddCommentToAnnotation,
		
	}
	
}());