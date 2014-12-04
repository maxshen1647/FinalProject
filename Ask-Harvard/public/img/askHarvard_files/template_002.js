(function(){
Template.__checkName("task");
Template["task"] = new Template("Template.task", (function() {
  var view = this;
  return HTML.LI("\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("ownPost"));
  }, function() {
    return HTML.BUTTON({
      "class": "delete"
    }, HTML.CharRef({
      html: "&times;",
      str: "×"
    }));
  }), "\n\n    ", HTML.SPAN({
    "class": "text"
  }, Blaze.View(function() {
    return Spacebars.mustache(view.lookup("text"));
  })), "\n    \n    ", HTML.SPAN({
    "class": "signature"
  }, HTML.STRONG(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("username"));
  }))), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("harvardStudent"));
  }, function() {
    return HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "answerpage");
      },
      "class": "discuss btn btn-default"
    }, "Answer");
  }), "\n    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "answerpage");
    }
  }, "(", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("commentsCount"));
  }), " answers)"), "\n  ");
}));

})();
