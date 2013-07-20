require.config({ 
	paths: {		jQuery: '/js/lib/jquery-2.0.3.min', 
		Underscore: '/js/lib/underscore', 
		Backbone: '/js/lib/backbone', 
		text: '/js/lib/text', 
		templates: '../templates',
		header: '/js/views/header',
		bootstrap:'/js/lib/bootstrap.min'	},
	
	shim: { 
		'Backbone': ['Underscore', 'jQuery'],
		'bootstrap': ['jQuery'], 
		'header': ['bootstrap'],
		'Gusage': ['Backbone', 'header']	} 
});
require(['Gusage'], function(Gusage) { 
	Gusage.initialize();});