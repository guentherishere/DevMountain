var app = angular.module('ecommerce', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/index.html',
      controller: 'homeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
});
