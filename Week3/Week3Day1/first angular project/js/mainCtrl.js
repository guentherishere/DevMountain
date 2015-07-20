app.controller("mainCtrl", function($scope) {
  $scope.friends = ['Jordan', 'Frank', 'Bae'];
  $scope.notFriends = ['Bob', 'Loblaw', 'Law Blog'];
  $scope.addFriend = function(){
      $scope.notFriends.push($scope.newFriends);
  }

});
