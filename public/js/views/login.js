define(['text!templates/LoginView.html'], function(loginTemplate) { 
	var loginView = Backbone.View.extend({
		events: { 
			"submit form": "login"
			$.post('/login', {
			}, function(data) {
			}).error(function(){
			});
		},
		
		render: function() { 
			this.$el.html(loginTemplate); 
			$("#error").hide();
	});
});