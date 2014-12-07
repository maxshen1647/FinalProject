//functions that do work on the homepage.html
Template.homepage.helpers({
    questions: function () {
      // return all of the questions
      return Questions.find({}, {sort: {createdAt: -1}});
    },
    // returns the status of the anon inquiry checkbox
    askAnonymously: function () {
      return Session.get("askAnonymously");
    }
  });

  // events that happen in homepage.html
  Template.homepage.events({
     // This function is called when the new question form is submitted
    "submit .new-question": function (event) {
      var text = event.target.text.value;

      //check for blank input
      if (text == "")
        return false;

      // if not logged in, display alert. if anon box is checked, log username as anon
      // insert question into database
      if (Meteor.user() == null){
      alert('Please sign in or register first. Thanks!');
      } else if (Session.get("askAnonymously")){
        Questions.insert({
          text: text,
          createdAt: new Date(),
          userId: Meteor.userId(), // _id of logged in user
          username: "Anonymous" // logs the username as anonymous
        });  
      } else {
        Questions.insert({
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
    "change .ask-anonymously input": function (event) {
      Session.set("askAnonymously", event.target.checked);
    }
  });

