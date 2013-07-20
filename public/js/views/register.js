define(['text!templates/RegisterView.html'], function(registerTemplate) { 
	var registerView = Backbone.View.extend({
			"submit form": "register"
			$.post('/register', {
				lastName: $('input[name=lastName]').val(), 
				email: $('input[name=email]').val(), 
				password: $('input[name=password]').val(),
				console.log(data);
		},
			this.$el.html(registerTemplate);
	});
});