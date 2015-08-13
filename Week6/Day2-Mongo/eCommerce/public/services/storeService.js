app.service('storeService', function($q, $http) {

  this.getItems = function() {
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "http://localhost:1336/api/store"
    }).then(function(response) {
      var parsedResponse = response.data;
      deferred.resolve(parsedResponse);
    });
    return deferred.promise;
  };

  this.addProductData = function(product) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:1336/api/store',
      data: {
        title: product.title,
        description: product.description,
        price: product.price
      }
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.deleteProductData = function(product) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:1336/api/store' + product._id
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.updateProductData = function(product) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:1336/api/store' + product._id,
      data: {
        title: product.title,
        description: product.description,
        price: product.price
      }
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

});
