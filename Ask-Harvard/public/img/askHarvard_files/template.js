(function(){
Template.__checkName("commentSubmit");
Template["commentSubmit"] = new Template("Template.commentSubmit", (function() {
  var view = this;
  return HTML.FORM({
    name: "comment",
    "class": "comment-form form"
  }, "\n    ", HTML.DIV({
    "class": function() {
      return [ "form-group ", Spacebars.mustache(view.lookup("errorClass"), "body") ];
    }
  }, "\n        ", HTML.DIV({
    "class": "controls"
  }, "\n            ", HTML.Raw('<label for="body">Answer this question</label>'), "\n            ", HTML.TEXTAREA({
    name: "body",
    id: "body",
    "class": "form-control",
    rows: "3"
  }), "\n            ", HTML.SPAN({
    "class": "help-block"
  }, Blaze.View(function() {
    return Spacebars.mustache(view.lookup("errorMessage"), "body");
  })), "\n        "), "\n    "), HTML.Raw('\n    <button type="submit" class="btn btn-primary">Answer!</button>\n  '));
}));

})();
