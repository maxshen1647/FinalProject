// allows client to obtain data from the main database
// add stuff here to control what data the client can obtain
Meteor.subscribe('Tasks');

// enable username and email for login
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

//functions that do work on the body of main.html
Template.body.helpers({
    tasks: function () {
      if (Session.get("hideCompleted")) {
        // If hide completed is checked, filter tasks
        return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
      } else {
        // Otherwise, return all of the tasks
        return Tasks.find({}, {sort: {createdAt: -1}});
      }
    },
    hideCompleted: function () {
      return Session.get("hideCompleted");
    },
    questionsCount: function () {
      return Tasks.find().count();
    }   
  });

  // events that happen in the body of main.html
  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted
      var text = event.target.text.value;

      //check for blank input
      if (text == "")
        return false;

      // if logged in, insert task with user info, else, just insert task
      if (Meteor.user() !== null){
      Tasks.insert({
        text: text,
        createdAt: new Date(), // current time
        owner: Meteor.userId(), // _id of logged in user
        username: Meteor.user().username // username of logged in user
      });
      } else {
      Tasks.insert({
        text: text,
        createdAt: new Date(), 
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
