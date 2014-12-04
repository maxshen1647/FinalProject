Template.answerpage.helpers({  
	// returns all of the comments on the current post
	comments: function() {    
		return Comments.find({postId: this._id});  
	}
});