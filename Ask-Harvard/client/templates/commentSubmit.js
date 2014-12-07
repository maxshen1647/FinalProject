Template.answerSubmit.created = function() {
  Session.set('answerSubmitErrors', {});
}

Template.answerSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('answerSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('answerSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.answerSubmit.events({
   // acquire user inputs and put into the answer variable when form is submitted
  'submit form': function(e, template) {
    e.preventDefault();

    var $body = $(e.target).find('[name=body]');
    var answer = {
      body: $body.val(),
      questionId: template.data._id
    };

    var errors = {};
    if (! answer.body) {
      errors.body = "Please write some content";
      return Session.set('answerSubmitErrors', errors);
    }
    // call the method answerInsert (defined server side), which insert the answer into database
    Meteor.call('answerInsert', answer, function(error, answerId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});