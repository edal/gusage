define(['views/index', 'views/login',  'views/register', 'views/forgotpassword'], 
function(IndexView, LoginView, RegisterView,  ForgotPasswordView) {				var GusageRouter = Backbone.Router.extend({
		routes: { 
			"index": "index", 
			"login": "login", 
			"register": "register", 
			"forgotpassword": "forgotpassword"		},
    
		changeView: function(view) { 
			if ( null != this.currentView ) {				this.currentView.undelegateEvents();			} 
			this.currentView = view; 
			this.currentView.render();		},
		
		index: function() { 
			this.changeView(new IndexView());		},		
		login: function() { 
			this.changeView(new LoginView());		},
				forgotpassword: function() { 
			this.changeView(new ForgotPasswordView());		}, 
		
		register: function() {			this.changeView(new RegisterView());		}
		
	});	return new GusageRouter(); 
});