Uranime.SearchFormView = Ember.TextField.extend(Ember.TargetActionSupport, {
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