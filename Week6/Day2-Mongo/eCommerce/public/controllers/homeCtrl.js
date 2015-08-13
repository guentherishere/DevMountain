app.controller('homeCtrl', function($scope, storeService) {

  var itemGrabber = function() {
    storeService.getItems().then(function(data) {
      $scope.products = data;
    });
  };
  itemGrabber();

});
