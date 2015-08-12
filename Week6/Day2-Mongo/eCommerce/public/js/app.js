var app = angular.module('estore', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
});
