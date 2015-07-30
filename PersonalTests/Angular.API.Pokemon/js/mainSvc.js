app.service('parseService', function($http, $q) {


  this.getPokemon = function() {
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "http://pokeapi.co/api/v1/pokemon/25/"
    }).then(function(response){
      var parsedResponse = response.data;
      var arr = [];
      console.log(parsedResponse);
      deferred.resolve(parsedResponse);
    })
    return deferred.promise;
  }
  });
