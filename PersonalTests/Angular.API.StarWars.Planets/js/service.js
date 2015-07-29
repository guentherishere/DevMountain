app.service('parseService', function($http, $q) {

  this.getPlanet = function() {
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "https://swapi.co/api/planets/"
    }).then(function(response) {
      var arr = [];
      var parsedResponse = response.data.results;
      for (var i = 0; i < parsedResponse.length; i++) {
        arr.push({
          name: parsedResponse[i].name,
          climate: parsedResponse[i].climate,
          terrain: parsedResponse[i].terrain,
          diameter: parsedResponse[i].diameter,
          rotation_period: parsedResponse[i].rotation_period,
          surface_water: parsedResponse[i].surface_water
        })
      }
      console.log(parsedResponse);
      deferred.resolve(arr)
    })
    return deferred.promise;
  }
});
