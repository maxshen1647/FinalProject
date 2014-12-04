Template.comment.helpers({
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