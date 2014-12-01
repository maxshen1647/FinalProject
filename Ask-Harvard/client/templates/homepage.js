//functions that do work on the homepage.html
Template.homepage.helpers({
    tasks: function () {
      // return all of the tasks
      return Tasks.find({}, {sort: {createdAt: -1}});
    },

    hideCompleted: function () {
      return Session.get("hideCompleted");
    }
  });

  // events that happen in homepage.html
  Template.homepage.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted
      var text = event.target.text.value;

      //check for blank input
      if (text == "")
        return false;

      // if not logged in or anonymous, insert task without userinfo
      if (Meteor.user() == null || Session.get("hideCompleted")){
      Tasks.insert({
        text: text,
        createdAt: new Date(), // current time       
      });
      } else {
      Tasks.insert({
        text: text,
        createdAt: new Date(),
        owner: Meteor.userId(), // _id of logged in user
        username: Meteor.user().username // username of logged in user 
      });  
      }

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });
