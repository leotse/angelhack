var DetailsPageViewModel = {
	Display: ko.observable(false),
	
	Title : ko.observable(""),
	
	SelectedItem : ko.observable(null),
	
	Annotations : ko.observableArray([]),
	
	Init : function(params) {
		
		DetailsPageViewModel.SelectedItem(null);
		
		DetailsPageViewModel.Annotations([]);
		
		if(params.pin != null) {
			DetailsPageViewModel.SelectedItem(params.pin);
			DetailsPageViewModel.Title(params.pin.title);
			DetailsPageViewModel.Annotations(params.pin.annotations);
		}
	}
}