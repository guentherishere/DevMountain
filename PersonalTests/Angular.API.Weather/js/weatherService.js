app.service('weatherService', function($http, $q) {

  this.getWeather = function(location) {
    var deferred = $q.defer();
    $http({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial'
    }).then(function(response) {
      var parsedResponse = response.data;
      console.log(parsedResponse);
      var arr = [];
      arr.push({
        name: parsedResponse.name,
        temp: parsedResponse.main.temp,
        hiTemp: parsedResponse.main.temp_max,
        loTemp: parsedResponse.main.temp_min,
        conditions: parsedResponse.weather[0].main,
        description: parsedResponse.weather[0].description
      })

      deferred.resolve(arr)
    })
    return deferred.promise;
  }



});
