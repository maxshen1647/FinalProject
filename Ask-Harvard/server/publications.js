//publishes data from the main database to the client 
//modify this code to control what gets published
Meteor.publish('Tasks', function() {
  return Tasks.find();
});