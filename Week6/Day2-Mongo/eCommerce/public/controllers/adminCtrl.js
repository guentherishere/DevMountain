app.controller('adminCtrl', function($scope, storeService) {

  var itemGrabber = function() {
    storeService.getItems().then(function(response) {
      $scope.products = data;
    });
  };
  itemGrabber();
  $scope.addNewProduct = function() {
    storeService.addProductData($scope.product).then(function(data) {
      itemGrabber();
    });
  };
  $scope.deleteProduct = function(product) {
    console.log(product);
    storeService.deleteProductData(product).then(function(data) {
      itemGrabber();
    });
  };
  $scope.updateProduct = function(product) {
    storeService.updateProductData(product).then(function(data) {
      itemGrabber();
    });
  };
});
