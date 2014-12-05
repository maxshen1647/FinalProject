// Start new mongo database for comments
Comments = new Mongo.Collection('comments');

//allows removal of comments if logged in
Comments.allow({  
  remove: function(userId, doc) {    
  // only allow deleting if you are logged in    
    return !! userId;
  }
});

//insert comment when method is called in the client side
Meteor.methods({  
	commentInsert: function(commentAttributes) {    
		check(this.userId, String);    
		check(commentAttributes, {      
			postId: String,      
			body: String    
		});    
		var user = Meteor.user();    
		var post = Tasks.findOne(commentAttributes.postId);    
		if (!post)      
			alert('You must answer a question');    
		comment = _.extend(commentAttributes, {      
			userId: user._id,      
			author: user.username,      
			submitted: new Date(),
			upvoters: [],
			votes: 0    
		});    
		return Comments.insert(comment);  
	},

	upvote: function(postId) {
		check(this.userId, String); // produces error in console
		check(postId, String);
    
        var affected = Comments.update({      
          _id: postId,       
          upvoters: {$ne: this.userId}    
        }, {      
          $addToSet: {upvoters: this.userId},      
          $inc: {votes: 1}    });    
    if (! affected)      
      alert('invalid', "You weren't able to upvote that post");
	}	
});
