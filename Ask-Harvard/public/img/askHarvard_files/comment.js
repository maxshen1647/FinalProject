(function(){Template.comment.helpers({
  // checks whether the answer belongs to current user
  ownComment: function(){
    return this.userId === Meteor.userId();
  },
  // returns the time of submission
  timestamp: function() {
    return this.submitted.toString();
  }
});

// remove comment if clicked
Template.comment.events({
  "click .delete": function () {
    Comments.remove(this._id);
  }
});

})();
