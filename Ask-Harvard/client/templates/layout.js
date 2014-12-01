//functions that do work on the layout.html
Template.layout.helpers({
    //returns number of questions in database
    questionsCount: function () {
      return Tasks.find().count();
    }   
  });