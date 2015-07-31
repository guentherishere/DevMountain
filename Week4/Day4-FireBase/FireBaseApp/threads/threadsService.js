app.service('threadsService', function(fb) {

  var firebaseRef = new Firebase("https://crackling-torch-2556.firebaseio.com/mgForum");

  this.getThreads = function() {
    return new Firebase(fb.url + '/threads');
  }

  this.getThread = function(threadId){
    return new Firebase(fb.url + '/threads/' + threadId)
  }

  this.getComments = function(threadId){
    return new Firebase(fb.url + '/threads/' + threadId + '/comments')
  }




})
