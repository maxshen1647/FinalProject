Meteor.publish('Tasks', function() {
  return Tasks.find();
});

Meteor.publish('Comments', function() {
  return Comments.find();
});