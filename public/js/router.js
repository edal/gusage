define(['views/index', 'views/login',  'views/register', 'views/forgotpassword'], 
function(IndexView, LoginView, RegisterView,  ForgotPasswordView) {			
		routes: { 
			"index": "index", 
			"login": "login", 
			"register": "register", 
			"forgotpassword": "forgotpassword"
    
		changeView: function(view) { 
			if ( null != this.currentView ) {
			this.currentView = view; 
			this.currentView.render();
		
		index: function() { 
			this.changeView(new IndexView());
		login: function() { 
			this.changeView(new LoginView());
		
			this.changeView(new ForgotPasswordView());
		
		register: function() {
		
	});
});