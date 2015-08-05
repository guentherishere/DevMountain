app.controller('weatherCtrl', function($scope, weatherService) {

  $scope.test = "weatherCtrl link test";
  $scope.getLocation = function(location) {
    weatherService.getWeather(location).then(function(response) {
      console.log(response);
      $scope.weatherData = response;
    })
  }
});
