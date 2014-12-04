(function(){// remove task if clicked
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
  // checks whether current user is registered with a college.harvard.edu email
  harvardStudent: function(){
      var email = Meteor.user().emails[0].address;
      var n = email.indexOf("@");
      var extension = email.substring(n);
      return extension === "@college.harvard.edu";
  },
  // counts the number of answers on the current question
  commentsCount: function() {   
  	return Comments.find({postId: this._id}).count();  
  }
});

})();
