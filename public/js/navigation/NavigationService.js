Namespace("NavigationService");

NavigationService = {
	
	Navigate : function(page, params) {
		
		HomepageViewModel.Display(false);
		PinsPageViewModel.Display(false);
		DetailsPageViewModel.Display(false);
				
		switch(page) {
			case NavigationConstants.PAGE_HOMEPAGE : 
				HomepageViewModel.Display(true);
				HomepageViewModel.Init(params);
				break;
			case NavigationConstants.PAGE_PINSPAGE : 
				PinsPageViewModel.Display(true);
				PinsPageViewModel.Init(params);
				break;
			case NavigationConstants.PAGE_DETAILSPAGE :
				DetailsPageViewModel.Display(true);
				DetailsPageViewModel.Init(params);
				break;
			default:
				break;
		}
	}
	
}
