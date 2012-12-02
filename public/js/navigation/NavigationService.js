Namespace("NavigationService");

NavigationService = {
	
	Navigate : function(page, params) {
		if(params == null || Utilities.IsNullOrEmpty(params.id))
			$.address.value(page);
		else
			$.address.value(page + "-" + params.id);
	}
}

$.address.change(function(event) {  
    
    console.log(event);
    
    pathParams = event.path.split("-");
    
    var page = "";
    var data_id = "";
    
    if(pathParams.length > 0)
    {
    	page = pathParams[0];
    }
    
    if(pathParams.length > 1)
    {
    	data_id = pathParams[1];
    }
    
    page = page.replace("/", "");
    
    
    HomepageViewModel.Display(false);
	ProjectPageViewModel.Display(false);
	PinsPageViewModel.Display(false);
	DetailsPageViewModel.Display(false);
			
	switch(page) {
		case NavigationConstants.PAGE_PROJECT : 
			ProjectPageViewModel.Display(true);
			ProjectPageViewModel.Init(data_id);
			break;
		case NavigationConstants.PAGE_PINSPAGE : 
			PinsPageViewModel.Display(true);
			PinsPageViewModel.Init(data_id);
			break;
		case NavigationConstants.PAGE_DETAILSPAGE : 
			DetailsPageViewModel.Display(true);
			DetailsPageViewModel.Init(data_id);
			break;
		default:
			HomepageViewModel.Display(true);
			HomepageViewModel.Init("");
			break;
	}
});