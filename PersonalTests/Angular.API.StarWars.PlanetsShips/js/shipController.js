app.controller('shipCtrl', function($scope, shipService) {

  $scope.getParseData = function() {
    shipService.getShip().then(function(response) {
      console.log(response);
    });
  }
  $scope.getParseData();

//Angular Chart Plugin
  $scope.labels =["Length", "Cost(x10000)", "Crew", "Passengers", "Cargo(x10000)", "MGLT"];

  $scope.data = [
    [22,19,55,77,25]
  ];

//Data I want to put in $scope.data that comes from shipService:
//       "cost_in_credits": "240000",
//       "length": "38",
//       "crew": "5",
//       "passengers": "75",
//       "cargo_capacity": "180000",
//       "MGLT": "70",


});
