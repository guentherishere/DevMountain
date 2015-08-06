var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './weather.html',
      controller: 'weatherCtrl',
    })
    .when('/cloudy/:id', {
      templateUrl:'./weatherTemp/cloudy.html',
      controller: 'locationCtrl'
    })
    .when('/clear/:id', {
      templateUrl:'./weatherTemp/clear.html',
      controller: 'locationCtrl'
    })
    .when('/thunderstorm/:id', {
      templateUrl:'./weatherTemp/thunderstorm.html',
      controller: 'locationCtrl'
    })
    .when('/rain/:id', {
      templateUrl:'./weatherTemp/rain.html',
      controller: 'locationCtrl'
    })
    .when('/snow/:id', {
      templateUrl:'./weatherTemp/snow.html',
      controller: 'locationCtrl'
    })
    .when('/drizzle/:id', {
      templateUrl:'./weatherTemp/drizzle.html',
      controller: 'locationCtrl'
    })
    .when('/extreme/:id', {
      templateUrl:'./weatherTemp/extreme.html',
      controller: 'locationCtrl'
    })
    .when('/additional/:id', {
      templateUrl:'./weatherTemp/additional.html',
      controller: 'locationCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
