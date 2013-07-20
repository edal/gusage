define(['views/index', 'views/login',  'views/register'], 
function(IndexView, LoginView, RegisterView) {				var GusageRouter = Backbone.Router.extend({
		routes: { 
			"index": "index", 
			"login": "login", 
			"register": "register", 		},
    
		changeView: function(view) { 
			if ( null != this.currentView ) {				this.currentView.undelegateEvents();			} 
			this.currentView = view; 
			this.currentView.render();		},
		
		index: function() { 
			this.changeView(new IndexView());		},		
		login: function() { 
			this.changeView(new LoginView());		},
				
		register: function() {			this.changeView(new RegisterView());		}
		
	});	return new GusageRouter(); 
});