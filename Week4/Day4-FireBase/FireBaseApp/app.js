var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.constant('fb', {
    url: 'https://crackling-torch-2556.firebaseio.com/mgForum'
  });

app.config(function($routeProvider) {

  $routeProvider
    .when('/threads', {
      templateUrl: './threads/threads.html',
      controller: 'threadsCtrl',
      resolve: {
        threadsRef: function(threadsService) {
          return threadsService.getThreads();
        }
      }
    })
    .when('/threads/:threadId', {
      templateUrl: 'threads/thread.html',
      controller: 'threadCtrl',
      resolve: {
        threadRef: function(threadsService, $route) {
          return threadsService.getThread($route.current.params.threadId);
        },
        commentsRef: function(threadsService, $route){
          return threadsService.getComments($route.current.params.threadId);
        }
      }
    })
    .otherwise({
      redirectTo: '/threads'
    });

});
