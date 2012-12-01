Namespace("ModelFactory");

ModelFactory.GenerateRandomInteger = function() {
	return Math.floor(Math.random() * 10000) + 100000;	 
}


ModelFactory.CreateProject = function(data){
	return {
		Title: 'Title' ,
    	personAge: ModelFactory.GenerateRandomInteger()
	}
}

ModelFactory.CreatePage = function(data){
	return {
		Title: 'Title' ,
    	personAge: ModelFactory.GenerateRandomInteger()
	}
}

ModelFactory.CreateAsset = function(data){
	return {
		Title: 'Title' ,
    	personAge: ModelFactory.GenerateRandomInteger()
	}
}

ModelFactory.CreateVideoAsset = function(){
	
}

ModelFactory.CreateImageAsset = function(){
	
}