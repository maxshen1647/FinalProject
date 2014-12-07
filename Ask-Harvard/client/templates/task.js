// remove task if clicked
Template.task.events({
  "click .delete": function () {
    Tasks.remove(this._id);
    Comments.remove({postId: this._id}); //doesnt work !?!?!
  }
});


Template.task.helpers({
  // checks whether post belongs to the current user
  ownPost: function(){
    return this.userId === Meteor.userId();
  },
  // counts the number of answers on the current question
  commentsCount: function() {   
  	return Comments.find({postId: this._id}).count();  
  }
});
