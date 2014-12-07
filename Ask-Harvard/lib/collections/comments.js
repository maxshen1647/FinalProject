// Start new mongo database for answers
Answers = new Mongo.Collection('answers');

//allows removal of answers if logged in
Answers.allow({  
  remove: function(userId, doc) {    
  // only allow deleting if you are logged in    
    return !! userId;
  }
});

//insert answer when method is called in the client side
Meteor.methods({  
	answerInsert: function(answerAttributes) {    
		check(this.userId, String);    
		check(answerAttributes, {      
			questionId: String,      
			body: String    
		});    
		var user = Meteor.user();    
		var question = Questions.findOne(answerAttributes.questionId);    
		if (!question)      
			alert('You must answer a question');    
		answer = _.extend(answerAttributes, {      
			userId: user._id,      
			author: user.username,      
			submitted: new Date(),
			upvoters: [],
			votes: 0    
		});    
		return Answers.insert(answer);  
	},

	upvote: function(questionId) {
		check(this.userId, String); // produces error in console
		check(questionId, String);
    
        var affected = Answers.update({      
          _id: questionId,       
          upvoters: {$ne: this.userId}    
        }, {      
          $addToSet: {upvoters: this.userId},      
          $inc: {votes: 1}    });    
    if (! affected)      
      alert("You weren't able to upvote that question");
	}	
});
