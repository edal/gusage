define(['router'], function(router) { 
	var initialize = function() { 		
		this.headerView = new HeaderView();
		this.headerView.render();
		checkLogin(runApplication);        
	
	var checkLogin = function(callback) { 
		$.ajax("/account/authenticated", {
			success: function() {
			},
				return callback(false);
		});
	
		Backbone.history.start();
		if (!authenticated) {
		} else {
	};
	
		initialize: initialize
});