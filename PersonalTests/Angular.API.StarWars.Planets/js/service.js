app.service('parseService', function($http, $q) {

  this.getPlanet = function() {
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "https://swapi.co/api/planets/"
    }).then(function(response) {
      var parsedResponse = response.data.results;
      console.log(parsedResponse);
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }
});
