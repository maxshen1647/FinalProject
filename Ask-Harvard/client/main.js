// allows client to obtain data from the main database
// add stuff here to control what data the client can obtain
Meteor.subscribe('Tasks');

// enable username and email for login
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

