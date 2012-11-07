Uranime.Router = Em.Router.extend({
	enableLogging: true,
	
	root: Ember.Route.extend({
		defaultRoot:'index',
		
		index: Ember.Route.extend({
			route: '/',
			
			connectOutlets: function(router) {
	          router.get('applicationController').connectOutlet('anime');
	          console.log("entered root.index, fully transitioned to", router.get('currentState.path'));
	        }
		})	
	})
	
});
