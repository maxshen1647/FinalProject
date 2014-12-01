// enable username and email for login
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

//functions that do work on the layout.html
Template.layout.helpers({
    //returns number of questions in database
    questionsCount: function () {
      return Tasks.find().count();
    }   
  });