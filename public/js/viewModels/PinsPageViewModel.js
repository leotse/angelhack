var PinsPageViewModel = {
	Display: ko.observable(false),
	
	Pins : ko.observableArray(),
	
	Init : function(params) {
		
		PinsPageViewModel.Pins([]);
		
		// TODO : Replace hardcoded id
		Data.DataService.GetTopicDetails("50ba7a453a3d130c08000003", function(data){
			PinsPageViewModel.Pins(data.pins);
			
			// TODO : Apply masonry on the pins page
			
			$("#Page_PinsPage .assetsContainer").masonry({
				itemSelector: '.box',
				animationOptions: {
					duration: 400
				}
			});
		});
	}
}