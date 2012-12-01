var HomepageViewModel = {
	Display: ko.observable(false),
	
	FeaturedTopics : ko.observableArray([]),
	Activity : ko.observableArray([]),
	
	Init : function(params) {
		
		// TODO : Replace hardcoded id
		Data.DataService.GetProjectDetails("50ba8a1e9cb44f9309000003", function(data){
			HomepageViewModel.FeaturedTopics(data.topics);
		});
	}
}