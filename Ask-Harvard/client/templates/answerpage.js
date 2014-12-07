Template.answerpage.helpers({  
	// returns all of the comments on the current post
	answers: function() {    
		return Answers.find({questionId: this._id});  
	},
	// checks whether current user is registered with a college.harvard.edu email
 	harvardStudent: function(){
	  	var email = Meteor.user().emails[0].address;
	  	var n = email.indexOf("@");
	  	var extension = email.substring(n);
    	return extension === "@college.harvard.edu";
  	}
});