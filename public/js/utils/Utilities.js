Namespace("Utilities");

Utilities = {
	
	GetSomeString : function() {
		return "HELLO";
	},
	
	IsNullOrUndefined: function(value) {
		return typeof(value) == "undefined" || value == null;
	},
	
	IsNullOrEmpty : function(value) {
		return typeof(value) == "undefined" || value == null || value == "";
	}
	
}
