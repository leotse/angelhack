Namespace("Data.ModelFactory");

Data.ModelFactory.GenerateRandomInteger = function() {
	return Math.floor(Math.random() * 10000) + 100000;
}

Data.ModelFactory.CreateUserModel = function(data){
	return $.extend(data,{
		
	});
}

Data.ModelFactory.CreateProjectModel = function(data){
	return $.extend(data,{
		
	});
}

Data.ModelFactory.CreateCategoryModel = function(data){
	return $.extend(data,{
		
	});
}

Data.ModelFactory.CreateBaseAsset = function(data){
	return $.extend(data,{
		
	});
}

Data.ModelFactory.CreateVideoAsset = function(data){
	return $.extend(Data.ModelFactory.CreateBaseAsset(data),{
		
	});
}

Data.ModelFactory.CreateImageAsset = function(data){
	return $.extend(Data.ModelFactory.CreateBaseAsset(data),{
		
	});
}