// remove question if clicked
Template.question.events({
  "click .delete": function () {
    Questions.remove(this._id);
    Answers.remove({questionId: this._id}); //doesnt work !?!?!
  }
});


Template.question.helpers({
  // checks whether question belongs to the current user
  ownQuestion: function(){
    return this.userId === Meteor.userId();
  },
  // counts the number of answers on the current question
  answersCount: function() {   
  	return Answers.find({questionId: this._id}).count();  
  }
});
