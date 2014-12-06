Template.comment.helpers({
  // checks whether the answer belongs to current user
  ownComment: function(){
    return this.userId === Meteor.userId();
  },
  // returns the time of submission
  timestamp: function() {
    return this.submitted.toString();
  },
  // returns the status of the upvote button
  upvotedClass: function() {    
    var userId = Meteor.userId();    
    if (userId && !_.include(this.upvoters, userId)) {      
      return 'btn-primary upvotable';    
    } else {      
      return 'disabled';    
    }  
  }
});

// remove comment if clicked
Template.comment.events({
  "click .delete": function () {
    Comments.remove(this._id);
  },
  "click .upvotable": function(e) {   
    e.preventDefault();    
    Meteor.call('upvote', this._id);  
  }
});