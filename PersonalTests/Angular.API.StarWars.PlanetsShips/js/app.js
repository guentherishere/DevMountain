var app = angular.module('starwars', ['ngRoute', 'chart.js']);

app.config(function($routeProvider){

    $routeProvider
      .when('/', {
        templateUrl: './splash.html',
      })
      .when('/planets', {
        templateUrl: './planets.html',
        controller: 'planetCtrl'
      })
      .when('/ships', {
        templateUrl: './ships.html',
        controller: 'shipCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
})
