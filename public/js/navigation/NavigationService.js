Namespace("NavigationService");

NavigationService = {
	
	Navigate : function(page, data) {
		
		HomepageViewModel.Display(false);
		PinsPageViewModel.Display(false);
		DetailsPageViewModel.Display(false);
				
		switch(page) {
			case NavigationConstants.PAGE_HOMEPAGE : 
				HomepageViewModel.Display(true);
				break;
			case NavigationConstants.PAGE_PINSPAGE : 
				PinsPageViewModel.Display(true);
				break;
			case NavigationConstants.PAGE_DETAILSPAGE :
				DetailsPageViewModel.Display(true); 
				break;
			default:
				break;
		}
	}
	
}
