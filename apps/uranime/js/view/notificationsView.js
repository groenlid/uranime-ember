Uranime.NotificationsView = Em.View.extend({
     name: 'myPopover',
     tagName: "li",
     templateName: 'notifications',
     click: function(event) {
     	event.preventDefault();
     	console.log(event);
     	$("#notifications").toggle();
     }         
});