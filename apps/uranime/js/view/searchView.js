Uranime.SearchView = Ember.View.extend({
	templateName: "search",
	goToAnime: function(e,a){
		console.log("going to anime");
		var id = e.context.get("id");
		Uranime.get('store').find(App.Anime,{id:id});
		Uranime.get('router').send('goToAnime', {id: id});
	}
});