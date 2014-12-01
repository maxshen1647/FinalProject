Router.configure({
  // loads layout.html on every single page
  layoutTemplate: 'layout',
  // shows spinning wheel while loading for better user interface
  loadingTemplate: 'loading',
  // allows client to obtain data from the main database
  // add stuff here to control what data the client can obtain
  waitOn: function() { return Meteor.subscribe('Tasks'); }
});

Router.route('/', {name: 'homepage'});