'use strict';

var app = angular.module('estore', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })
    .when('/admin', {
      templateUrl: './views/admin.html',
      controller: 'adminCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});