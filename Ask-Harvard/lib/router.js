Router.configure({
  // loads layout.html on every single page
  layoutTemplate: 'layout',
  
  // shows spinning wheel while loading for better user interface
  // (DOES NOT WORK YET) loadingTemplate: 'loading',

  // redirects to notFound.html if user eters invalid url
  notFoundTemplate: 'notFound',
  // allows client to obtain data from the main database
  waitOn: function() { return Meteor.subscribe('Tasks'); }
});

Router.route('/', {name: 'homepage'});
Router.route('/answer/:_id', {  
	name: 'answerpage',
	data: function() { return Tasks.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'answerpage'});