Controller is not meant to manipulate data, that's what a service is for. Manipulating/getting data.
A controller manipulates html

singleton - only one instance, available through the entire scope

service can allow controllers to communicate

service example:
angular.module('ServiceExample').service('service'), function() {
  this.proplookup = function(string){
    console.log("runn");
    <!-- var arr = string.match(/\[\[(.*?)\]\]/g); -->
    if(!arr){
      return false;
    }
    arr = arr.map(function(item){
      item = item.replace(/\[\[|\]\]/g, "");
      return $scope[item];
    });
    $scope.values = arr.reduce(function(prev, curr){
      return prev + " " + curr;
    });
    if(!answer) return = "no such properties on $scope";
    $scope.strings = "";
  };
}

service does not have access to $scope becuse it exists across the entire application.

Gives the controller access to the service
angular.module('ServiceExample').controller('ctrl3', function($scope, service){

//services should be split up by concerns
