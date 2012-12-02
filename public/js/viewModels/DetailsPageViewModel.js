var DetailsPageViewModel = {
	Display: ko.observable(false),
	
	Title : ko.observable(""),
	
	SelectedItem : ko.observable(null),
	
	Annotations : ko.observableArray([]),
	
	Init : function(param) {
		
		DetailsPageViewModel.SelectedItem(null);
		
		DetailsPageViewModel.Annotations([]);
		
		Data.DataService.GetPinDetails(param, function(data){
			
			DetailsPageViewModel.Title(data.title);
			DetailsPageViewModel.SelectedItem(data);
			DetailsPageViewModel.Annotations(data.annotations);
			
		});
	}
}