app.service('storeService', function($http, $q) {

  this.storeService = function() {
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "http://localhost:1336/api"
    }).then(function(response) {
      var arr = [];
      var parsedResponse = response.data
      deferred.resolve(arr)
    })
    return deferred.promise;
  }
})
