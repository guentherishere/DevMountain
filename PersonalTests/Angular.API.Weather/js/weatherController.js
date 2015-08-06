app.controller('weatherCtrl', function($scope, $location, weatherService) {

  $scope.getLocation = function(location) {
    weatherService.getWeather(location).then(function(response) {
      $scope.weatherCondition = weatherBg;
      $scope.weatherData = response;
      $location.path(weatherBg + "/" + city);
    })
  }


});
