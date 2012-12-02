var ProjectPageViewModel = {
	Display: ko.observable(false),
	
	FeaturedTopics : ko.observableArray([]),
	Activities : ko.observableArray([]),
	
	Init : function(params) {
		
		ProjectPageViewModel.FeaturedTopics([]);
		ProjectPageViewModel.Activities([]);
		
		// TODO : Replace hardcoded id
		Data.DataService.GetProjectDetails(params.id, function(data){
			ProjectPageViewModel.FeaturedTopics(data.topics);
			
			$("#Page_PinsPage .assetsContainer").masonry({
				itemSelector: '.box',
				animationOptions: {
					duration: 400
				}
			});
			
		});
		
		// TODO : Replace hardcoded id
		Data.DataService.GetProjectActivity(params.id, function(data){
			ProjectPageViewModel.Activities(data);
		});
		
		
	}
}