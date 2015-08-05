var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './weather.html',
      conroller: 'weatherCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
