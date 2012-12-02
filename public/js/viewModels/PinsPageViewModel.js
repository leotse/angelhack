var PinsPageViewModel = {
	Display: ko.observable(false),
	
	Pins : ko.observableArray(),
	
	Init : function(param) {
		
		PinsPageViewModel.Pins([]);
		
		Data.DataService.GetPinsByTopic(param, function(data_array){
			PinsPageViewModel.Pins(data_array);
			
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