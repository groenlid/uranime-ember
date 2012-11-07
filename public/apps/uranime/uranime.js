(function(exports) {/*Uranime = Ember.Namespace.create({
  
});*/
Uranime = Ember.Application.create({
	VERSION: '0.0.1'
});

})({});
(function(exports) {Uranime.ApplicationView = Ember.View.extend({
	template: 'application'
});
})({});
(function(exports) {Uranime.SearchView = Ember.View.extend({
	templateName: "search",
	goToAnime: function(e,a){
		console.log("going to anime");
		var id = e.context.get("id");
		Uranime.get('store').find(App.Anime,{id:id});
		Uranime.get('router').send('goToAnime', {id: id});
	}
});
})({});
(function(exports) {Uranime.SearchFormView = Ember.TextField.extend(Ember.TargetActionSupport, {
    tagName: "form",
    valueBinding: 'Uranime.SearchFormController.searchText',
    searchQuery: '',
    submit: function(event) {
    	event.preventDefault();
    	Uranime.get('router').send('goToSearch', {
			query: this.get("searchQuery")
		});
    }
});
})({});
(function(exports) {Uranime.NotificationsView = Em.View.extend({
     name: 'myPopover',
     tagName: "li",
     templateName: 'notifications',
     click: function(event) {
     	event.preventDefault();
     	console.log(event);
     	$("#notifications").toggle();
     }         
});
})({});
(function(exports) {Uranime.AnimeView = Ember.View.extend({
	templateName: "anime"
});
})({});
(function(exports) {Uranime.ApplicationController = Ember.ArrayController.extend({
	
});

})({});
(function(exports) {Uranime.Router = Em.Router.extend({
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

})({});
(function(exports) {Uranime.ready = function(){
	console.log("Uranime init");
}

})({});
(function(exports) {

// Views






// Controllers


// Models




})({});