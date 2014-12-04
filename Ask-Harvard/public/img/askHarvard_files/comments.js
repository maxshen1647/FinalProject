(function(){// Start new mongo database for comments
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
			alert('invalid-comment', 'You must comment on a post');    
		comment = _.extend(commentAttributes, {      
			userId: user._id,      
			author: user.username,      
			submitted: new Date()    
		});    
		return Comments.insert(comment);  
	}
});

})();
