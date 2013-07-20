define(['text!templates/HeaderView.html'], function(headerTemplate) { 
	window.HeaderView = Backbone.View.extend({
	el: $('.header'),
	
    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(headerTemplate);
    },

    selectMenuItem: function (menuItem) {
        $('.nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    }

});
});