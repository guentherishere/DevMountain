var app = angular.module('miniRouting');

app.controller('productsCtrl', function($scope, $routeParams, productService){
  if($routeParams.id === 'shoes'){ //this id matches the name of the href in the index.html
    $scope.productData = productService.shoeData;
  } else if ($routeParams.id === 'socks'){ //this id matches the name of the href in the index.html
    $scope.productData = productService.sockData;
  }
})
