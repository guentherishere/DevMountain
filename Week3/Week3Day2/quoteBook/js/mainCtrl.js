angular.module("quoteBook").controller("mainCtrl", function($scope, mainService){

// $scope.getData = function() {
  $scope.data = mainService.getData();
// }
// $scope.getData();

$scope.addData = function(quote, author) {
  mainService.addData(quote, author);
}

$scope.removeData = function(quote) {
  mainService.removeData(quote);
}

// $scope.jsonParse = function(data) {
//   mainService.jsonParse(data);
// }
//
// $scope.jsonStringify = function(data) {
//   mainService.jsonStringify(data);
// }

});
