define(['text!templates/HomeView.html'], function(forgotpasswordTemplate) { 
	var forgotpasswordView = Backbone.View.extend({
			"submit form": "password"
			$.post('/forgotpassword', {
			}, function(data) {
			});
		},

		render: function() { 
			this.$el.html(forgotpasswordTemplate);
	});
});