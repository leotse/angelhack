Namespace("App");

App = (function(){
	
	// App startup
	Initialize  = function()
	{
		// Page ViewModel Binding
		
		ko.applyBindings(HomepageViewModel, document.getElementById("Page_Homepage"));
		ko.applyBindings(PinsPageViewModel, document.getElementById("Page_PinsPage"));
		ko.applyBindings(DetailsPageViewModel, document.getElementById("Page_PinDetailsPage"));
		
		NavigationService.Navigate(NavigationConstants.PAGE_HOMEPAGE);
	}
	
	return {
		Initialize: Initialize
	}
	
}());
