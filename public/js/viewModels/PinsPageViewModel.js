var PinsPageViewModel = {
	Display: ko.observable(false),
	
	Pins : ko.observableArray(),
	
	Init : function(params) {
		
		PinsPageViewModel.Pins([]);
		
		// TODO : Replace hardcoded id
		Data.DataService.GetTopicDetails(params.id, function(data){
			PinsPageViewModel.Pins(data.pins);
			
			// TODO : Apply masonry on the pins page
			
			$("#Page_PinsPage .assetsContainer").masonry({
				itemSelector: '.box',
				animationOptions: {
					duration: 400
				}
			});
			
			$('#btn_addPin').click(function () {
		        $('#dialog').dialog('open');
		        return false;
		    });
		});
	}
}