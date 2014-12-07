// Start new mongo database for questions
Questions = new Mongo.Collection("questions");

Questions.allow({  
  insert: function(userId, doc) {    
  // only allow posting if you are logged in    
    return !! userId;
  },
  remove: function(userId, doc) {    
  // only allow deleting if you are logged in    
    return !! userId;
  }
});
