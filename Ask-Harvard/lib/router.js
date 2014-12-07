Router.configure({
  // loads layout.html on every single page
  layoutTemplate: 'layout',
  
  // shows spinning wheel while loading for better user interface
  // (DOES NOT WORK YET) loadingTemplate: 'loading',

  // redirects to notFound.html if user enters invalid url
  notFoundTemplate: 'notFound',
  // allows client to obtain data from the main database
  waitOn: function() { return [Meteor.subscribe('Questions'), Meteor.subscribe('Answers')];}
});

Router.route('/', {name: 'mainpage'});
Router.route('/homepage', {name: 'homepage'});
Router.route('/answer/:_id', {  
	name: 'answerpage',
	data: function() { return Questions.findOne(this.params._id); }
});


Router.onBeforeAction('dataNotFound', {only: 'answerpage'});

