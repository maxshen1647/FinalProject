(function(){
Template.__checkName("answerpage");
Template["answerpage"] = new Template("Template.answerpage", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("task")), "\n  ", HTML.UL("    \n  	", Blaze.Each(function() {
    return Spacebars.call(view.lookup("comments"));
  }, function() {
    return [ "      \n  		", Spacebars.include(view.lookupTemplate("comment")), "    \n  	" ];
  }), "  \n  "), "\n  \n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("harvardStudent"));
  }, function() {
    return [ "    \n    ", Spacebars.include(view.lookupTemplate("commentSubmit")), "  \n  " ];
  }, function() {
    return [ "    \n    ", HTML.P("Please log in to leave a comment."), "  \n  " ];
  }) ];
}));

})();
