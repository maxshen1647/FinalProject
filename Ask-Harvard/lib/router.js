Router.configure({
  layoutTemplate: 'layout'
  // allows client to obtain data from the main database
  // add stuff here to control what data the client can obtain
  waitOn: function() { return Meteor.subscribe('Tasks'); }
});

Router.route('/', {name: 'homepage'});