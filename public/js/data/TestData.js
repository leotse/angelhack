Namespace("Data");

TestData = (function(){
	
	GetTestAssets = function() {
		var result = [];
		
		for(var i = 0; i < 20; i++) {
			var asset = ModelFactory.Create({
				title : "Hello" + i
			});
		}
		
		return result;
	}
	
}());
