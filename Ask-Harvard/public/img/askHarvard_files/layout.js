(function(){// enable username and email for login
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

// functions that do work on the layout.html
Template.layout.helpers({
    // returns number of questions in database
    questionsCount: function () {
      return Tasks.find().count();
    },   
    // returns number of comments in database
    answersCount: function () {
    return Comments.find().count();
    }
  });

// verification popup if homepage is induced by verification link
Template.Homepage.created = function() {
  if (Accounts._verifyEmailToken) {
    Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
      if (err != null) {
        if (err.message = 'Verify email link expired [403]') {
          console.log('Sorry this verification link has expired.')
        }
      } else {
        console.log('Thank you! Your email address has been confirmed.')
      }
    });
  }
};

})();
