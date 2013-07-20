define(['router'], function(router) { 
	var initialize = function() { 		
		this.headerView = new HeaderView();
		this.headerView.render();
		checkLogin(runApplication);        	};
	
	var checkLogin = function(callback) { 
		$.ajax("/account/authenticated", {			method: "GET", 
			success: function() {				return callback(true); 
			},			error: function(data) { 
				return callback(false);			} 
		});	};
		var runApplication = function(authenticated) { 
		Backbone.history.start();
		if (!authenticated) {			window.location.hash = 'login'; 
		} else {			window.location.hash = 'index'; 		} 
	};
		return { 
		initialize: initialize	}; 
});