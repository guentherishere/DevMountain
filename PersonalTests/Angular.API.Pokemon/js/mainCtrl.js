app.controller('mainCtrl', function($scope, $routeParams, parseService){

  $scope.getPokemon = function() {
      parseService.getPokemon().then(function(response) {
        $scope.pokeData = response;
      });
    }
  $scope.getPokemon()

})
