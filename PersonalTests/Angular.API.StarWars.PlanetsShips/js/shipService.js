app.service('shipService', function($http, $q) {

  this.getShip = function() {
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "http://swapi.co/api/starships/"
    }).then(function(response) {
      var arr = [];
      var parsedResponse = response.data.results;
      for (var i = 0; i < parsedResponse.length; i++) {
        arr.push({
          name: parsedResponse[i].name,
          manufacturer: parsedResponse[i].manufacturer,
          cost_in_credits: parsedResponse[i].cost_in_credits,
          length: parsedResponse[i].length,
          crew: parsedResponse[i].crew,
          passengers: parsedResponse[i].passengers,
          cargo_capacity: parsedResponse[i].cargo_capacity,
          starship_class: parsedResponse[i].starship_class,
          model: parsedResponse[i].model,
          MGLT: parsedResponse[i].MGLT
        })
      }
      console.log(parsedResponse);
      deferred.resolve(arr)
    })
    return deferred.promise;
  }
});
