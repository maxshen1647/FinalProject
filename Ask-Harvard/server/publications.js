Meteor.publish('Tasks', function() {
  return Tasks.find();
});