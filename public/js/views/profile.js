define(['GusageView', 'text!templates/profile.html', 'text!templates/status.html', 'models/Status', 'views/Status'],
		el: $('#content'),
			this.model.bind('change', this.render, this); 
		},
			this.$el.html(
			);
			if ( null != statusCollection ) {
				_.each(statusCollection, function (statusJson) { 
					var statusModel = new Status(statusJson); 
					var statusHtml = (new StatusView({ model: statusModel })).render().el; 
					$(statusHtml).prependTo('.status_list').hide().fadeIn('slow');
			}
		}
});