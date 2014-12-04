(function(){
Template.__checkName("homepage");
Template["homepage"] = new Template("Template.homepage", (function() {
  var view = this;
  return HTML.BODY({
    "class": "page-home"
  }, HTML.Raw('\n        <div class="page-in-home">\n          <div class="main-in-home">\n            <div id="home-bg"></div>\n            <div class="wrap-in-home"></div>\n          </div>\n        </div>\n        <form class="new-task">\n        <input id="ask-box" type="text" name="text" placeholder="Ask us a question!">\n        <input class="ask-anonymously" id="submit" type="submit" value="ask">\n      </form>\n      \n      '), HTML.LABEL({
    "class": "hide-completed"
  }, "\n        ", HTML.INPUT({
    "class": "ask-anonymously",
    type: "checkbox",
    checked: function() {
      return Spacebars.mustache(view.lookup("hideCompleted"));
    }
  }), "\n        Anonymous Inquiry\n      "), "\n    ", HTML.UL("\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("tasks"));
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("task")), "\n      " ];
  }), "\n    "), "\n      ");
}));

})();
