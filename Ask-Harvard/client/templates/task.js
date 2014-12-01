Template.task.events({
  "click .delete": function () {
    Tasks.remove(this._id);
  }
});

