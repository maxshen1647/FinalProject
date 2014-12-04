(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return [ HTML.BODY({
    "class": "top-banner"
  }, "\n		", HTML.DIV({
    id: "top-menu"
  }, "\n			", HTML.DIV({
    id: "menu-top"
  }, "\n				", HTML.Raw('<a id="link-main" href="/">Main</a>'), "\n				", HTML.Raw('<a id="logo" href="/homepage">ask<span>Harvard</span></a>'), "\n				", HTML.A({
    id: "link-login"
  }, Spacebars.include(view.lookupTemplate("loginButtons"))), "\n			"), "\n			", HTML.DIV({
    id: "counter-top-right"
  }, Blaze.View(function() {
    return Spacebars.mustache(view.lookup("questionsCount"));
  }), " Questions Asked. ", Blaze.View(function() {
    return Spacebars.mustache(view.lookup("answersCount"));
  }), " Total Answers."), "\n		"), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("yield")) ];
}));

})();
