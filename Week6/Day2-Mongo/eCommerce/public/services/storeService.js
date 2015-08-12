'use strict';

app.service('storeService', function($q, $http) {

   this.getItems = function() {
     var deferred = $q.defer();
     $http({
       method: "GET",
       url: "http://localhost:1336/api/store"
     }).then(function(response) {
       var parsedResponse = response.data
       deferred.resolve(parsedResponse)
     })
     return deferred.promise;
   };

});
