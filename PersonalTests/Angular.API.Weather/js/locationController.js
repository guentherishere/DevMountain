app.controller('locationCtrl', function($scope, $routeParams, $location, weatherService) {

  var city = $routeParams.id;

  $scope.getConditions = function(city) {
    weatherService.getWeather(city).then(function(response) {
      $scope.weatherData = response;
    })
  }
  $scope.getConditions(city);

});
