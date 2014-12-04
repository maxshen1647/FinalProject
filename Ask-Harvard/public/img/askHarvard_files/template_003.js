(function(){
Template.__checkName("loading");
Template["loading"] = new Template("Template.loading", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("spinner"));
}));

})();
