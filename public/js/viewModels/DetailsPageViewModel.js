var DetailsPageViewModel = {
	Display: ko.observable(false),
	
	LightsOut: ko.observable(false),
	
	SelectedItem : ko.observable(null),
		
	Title : ko.observable(""),
	
	Picture : ko.observable(""),
	
	Url : ko.observable(""),
	
	Annotations : ko.observableArray([]),
	
	// Support adding annotations
	XCoord : ko.observable(-1),
	YCoord : ko.observable(-1),
	
	Init : function(param) {
		
		DetailsPageViewModel.SelectedItem(null);
		
		DetailsPageViewModel.Title("");
		
		DetailsPageViewModel.Picture("");
	
		DetailsPageViewModel.Url("");
		
		DetailsPageViewModel.Annotations([]);
		
		Data.DataService.GetPinDetails(param, function(data){
			
			DetailsPageViewModel.Title(data.title);
			DetailsPageViewModel.Picture(data.picture);
			DetailsPageViewModel.Url(data.url);
			DetailsPageViewModel.SelectedItem(data);
			DetailsPageViewModel.Annotations(data.annotations);
			
		$.each("div.annotationOverlay", function(i)
		{
				
			var posX = $(i).attr("data-coord-x");
		    var posY = $(i).attr("data-coord-y");
			
			var objPos = {"x":posX,"y":posY};
			
			$(i).css({"x":posX,"y":posY});

		});

			



		});
		
		$("#add-annotation-dialog").dialog({
	        autoOpen: false,
	        modal: true,
	        buttons: {
	            Ok: function () {
	            	var data = {
	            		"body" : $("#add-annotation-dialog-text").val(),
	            		"region"  : {
	            			"x" : DetailsPageViewModel.XCoord(),
	            			"y" : DetailsPageViewModel.YCoord()
	            		}
	            	}
	            	
	            	var pid = DetailsPageViewModel.SelectedItem()._id;
	            	
	            	console.log("ANNOTATE DATA:", data);
	            	
	            	Data.DataService.CreateAnnotation(pid, data, function(result){
	            		console.log("ANNOTATE RESULT:", result);
	            	});
	            	
	            	$(this).dialog("close");
	            },
	            Cancel: function () {
	                $(this).dialog("close");
	            }
	        }
	    });
	},
	
	InitiateAddAnnotation : function() {

		$("#Page_PinDetailsPage #details_image").unbind("click",DetailsPageViewModel.OnAnnotateImageClick);
		$("#Page_PinDetailsPage #details_image").bind("click",DetailsPageViewModel.OnAnnotateImageClick);
	},
	
	OnAnnotateImageClick : function(e) {
		$("#Page_PinDetailsPage #details_image").unbind("click",DetailsPageViewModel.OnAnnotateImageClick);
		
		var offset = $(this).offset();
		
	    var xcoord = e.clientX - offset.left;
	    var ycoord = e.clientY - offset.top;
	    
	    DetailsPageViewModel.XCoord(xcoord);
	    DetailsPageViewModel.YCoord(ycoord);
	    
	    $('#add-annotation-dialog').dialog('open');
  	}
	
}