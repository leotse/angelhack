var HomepageViewModel = {
	Display: ko.observable(false),
	
	Projects : ko.observableArray([]),
	
	Init : function(param) {
		
		HomepageViewModel.Projects([]);
		
		// TODO : Replace hardcoded id
		Data.DataService.GetAllProjects(function(data){
			HomepageViewModel.Projects(data);
			
			$("#Page_Homepage .assetsContainer").masonry({
				itemSelector: '.box',
				animationOptions: {
					duration: 400
				}
			});
			
		});
		
	}
}