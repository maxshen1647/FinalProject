(function(){//functions that do work on the homepage.html
Template.homepage.helpers({
    tasks: function () {
      // return all of the tasks
      return Tasks.find({}, {sort: {createdAt: -1}});
    },
    // returns the status of the anon inquiry checkbox
    hideCompleted: function () {
      return Session.get("hideCompleted");
    }
  });

  // events that happen in homepage.html
  Template.homepage.events({
     // This function is called when the new task form is submitted
    "submit .new-task": function (event) {
      var text = event.target.text.value;

      //check for blank input
      if (text == "")
        return false;

      // if not logged in, display alert. if anon box is checked, do not acquire username
      // insert question into database
      if (Meteor.user() == null){
      alert('Please sign in or register first. Thanks!');
      } else if (Session.get("hideCompleted")){
        Tasks.insert({
          text: text,
          createdAt: new Date(),
          userId: Meteor.userId(), // _id of logged in user
        });  
      } else {
        Tasks.insert({
          text: text,
          createdAt: new Date(),
          userId: Meteor.userId(), // _id of logged in user
          username: Meteor.user().username // username of logged in user 
        });
      }

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },
    // when anonymous box is is checked/unchecked, change the session variable
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });


})();
