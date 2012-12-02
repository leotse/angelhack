Namespace("Data.ModelFactory");

Data.ModelFactory.GenerateRandomInteger = function() {
	return Math.floor(Math.random() * 10000) + 100000;
}

Data.ModelFactory.CreateUserModel = function(data){
	return $.extend(data,{
	});
}

Data.ModelFactory.CreateProjectModel = function(data){
	var result = data;
	
	var topics = [];
	
	if(!Utilities.IsNullOrEmpty(data.topics))
	{
		for(var i = 0; i < data.topics.length; i++)
		{
			topics.push(Data.ModelFactory.CreateTopicModel(data.topics[i]));
		}
	}
	
	return $.extend(result,{
		topics : topics,
		OnClick : function(item) {
			NavigationService.Navigate(NavigationConstants.PAGE_PROJECT, {"id": item._id});
		}
	});
}

Data.ModelFactory.CreateTopicModel = function(data){	
	var result = data;
	
	var pins = [];
	
	if(!Utilities.IsNullOrEmpty(data.pins))
	{
		for(var i = 0; i < data.pins.length; i++)
		{
			pins.push(Data.ModelFactory.CreatePinModel(data.pins[i]));
		}
	}
	
	return $.extend(result,{
		pins : pins,
		OnClick : function(item) {
			NavigationService.Navigate(NavigationConstants.PAGE_PINSPAGE, {"id": item._id});
		}
	});
}

Data.ModelFactory.CreateActivityModel = function(data){
	return $.extend(data,{
		OnClick : function(item) {
			console.log("CLICK:",item);
		}
	});
}

Data.ModelFactory.CreatePinModel = function(data){
	var result = data;
	
	var annotations = [];
	
	if(!Utilities.IsNullOrEmpty(data.annotations))
	{
		for(var i = 0; i < data.annotations.length; i++)
		{
			annotations.push(Data.ModelFactory.CreateAnnotationModel(data.annotations[i]));
		}
	}
	
	return $.extend(result,{
		annotations : annotations,
		OnClick : function(item) {
			NavigationService.Navigate(NavigationConstants.PAGE_DETAILSPAGE, {"id": item._id});
		}
	});
}

Data.ModelFactory.CreateAnnotationModel = function(data){
	var result = data;
	
	return $.extend(result,{
		annotations : annotations,
		OnClick : function(item) {
			console.log("CLICK", item);
		}
	});
}