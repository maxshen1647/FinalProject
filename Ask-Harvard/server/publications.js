Meteor.publish('Questions', function() {
  return Questions.find();
});

Meteor.publish('Answers', function() {
  return Answers.find();
});