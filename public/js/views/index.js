define(['text!templates/HomeView.html'], function(indexTemplate) { 
	var indexView = Backbone.View.extend({		el: $('#content'), render: function() {			this.$el.html(indexTemplate);		} 
	});
	
	return new indexView; 
});