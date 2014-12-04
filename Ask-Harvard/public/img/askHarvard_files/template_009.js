(function(){
Template.__checkName("comment");
Template["comment"] = new Template("Template.comment", (function() {
  var view = this;
  return HTML.LI("\n    ", HTML.H4("\n      ", HTML.SPAN({
    "class": "author"
  }, Blaze.View(function() {
    return Spacebars.mustache(view.lookup("author"));
  })), "\n      ", HTML.SPAN({
    "class": "date"
  }, "on ", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("timestamp"));
  })), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("ownComment"));
  }, function() {
    return HTML.BUTTON({
      "class": "delete"
    }, HTML.CharRef({
      html: "&times;",
      str: "×"
    }));
  }), "\n    "), "\n    ", HTML.P(Blaze.View(function() {
    return Spacebars.mustache(view.lookup("body"));
  })), "\n  ");
}));

})();
