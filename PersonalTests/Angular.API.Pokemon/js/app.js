var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: './templates/homeTmpl.html',
      controller: 'mainCtrl'
    })
    .when('/templates/profileTmpl/:id', {
      templateUrl: './templates/profileTmpl.html'

    })
    .otherwise({
      redirectTo: '/home'
    })

}]);
