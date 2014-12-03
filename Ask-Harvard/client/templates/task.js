// remove task if clicked
Template.task.events({
  "click .delete": function () {
    Tasks.remove(this._id);
  }
});

// checks whether post belongs to the current user
Template.task.helpers({
  ownPost: function(){
    return this.owner === Meteor.userId();
  },
  commentsCount: function() {   
  	return Comments.find({postId: this._id}).count();  
  }
});
